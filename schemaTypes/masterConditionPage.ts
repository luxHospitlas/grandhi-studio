import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'masterConditionPage',
  title: 'Master Condition Page',
  type: 'document',
  fields: [
    // ── SEO / Meta Tags ─────────────────────────────────────────────
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      description:
        'Page title for browser tab and Google search results (recommended: 50–60 characters).',
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
    defineField({
      name: 'sectionLabel',
      title: 'Section Label',
      description: 'Small label shown above the main heading (e.g. "Conditions")',
      type: 'string',
    }),
    defineField({
      name: 'headingNormal',
      title: 'Heading — Normal Text',
      description: 'First part of the page heading in regular weight (e.g. "Conditions")',
      type: 'string',
    }),
    defineField({
      name: 'headingHighlight',
      title: 'Heading — Highlighted Text',
      description: 'Second part of the heading shown in accent colour (e.g. "We Treat")',
      type: 'string',
    }),

    // ── CTA Block ────────────────────────────────────────────────────
    defineField({
      name: 'cta',
      title: 'CTA Block (Bottom Banner)',
      description: 'The call-to-action banner shown at the bottom of the conditions page',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Banner Heading',
          description: 'Main question or prompt (e.g. "Not sure about your condition?")',
          type: 'string',
        }),
        defineField({
          name: 'subtext',
          title: 'Banner Subtext',
          description: 'Supporting text below the heading (e.g. consultation fee info)',
          type: 'string',
        }),
        defineField({
          name: 'whatsappHref',
          title: 'WhatsApp Link (URL)',
          description: 'Full WhatsApp wa.me link for the booking button',
          type: 'url',
        }),
        defineField({
          name: 'whatsappLabel',
          title: 'WhatsApp Button Label',
          description: 'Text shown on the WhatsApp button (e.g. "WhatsApp to Book")',
          type: 'string',
        }),
        defineField({
          name: 'backLabel',
          title: 'Back Button Label',
          description: 'Text for the back navigation link (e.g. "← Back to Home")',
          type: 'string',
        }),
        defineField({
          name: 'backHref',
          title: 'Back Button Link',
          description: 'URL the back button points to (e.g. "/")',
          type: 'string',
        }),
      ],
    }),

    // ── Condition Items ──────────────────────────────────────────────
    defineField({
      name: 'items',
      title: 'Condition Cards',
      description: 'List of condition cards displayed on the page',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon (emoji or SVG)',
              description: 'Emoji or SVG code shown on the card (e.g. 🦴)',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Card Image',
              description:
                'Optional image for the condition card — used instead of the emoji/SVG icon if provided.',
              type: 'image',
            }),
            defineField({
              name: 'title',
              title: 'Condition Title',
              description: 'Name of the condition (e.g. "Knee Osteoarthritis")',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Condition Page Link',
              description: 'URL slug for this condition (e.g. "/conditions/knee-osteoarthritis")',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Short Description',
              description: 'One or two sentence summary shown on the card',
              type: 'text',
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
