import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Doctor Name', type: 'string'}),
    defineField({name: 'designation', title: 'Designation', type: 'string'}),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    defineField({name: 'hospital', title: 'Hospital', type: 'string'}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'year', title: 'Copyright Year', type: 'string'}),
    defineField({name: 'copyright', title: 'Copyright Text', type: 'string'}),
    defineField({
      name: 'links',
      title: 'Footer Quick Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
  ],
})
