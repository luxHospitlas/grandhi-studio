import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hospital',
  title: 'Hospital',
  type: 'document',
  fields: [
    defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
    defineField({name: 'name', title: 'Hospital Name', type: 'string'}),
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'logo', title: 'Logo', type: 'image'}),
    defineField({
      name: 'features',
      title: 'Feature Badges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon (emoji)', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Badge Image',
              description: 'Optional image for the badge — used instead of the emoji icon if provided.',
              type: 'image',
            }),
            defineField({name: 'label', title: 'Label', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({name: 'websiteHref', title: 'Website URL', type: 'url'}),
    defineField({name: 'websiteLabel', title: 'Website Button Label', type: 'string'}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'tagline'},
  },
})
