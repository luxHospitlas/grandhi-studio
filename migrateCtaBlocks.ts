/**
 * One-time migration: simplify `ctaBlock` instances created with the old shape
 * (a `buttons` array with link actions) to the new shape (text only). Moves the
 * first button's label into `buttonText` and removes `buttons`.
 *
 * Run (dry run):   npx sanity exec migrateCtaBlocks.ts --with-user-token
 * Apply:     APPLY=1 npx sanity exec migrateCtaBlocks.ts --with-user-token
 */
import {getCliClient} from 'sanity/cli'

const APPLY = process.env.APPLY === '1'
const client = getCliClient()

function fix(node: any, stats: {n: number}): any {
  if (!node || typeof node !== 'object') return node
  if (Array.isArray(node)) return node.map((n) => fix(n, stats))
  if (node._type === 'ctaBlock' && 'buttons' in node) {
    stats.n++
    const firstLabel = Array.isArray(node.buttons) && node.buttons[0]?.label
    const {buttons, ...rest} = node
    return {...rest, buttonText: node.buttonText || firstLabel || undefined}
  }
  const out: any = {}
  for (const k of Object.keys(node)) out[k] = fix(node[k], stats)
  return out
}

async function run() {
  const docs: any[] = await client.fetch('*[!(_id in path("_.**"))]')
  let changed = 0
  let blocks = 0
  const tx = client.transaction()
  for (const doc of docs) {
    const stats = {n: 0}
    const fixed = fix(doc, stats)
    if (stats.n > 0) {
      changed++
      blocks += stats.n
      console.log(`${doc._id} (${doc._type}) — ${stats.n} ctaBlock(s)`)
      const {_rev, ...rest} = fixed
      if (APPLY) tx.createOrReplace(rest)
    }
  }
  console.log(`\n${blocks} ctaBlock(s) across ${changed} document(s).`)
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
