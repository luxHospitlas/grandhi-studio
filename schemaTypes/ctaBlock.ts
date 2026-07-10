import {defineType, defineField} from 'sanity'

/**
 * Inline "CTA Banner" block.
 *
 * Inserted inside rich-text content (blog body, condition/treatment bodies) via
 * the editor's insert (+) menu. Sanity supplies only the TEXT — the button's
 * action (call on mobile / WhatsApp on desktop) is handled by the front-end
 * using the site's default contact numbers.
 */
export default defineType({
  name: 'ctaBlock',
  title: 'CTA Banner',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Eyebrow Label',
      description: 'Small uppercase label above the heading (optional). e.g. "BOOK NOW"',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      description: 'e.g. "Not sure about your condition?"',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      description: 'e.g. "Compassionate, confidential consultations — book your appointment today."',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      description: 'Label on the CTA button. Defaults to "Book a Consultation" if left blank.',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'subtext'},
    prepare({title, subtitle}) {
      return {title: title ? `📣 ${title}` : '📣 CTA Banner', subtitle}
    },
  },
})
