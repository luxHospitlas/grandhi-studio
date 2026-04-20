import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({name: 'text', title: 'Review Text', type: 'text'}),
    defineField({name: 'source', title: 'Source', type: 'string'}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'text', subtitle: 'source'},
  },
})
