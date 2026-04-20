import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'treatmentsPage',
  title: 'Master Treatments',
  type: 'document',

  fieldsets: [
    {
      name: 'lableHeading',
      title: 'Labeled Page Heading',
      description: 'Fields for the small label shown fro sanity view',
    },
    {
      name: 'filters',
      title: 'Filters for Procedures',
      description: 'Fields for the small label shown fro sanity view',
    },
    {
      name: 'pageHeading',
      title: 'Page Heading',
      description: 'Page Main Heading',
    },
    {
      name: 'ctaSection',
      title: 'CTA Block',
      description: 'Fields for the small label shown above the main page heading.',
    },
    {
      name: 'conditionsSection',
      title: 'Condition Cards',
      description: 'Fields for the small label shown above the main page heading.',
    },
  ],

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

    defineField({
      name: 'sectionLabel',
      title: 'Section Label',
      description: 'Small label shown above the main heading (e.g. "Conditions")',
      type: 'string',
      fieldset: 'lableHeading',
    }),

    defineField({
      name: 'headingNormal',
      title: 'Heading — Normal Text',
      description: 'First part of the page heading in regular weight (e.g. "Conditions")',
      type: 'string',
      fieldset: 'pageHeading',
    }),

    defineField({
      name: 'filters',
      title: 'Procedure Filter Blocks',
      description: 'Filter pills shown above the CTA section.',
      type: 'array',
      fieldset: 'filters',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon / Emoji',
              description: 'Optional icon or emoji shown before the filter text.',
              type: 'string',
            }),
            defineField({
              name: 'text',
              title: 'Filter Text',
              description: 'Text shown inside the filter pill.',
              type: 'string',
            }),
            defineField({
              name: 'category',
              title: 'Category Key',
              description:
                'Unique key to match items (e.g. "joint-replacement"). Must match the category on treatment cards.',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'icon',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading — Highlighted Text',
      description: 'Second part of the heading shown in accent colour (e.g. "We Treat")',
      type: 'string',
      fieldset: 'pageHeading',
    }),

    defineField({
      name: 'items',
      title: 'Condition Cards',
      description: 'List of condition cards displayed on the page',
      type: 'array',
      fieldset: 'conditionsSection',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Treatment Title',
              type: 'string',
            }),
            defineField({
              name: 'slug',
              title: 'URL Slug',
              description: 'e.g. "knee-replacement" → /treatments/knee-replacement',
              type: 'slug',
            }),
            defineField({
              name: 'description',
              title: 'Short Description',
              type: 'text',
            }),
            defineField({
              name: 'category',
              title: 'Category',
              description:
                'Must match a filter category key to enable filtering (e.g. "joint-replacement").',
              type: 'string',
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),

    defineField({
      name: 'cta',
      title: 'CTA Block (Bottom Banner)',
      description: 'The call-to-action banner shown at the bottom of the conditions page',
      type: 'object',
      fieldset: 'ctaSection',
      fields: [
        defineField({
          name: 'heading',
          title: 'Banner Heading',
          type: 'string',
        }),
        defineField({
          name: 'subtext',
          title: 'Banner Subtext',
          type: 'string',
        }),
        defineField({
          name: 'whatsappHref',
          title: 'WhatsApp Link (URL)',
          type: 'url',
        }),
        defineField({
          name: 'whatsappLabel',
          title: 'WhatsApp Button Label',
          type: 'string',
        }),
        defineField({
          name: 'backLabel',
          title: 'Back Button Label',
          type: 'string',
        }),
        defineField({
          name: 'backHref',
          title: 'Back Button Link',
          type: 'string',
        }),
      ],
    }),
  ],
})
