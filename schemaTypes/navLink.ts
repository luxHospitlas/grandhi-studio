import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'navLink',
  title: 'Nav Link',
  type: 'document',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string'}),
    defineField({name: 'href', title: 'Link', type: 'string'}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'label', subtitle: 'href'},
  },
})
