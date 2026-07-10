/**
 * One-time migration: convert legacy plain-string values into rich-text blocks
 * for every field whose schema type was changed to `richText`.
 *
 * Why: fields like `whatIsBody`, `description`, FAQ answers, etc. used to be
 * plain `text` (a string). They are now `richText` (PortableText array). Old
 * documents still store a string, so the Studio shows "Invalid property value".
 * This walks the real schema, finds those fields, and rewraps each string as a
 * block — preserving the exact text and splitting blank-line paragraphs.
 *
 * Run (dry run, read-only):   npx sanity exec migrateRichText.ts --with-user-token
 * Apply for real:       APPLY=1 npx sanity exec migrateRichText.ts --with-user-token
 */
import {getCliClient} from 'sanity/cli'
import {randomUUID} from 'node:crypto'
import {schemaTypes} from './schemaTypes'

const APPLY = process.env.APPLY === '1'
const client = getCliClient()

const key = () => randomUUID().replace(/-/g, '').slice(0, 12)

function toRichText(str: string) {
  const text = String(str)
  if (!text.trim()) return []
  return text
    .split(/\n{2,}/) // blank line => new paragraph
    .map((para) => ({
      _type: 'block',
      _key: key(),
      style: 'normal' as const,
      markDefs: [],
      children: [{_type: 'span', _key: key(), text: para, marks: []}],
    }))
}

type Node = any

function convert(node: Node, value: any): {value: any; changed: boolean} {
  if (value === null || value === undefined) return {value, changed: false}

  // A rich-text field that still holds a legacy string.
  if (node && node.type === 'richText') {
    if (typeof value === 'string') return {value: toRichText(value), changed: true}
    return {value, changed: false}
  }

  // Object / document — recurse into its fields.
  if (node && Array.isArray(node.fields) && typeof value === 'object' && !Array.isArray(value)) {
    let changed = false
    const out: any = {...value}
    for (const f of node.fields) {
      if (Object.prototype.hasOwnProperty.call(out, f.name)) {
        const r = convert(f, out[f.name])
        if (r.changed) {
          out[f.name] = r.value
          changed = true
        }
      }
    }
    return {value: out, changed}
  }

  // Array — recurse into each member using its schema.
  if (node && node.type === 'array' && Array.isArray(value) && Array.isArray(node.of)) {
    let changed = false
    const out = value.map((item) => {
      if (item && typeof item === 'object') {
        const member =
          node.of.find((m: Node) => (m.name || m.type) === item._type) ||
          (node.of.length === 1 ? node.of[0] : null)
        if (member) {
          const r = convert(member, item)
          if (r.changed) {
            changed = true
            return r.value
          }
        }
      }
      return item
    })
    return {value: out, changed}
  }

  return {value, changed: false}
}

async function run() {
  const docTypes = (schemaTypes as Node[]).filter((t) => t.type === 'document')
  const byName = new Map(docTypes.map((t) => [t.name, t]))
  const typeNames = [...byName.keys()]

  console.log(`${APPLY ? 'APPLYING' : 'DRY RUN'} — scanning ${typeNames.length} document types\n`)

  const docs: any[] = await client.fetch('*[_type in $types]', {types: typeNames})
  let changedDocs = 0
  let changedFields = 0
  const tx = client.transaction()

  for (const doc of docs) {
    const typeDef = byName.get(doc._type)
    if (!typeDef) continue
    const before = JSON.stringify(doc)
    const {value: migrated, changed} = convert(typeDef, doc)
    if (!changed) continue
    changedDocs++
    // rough count of converted fields = difference in string->array conversions
    changedFields += (before.match(/"richText"/g) || []).length // not exact; informational
    const {_rev, ...rest} = migrated
    if (APPLY) tx.createOrReplace(rest)
    console.log(`  ${doc._id}  (${doc._type})`)
  }

  console.log(`\n${changedDocs} document(s) need migration.`)
  if (APPLY && changedDocs > 0) {
    await tx.commit({visibility: 'async'})
    console.log('✅ Committed.')
  } else if (!APPLY) {
    console.log('No changes written (dry run). Re-run with APPLY=1 to apply.')
  }
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
