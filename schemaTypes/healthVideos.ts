import {defineType, defineField} from 'sanity'
//File :- schemaTypes/healthVideos.ts
export default defineType({
  name: 'healthVideos',
  title: 'Health Videos',
  type: 'document',
  fields: [
    defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
    defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
    defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Video Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'string'}),
            defineField({name: 'videoId', title: 'YouTube Video ID', type: 'string'}),
            defineField({
              name: 'thumbnail',
              title: 'Thumbnail Image',
              description: 'Optional custom thumbnail — if not provided, YouTube thumbnail will be used.',
              type: 'image',
            }),
            defineField({name: 'href', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({name: 'viewAllHref', title: 'View All Link', type: 'string'}),
    defineField({name: 'viewAllLabel', title: 'View All Label', type: 'string'}),
  ],
})
