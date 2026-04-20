import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutDoctor',
  title: 'About Doctor',
  type: 'document',
  fields: [
    defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
    defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
    defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
    defineField({name: 'bio', title: 'Bio', type: 'text'}),
    defineField({name: 'profileHref', title: 'Full Profile Link', type: 'string'}),
    defineField({name: 'profileLabel', title: 'Full Profile Link Label', type: 'string'}),
    defineField({
      name: 'tags',
      title: 'Credential Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'stats',
      title: 'Credential Stats',
      description: 'Stats shown as number/value with a short label below.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              description: 'Main highlighted value (e.g. "28++", "2,000+", "Advanced")',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              description: 'Small text shown below the value (e.g. "YEARS EXP.", "SURGERIES")',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        },
      ],
    }),
  ],
})
