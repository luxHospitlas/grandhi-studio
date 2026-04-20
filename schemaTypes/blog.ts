import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  preview: {
    select: {title: 'title', subtitle: 'primaryKeyword', media: 'featuredImage'},
  },
  fields: [
    // ══════════════════════════════════════════════════════
    //   SEO / META TAGS
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'seoDivider',
      title: '━━━━━━━━  SEO / META TAGS  ━━━━━━━━',
      description: 'Meta title, description, keyword, and image alt text for search engines.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'title',
      title: 'Blog Title',
      description: 'Main title of the blog post.',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      description: 'URL slug for this blog post (e.g. "knee-replacement-recovery-guide")',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      description: 'Page title for browser tab and Google search results (recommended: 50–60 characters).',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      description: 'Short summary for Google search results (recommended: 150–160 characters).',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'primaryKeyword',
      title: 'Primary Keyword',
      description: 'Main SEO keyword for this blog post (e.g. "knee replacement recovery").',
      type: 'string',
    }),

    // ══════════════════════════════════════════════════════
    //   FEATURED IMAGE
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'imageDivider',
      title: '━━━━━━━━  FEATURED IMAGE  ━━━━━━━━',
      description: 'Main image shown at the top of the blog post and in social media previews.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      description: 'Main blog post image — shown at the top and used for social sharing.',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'imageAltText',
      title: 'Image Alt Text',
      description: 'Alt text for the featured image (for accessibility and SEO).',
      type: 'string',
    }),

    // ══════════════════════════════════════════════════════
    //   TABLE OF CONTENTS
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'tocDivider',
      title: '━━━━━━━━  TABLE OF CONTENTS  ━━━━━━━━',
      description: 'Table of contents items — each links to a section in the blog.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'tableOfContents',
      title: 'Table of Contents',
      description: 'Each item is a section heading that links to an anchor in the blog content.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Section Title', description: 'e.g. "What is Knee Replacement?"', type: 'string'}),
            defineField({name: 'anchor', title: 'Anchor ID', description: 'e.g. "what-is-knee-replacement" (no #)', type: 'string'}),
          ],
          preview: {select: {title: 'label', subtitle: 'anchor'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   BLOG CONTENT
    //   (rich text — headings, bold, lists, links, images)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'contentDivider',
      title: '━━━━━━━━  BLOG CONTENT  ━━━━━━━━',
      description: 'Main blog body — supports headings, bold, italic, lists, links, and inline images.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'body',
      title: 'Blog Content',
      description: 'Rich text editor — use headings (H2, H3), bold, italic, bullet/number lists, and links.',
      type: 'array',
      of: [
        {
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
                title: 'Link',
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
              {
                name: 'internalLink',
                title: 'Internal Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'Internal Path',
                    description: 'e.g. /conditions/knee-osteoarthritis',
                    type: 'string',
                  }),
                ],
              },
            ],
          },
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   DOCTOR CARD
    //   (author/doctor info shown at the bottom of the blog)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'doctorCardDivider',
      title: '━━━━━━━━  DOCTOR CARD  ━━━━━━━━',
      description: 'Doctor info card shown at the bottom of the blog post.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'doctorName',
      title: 'Doctor Card — Name',
      description: 'e.g. "Dr. Satish Reddy Gandavarapu"',
      type: 'string',
    }),
    defineField({
      name: 'doctorCredentials',
      title: 'Doctor Card — Credentials',
      description: 'e.g. "MS Ortho · M.Ch Ortho · Fellowship Australia, Italy & UK"',
      type: 'string',
    }),
    defineField({
      name: 'doctorRole',
      title: 'Doctor Card — Role',
      description: 'e.g. "Orthopaedic & Joint Replacement Surgeon"',
      type: 'string',
    }),
    defineField({
      name: 'doctorImage',
      title: 'Doctor Card — Photo',
      description: 'Doctor profile photo.',
      type: 'image',
    }),
    defineField({
      name: 'doctorBio',
      title: 'Doctor Card — Short Bio',
      description: 'One or two sentence bio shown on the card.',
      type: 'text',
      rows: 2,
    }),

    // ══════════════════════════════════════════════════════
    //   BLOG FAQs
    //   (accordion Q&A at the bottom)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'faqsDivider',
      title: '━━━━━━━━  BLOG FAQs  ━━━━━━━━',
      description: 'FAQ accordion shown at the bottom of the blog post.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ Items',
      description: 'Each item is one accordion row — a question and its answer.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'question', title: 'Question', type: 'string'}),
            defineField({name: 'answer', title: 'Answer', type: 'text', rows: 3}),
          ],
          preview: {select: {title: 'question', subtitle: 'answer'}},
        },
      ],
    }),
  ],
})
