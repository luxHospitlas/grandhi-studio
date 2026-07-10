import {defineType, defineField} from 'sanity'

/**
 * Reusable "Internal Link" annotation.
 *
 * Used inside rich-text fields so editors can link selected text to another
 * page on the site. Two ways to set the target:
 *   • Pick a page  — a reference to a condition/treatment/blog document
 *     (never breaks when a slug changes).
 *   • Manual path  — type a path like "/contact" or "/treatments" for pages
 *     that aren't documents (listing pages, home, contact, etc.).
 */
export default defineType({
  name: 'internalLink',
  title: 'Internal Link',
  type: 'object',
  fields: [
    defineField({
      name: 'linkType',
      title: 'Link To',
      type: 'string',
      initialValue: 'reference',
      options: {
        list: [
          {title: 'Pick a page', value: 'reference'},
          {title: 'Manual path', value: 'path'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'reference',
      title: 'Linked Page',
      description: 'Pick the condition, treatment, or blog post this text should link to.',
      type: 'reference',
      to: [{type: 'eachCondition'}, {type: 'eachTreatment'}, {type: 'blog'}],
      hidden: ({parent}) => parent?.linkType === 'path',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {linkType?: string}
          if (parent?.linkType !== 'path' && !value) return 'Pick a page to link to'
          return true
        }),
    }),
    defineField({
      name: 'path',
      title: 'Path',
      description: 'e.g. /contact, /treatments, or / for the home page.',
      type: 'string',
      hidden: ({parent}) => parent?.linkType !== 'path',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {linkType?: string}
          if (parent?.linkType === 'path') {
            if (!value) return 'Enter a path'
            if (!value.startsWith('/')) return 'Path should start with "/"'
          }
          return true
        }),
    }),
  ],
})
