import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'insurancePage',
  title: 'Insurance Page',
  type: 'document',
  preview: {
    select: {title: 'heroHeading'},
  },
  fields: [
    // ══════════════════════════════════════════════════════
    //   SEO / META TAGS
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'seoDivider',
      title: '━━━━━━━━  SEO / META TAGS  ━━━━━━━━',
      description: 'Meta title and description for the Insurance page.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
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

    // ══════════════════════════════════════════════════════
    //   HERO SECTION
    //   (image, heading, description, CTA button)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'heroDivider',
      title: '━━━━━━━━  HERO SECTION  ━━━━━━━━',
      description: 'Top section — image on the left, heading, description paragraph, and Book Appointment button.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero — Image',
      description: 'Image shown on the left side of the hero (e.g. doctor consulting with patient).',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Hero — Image Alt Text',
      description: 'Alt text for the hero image (for accessibility and SEO).',
      type: 'string',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero — Heading',
      description: 'e.g. "Health Insurance at Lux Hospitals, Hyderabad"',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero — Description',
      description: 'Paragraph shown below the heading.',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'heroButtonLabel',
      title: 'Hero — Button Label',
      description: 'e.g. "Book Appointment"',
      type: 'string',
    }),
    defineField({
      name: 'heroButtonHref',
      title: 'Hero — Button Link',
      description: 'e.g. https://wa.me/917969084429 or /contact',
      type: 'string',
    }),

    // ══════════════════════════════════════════════════════
    //   ACCEPTED INSURANCE COMPANIES
    //   (heading + grid of company name cards)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'companiesDivider',
      title: '━━━━━━━━  ACCEPTED INSURANCE COMPANIES  ━━━━━━━━',
      description: 'Section heading and grid of insurance company name cards.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'companiesHeading',
      title: 'Companies — Section Heading',
      description: 'e.g. "Major Health Insurance Companies Accepted"',
      type: 'string',
    }),
    defineField({
      name: 'companies',
      title: 'Insurance Companies',
      description: 'Each item is one company card (e.g. "Star Health & Allied Insurance Co. Ltd.").',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Company Name', type: 'string'}),
            defineField({
              name: 'logo',
              title: 'Company Logo',
              description: 'Optional logo image for the company card.',
              type: 'image',
            }),
          ],
          preview: {select: {title: 'name', media: 'logo'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   THIRD PARTY ADMINISTRATORS (TPAs)
    //   (heading + grid of TPA name cards)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'tpaDivider',
      title: '━━━━━━━━  THIRD PARTY ADMINISTRATORS  ━━━━━━━━',
      description: 'Section heading and grid of TPA name cards.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'tpaHeading',
      title: 'TPAs — Section Heading',
      description: 'e.g. "Third Party Administrators (TPAs)"',
      type: 'string',
    }),
    defineField({
      name: 'tpas',
      title: 'TPA List',
      description: 'Each item is one TPA card.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'TPA Name', type: 'string'}),
            defineField({
              name: 'logo',
              title: 'TPA Logo',
              description: 'Optional logo image for the TPA card.',
              type: 'image',
            }),
          ],
          preview: {select: {title: 'name', media: 'logo'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   STEPS TO CLAIM INSURANCE
    //   (heading, bullet list, footer note)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'stepsDivider',
      title: '━━━━━━━━  STEPS TO CLAIM INSURANCE  ━━━━━━━━',
      description: 'Left column — heading, bullet point steps, and a footer note.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'stepsHeading',
      title: 'Steps — Heading',
      description: 'e.g. "Steps to claim Insurance"',
      type: 'string',
    }),
    defineField({
      name: 'stepsItems',
      title: 'Steps — Bullet Points',
      description: 'Each item is one step (e.g. "Inform the insurance desk at the time of admission.").',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'stepsFooterNote',
      title: 'Steps — Footer Note',
      description: 'e.g. "For reimbursement cases, collect all original bills and reports."',
      type: 'string',
    }),

    // ══════════════════════════════════════════════════════
    //   COVERAGE DETAILS
    //   (heading, intro text, bullet list, footer note)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'coverageDivider',
      title: '━━━━━━━━  COVERAGE DETAILS  ━━━━━━━━',
      description: 'Right column — heading, intro text, bullet list of coverage items, and a footer note.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'coverageHeading',
      title: 'Coverage — Heading',
      description: 'e.g. "Coverage Details of Health Insurance"',
      type: 'string',
    }),
    defineField({
      name: 'coverageIntro',
      title: 'Coverage — Intro Text',
      description: 'e.g. "Health insurance coverage generally includes:"',
      type: 'string',
    }),
    defineField({
      name: 'coverageItems',
      title: 'Coverage — Bullet Points',
      description: 'Each item is one coverage point (e.g. "Room and boarding charges").',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'coverageFooterNote',
      title: 'Coverage — Footer Note',
      description: 'e.g. "Refer to your policy document for exclusions, waiting periods, and sub-limits."',
      type: 'string',
    }),

    // ══════════════════════════════════════════════════════
    //   WHY CHOOSE SECTION
    //   (image, heading, bullet list, footer text)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'whyChooseDivider',
      title: '━━━━━━━━  WHY CHOOSE SECTION  ━━━━━━━━',
      description: 'Image on the left, heading, bullet points, and a closing paragraph on the right.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'whyChooseImage',
      title: 'Why Choose — Image',
      description: 'Image shown on the left side.',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'whyChooseImageAlt',
      title: 'Why Choose — Image Alt Text',
      description: 'e.g. "Health Insurance at Lux Hospitals"',
      type: 'string',
    }),
    defineField({
      name: 'whyChooseHeading',
      title: 'Why Choose — Heading',
      description: 'e.g. "Why Choose Lux Hospitals?"',
      type: 'string',
    }),
    defineField({
      name: 'whyChooseItems',
      title: 'Why Choose — Bullet Points',
      description: 'Each item is one benefit (e.g. "Cashless treatment facility with top health insurance coverage in India").',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'whyChooseFooterText',
      title: 'Why Choose — Footer Text',
      description: 'Closing paragraph below the bullets (e.g. "Our focus is on making healthcare affordable…").',
      type: 'text',
      rows: 2,
    }),

    // ══════════════════════════════════════════════════════
    //   INSURANCE FAQs
    //   (heading, accordion Q&A list)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'faqsDivider',
      title: '━━━━━━━━  INSURANCE FAQs  ━━━━━━━━',
      description: 'Accordion FAQ section — heading and list of questions with answers.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'faqsHeadingNormal',
      title: 'FAQs — Heading (normal text)',
      description: 'e.g. "Frequently Asked"',
      type: 'string',
    }),
    defineField({
      name: 'faqsHeadingHighlight',
      title: 'FAQs — Heading (highlighted text)',
      description: 'e.g. "Questions"',
      type: 'string',
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
