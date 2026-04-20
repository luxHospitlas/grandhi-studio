import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'surgicalTeam',
  title: 'Surgical Team',
  type: 'document',
  fields: [
    defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
    defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
    defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
    defineField({
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string'}),
            defineField({name: 'credentials', title: 'Credentials', type: 'string'}),
            defineField({name: 'role', title: 'Role', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'image', title: 'Photo', type: 'image'}),
          ],
        },
      ],
    }),
    defineField({name: 'note', title: 'Team Note', type: 'text'}),
  ],
})
