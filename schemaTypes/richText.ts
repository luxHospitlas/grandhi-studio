import {defineType, defineField, defineArrayMember} from 'sanity'

/**
 * Reusable rich-text (PortableText) field.
 *
 * Shared by the blog body and the main body paragraphs on condition and
 * treatment pages, so every page supports the same formatting: headings,
 * bold/italic/underline, lists, external links, inline images, and — most
 * importantly — Internal Links that point at other pages on the site.
 */
export default defineType({
  name: 'richText',
  title: 'Rich Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
        annotations: [
          {
            name: 'link',
            title: 'External Link',
            type: 'object',
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (rule) => rule.uri({allowRelative: true}),
              }),
            ],
          },
          // Internal Link — pick another page on the site (reference-based).
          {type: 'internalLink'},
        ],
      },
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alt Text', type: 'string'}),
        defineField({name: 'caption', title: 'Caption', type: 'string'}),
      ],
    }),
    // Insertable CTA Banner block (heading + subtext + buttons).
    defineArrayMember({type: 'ctaBlock'}),
  ],
})
