/**
 * Read-only scan: find every legacy `internalLink` annotation that has no
 * `reference` set (i.e. still holds an old `href` string), anywhere in any
 * document. Reports the stored href so we can decide how to migrate each.
 */
import {getCliClient} from 'sanity/cli'

const client = getCliClient()

function walk(node: any, hits: any[]) {
  if (!node || typeof node !== 'object') return
  if (Array.isArray(node)) {
    for (const n of node) walk(n, hits)
    return
  }
  if (node._type === 'internalLink' && !(node.reference && node.reference._ref)) {
    hits.push({href: node.href ?? null, key: node._key ?? null})
  }
  for (const k of Object.keys(node)) {
    if (k === '_type') continue
    walk(node[k], hits)
  }
}

async function run() {
  const docs: any[] = await client.fetch('*[!(_id in path("_.**"))]')
  let docCount = 0
  let linkCount = 0
  const hrefTally = new Map<string, number>()
  for (const doc of docs) {
    const hits: any[] = []
    walk(doc, hits)
    if (hits.length) {
      docCount++
      linkCount += hits.length
      console.log(`${doc._id}  (${doc._type}) — ${hits.length} broken internal link(s)`)
      for (const h of hits) {
        const href = h.href || '(no href)'
        hrefTally.set(href, (hrefTally.get(href) || 0) + 1)
      }
    }
  }
  console.log(`\n=== ${linkCount} legacy internal links across ${docCount} documents ===`)
  console.log('\nDistinct hrefs:')
  ;[...hrefTally.entries()]
    .sort((a, b) => b[1] - a[1])
    .forEach(([href, n]) => console.log(`  ${n}×  ${href}`))
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
