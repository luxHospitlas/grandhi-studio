//File: condition.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'condition',
  title: 'Condition',
  type: 'document',
  fields: [
    // ── Basic Info ────────────────────────────────────────────────────
    defineField({name: 'icon', title: 'Icon (emoji)', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Condition Image',
      description: 'Optional image for the condition — used instead of the emoji icon if provided.',
      type: 'image',
    }),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Short Description', type: 'string'}),
    defineField({name: 'href', title: 'Page Link', type: 'string'}),

    // ── Stats ─────────────────────────────────────────────────────────
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
          ],
          preview: {select: {title: 'value', subtitle: 'label'}},
        },
      ],
    }),

    // ── Overview ──────────────────────────────────────────────────────
    defineField({name: 'overview', title: 'Overview', type: 'text'}),

    // ── Causes ────────────────────────────────────────────────────────
    defineField({
      name: 'causes',
      title: 'Causes',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // ── Symptoms ──────────────────────────────────────────────────────
    defineField({
      name: 'symptoms',
      title: 'Symptoms',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // ── Sub Links ────────────────────────────────────────────────────
    defineField({
      name: 'links',
      title: 'Sub Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
          ],
          preview: {select: {title: 'label', subtitle: 'href'}},
        },
      ],
    }),

    // ── Facts ─────────────────────────────────────────────────────────
    defineField({
      name: 'facts',
      title: 'Quick Facts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'string'}),
          ],
          preview: {select: {title: 'label', subtitle: 'description'}},
        },
      ],
    }),

    // ── Treatment ─────────────────────────────────────────────────────
    defineField({
      name: 'treatment',
      title: 'Treatment',
      type: 'object',
      fields: [
        defineField({
          name: 'featured',
          title: 'Featured Treatment',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'badge', title: 'Badge Text', type: 'string'}),
          ],
        }),
        defineField({
          name: 'steps',
          title: 'Treatment Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Step Title', type: 'string'}),
                defineField({name: 'description', title: 'Step Description', type: 'text'}),
              ],
              preview: {select: {title: 'title', subtitle: 'description'}},
            },
          ],
        }),
      ],
    }),

    // ── FAQs ──────────────────────────────────────────────────────────
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'question', title: 'Question', type: 'string'}),
            defineField({name: 'answer', title: 'Answer', type: 'text'}),
          ],
          preview: {select: {title: 'question', subtitle: 'answer'}},
        },
      ],
    }),

    // ── Display Order ─────────────────────────────────────────────────
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
})
