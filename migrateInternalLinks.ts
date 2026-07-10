/**
 * One-time migration: fix legacy `internalLink` annotations.
 *
 * Old internal links stored a full `href` (e.g.
 * "https://drtagore.com/conditions/piles"). The new schema uses either a
 * `reference` (pick a page) or a `path` (manual). This walks every document,
 * and for each internalLink that has no `reference`:
 *   • /conditions/<slug>, /treatments/<slug>, /blog/<slug>  -> reference (if the doc exists)
 *   • anything else (/, /contact, /treatments, ...)          -> { linkType:'path', path }
 * The stale `href` is removed.
 *
 * Run (dry run):   npx sanity exec migrateInternalLinks.ts --with-user-token
 * Apply:     APPLY=1 npx sanity exec migrateInternalLinks.ts --with-user-token
 */
import {getCliClient} from 'sanity/cli'

const APPLY = process.env.APPLY === '1'
const client = getCliClient()

const SITE = 'https://drtagore.com'

function toRelative(href: string): string {
  let p = String(href).trim()
  if (p.startsWith(SITE)) p = p.slice(SITE.length)
  if (!p.startsWith('/')) p = '/' + p
  return p.replace(/\/+$/, '') || '/' // strip trailing slash, keep "/" for home
}

// slug -> _id maps for the three referenceable types
async function buildMaps() {
  const rows: {id: string; type: string; slug: string}[] = await client.fetch(
    `*[_type in ['eachCondition','eachTreatment','blog'] && defined(slug.current)]{"id":_id,"type":_type,"slug":slug.current}`,
  )
  const map: Record<string, Record<string, string>> = {
    eachCondition: {},
    eachTreatment: {},
    blog: {},
  }
  for (const r of rows) {
    // ignore drafts when resolving targets; prefer the published id
    const id = r.id.replace(/^drafts\./, '')
    map[r.type][r.slug] = id
  }
  return map
}

function resolve(rel: string, maps: Record<string, Record<string, string>>) {
  const patterns: [RegExp, string][] = [
    [/^\/conditions\/([^/]+)$/, 'eachCondition'],
    [/^\/treatments\/([^/]+)$/, 'eachTreatment'],
    [/^\/blog\/([^/]+)$/, 'blog'],
  ]
  for (const [re, type] of patterns) {
    const m = rel.match(re)
    if (m) {
      const id = maps[type][m[1]]
      if (id) return {linkType: 'reference', _ref: id}
    }
  }
  return {linkType: 'path', path: rel}
}

function fixNode(node: any, maps: any, stats: {n: number}): any {
  if (!node || typeof node !== 'object') return node
  if (Array.isArray(node)) return node.map((n) => fixNode(n, maps, stats))
  // Only touch legacy links that still carry an `href`. Links already migrated
  // to a `reference` or a `path` are left untouched so re-runs are safe no-ops
  // (otherwise a second pass would find no href and clobber paths to "/").
  const alreadyMigrated =
    (node.reference && node.reference._ref) || (node.linkType === 'path' && typeof node.path === 'string')
  if (node._type === 'internalLink' && node.href !== undefined && !alreadyMigrated) {
    stats.n++
    const rel = node.href ? toRelative(node.href) : '/'
    const r = resolve(rel, maps)
    const base = {_type: 'internalLink', _key: node._key}
    if (r.linkType === 'reference') {
      return {...base, linkType: 'reference', reference: {_type: 'reference', _ref: r._ref}}
    }
    return {...base, linkType: 'path', path: r.path}
  }
  const out: any = Array.isArray(node) ? [] : {}
  for (const k of Object.keys(node)) out[k] = fixNode(node[k], maps, stats)
  return out
}

async function run() {
  const maps = await buildMaps()
  const docs: any[] = await client.fetch('*[!(_id in path("_.**"))]')
  let changed = 0
  let links = 0
  const tx = client.transaction()
  for (const doc of docs) {
    const stats = {n: 0}
    const fixed = fixNode(doc, maps, stats)
    if (stats.n > 0) {
      changed++
      links += stats.n
      console.log(`${doc._id} (${doc._type}) — fixed ${stats.n} link(s)`)
      const {_rev, ...rest} = fixed
      if (APPLY) tx.createOrReplace(rest)
    }
  }
  console.log(`\n${links} link(s) across ${changed} document(s).`)
  if (APPLY && changed > 0) {
    await tx.commit({visibility: 'async'})
    console.log('✅ Committed.')
  } else if (!APPLY) {
    console.log('Dry run — nothing written. Re-run with APPLY=1 to apply.')
  }
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
