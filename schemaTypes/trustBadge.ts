import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'trustBadge',
  title: 'Trust Badge',
  type: 'document',
  fields: [
    defineField({name: 'value', title: 'Value', type: 'string'}),
    defineField({name: 'label', title: 'Label', type: 'string'}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'value', subtitle: 'label'},
  },
})
