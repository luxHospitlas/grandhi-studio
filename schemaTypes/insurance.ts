//File: insurance.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'insurance',
  title: 'Insurance',
  type: 'document',
  fields: [
    defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
    defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
    defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Info Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon (emoji)', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Card Image',
              description: 'Optional image for the card — used instead of the emoji icon if provided.',
              type: 'image',
            }),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'string'}),
          ],
        },
      ],
    }),
  ],
})
