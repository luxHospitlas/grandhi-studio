import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'conditionsPage',
  title: 'Conditions Page',
  type: 'document',
  fields: [
    // ── SEO / Meta Tags ─────────────────────────────────────────────
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

    // ── Page Heading ─────────────────────────────────────────────────
    defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
    defineField({name: 'headingNormal', title: 'Heading (normal text)', type: 'string'}),
    defineField({name: 'headingHighlight', title: 'Heading (highlighted text)', type: 'string'}),
    defineField({name: 'subtext', title: 'Page Subtext / Description', type: 'text'}),
    defineField({name: 'viewAllHref', title: 'View All Link', type: 'string'}),

    // ── CTA Block ────────────────────────────────────────────────────
    defineField({
      name: 'cta',
      title: 'CTA Block',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'CTA Heading', type: 'string'}),
        defineField({name: 'subtext', title: 'CTA Subtext', type: 'string'}),
        defineField({name: 'whatsappHref', title: 'WhatsApp Link', type: 'url'}),
        defineField({name: 'whatsappLabel', title: 'WhatsApp Button Label', type: 'string'}),
        defineField({name: 'backLabel', title: 'Back Button Label', type: 'string'}),
        defineField({name: 'backHref', title: 'Back Button Link', type: 'string'}),
      ],
    }),

    // ── Condition Items ──────────────────────────────────────────────
    defineField({
      name: 'items',
      title: 'Condition Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon (SVG file)',
              type: 'file',
              options: {accept: 'image/svg+xml'},
            }),
            defineField({name: 'title', title: 'Condition Title', type: 'string'}),
            defineField({name: 'description', title: 'Short Description', type: 'string'}),
            defineField({name: 'href', title: 'Condition Page Link', type: 'string'}),
            defineField({
              name: 'links',
              title: 'Sub Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'label', title: 'Link Label', type: 'string'}),
                    defineField({name: 'href', title: 'Link URL', type: 'string'}),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),
  ],
})
