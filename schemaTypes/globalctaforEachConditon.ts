import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'globalCtaForEachCondition',
  title: 'Global CTA for Each Condition',
  type: 'document',
  fields: [
    // ══════════════════════════════════════════════════════
    //   CTA BANNER
    //   (blue banner at the bottom — heading, subtext, buttons)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'ctaHeading',
      title: 'CTA Banner — Heading',
      description: 'e.g. "Not sure about your condition?"',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtext',
      title: 'CTA Banner — Subtext',
      description: 'e.g. "Compassionate, confidential consultations — Book your appointment today."',
      type: 'string',
    }),
    defineField({
      name: 'ctaWhatsappHref',
      title: 'CTA Banner — WhatsApp Link',
      description: 'e.g. https://wa.me/917969084429',
      type: 'url',
    }),
    defineField({
      name: 'ctaWhatsappLabel',
      title: 'CTA Banner — WhatsApp Button Label',
      description: 'e.g. "Book on WhatsApp"',
      type: 'string',
    }),
    defineField({
      name: 'ctaBackLabel',
      title: 'CTA Banner — Back Button Label',
      description: 'e.g. "← All Conditions"',
      type: 'string',
    }),
    defineField({
      name: 'ctaBackHref',
      title: 'CTA Banner — Back Button Link',
      description: 'e.g. /conditions',
      type: 'string',
    }),
  ],
})
