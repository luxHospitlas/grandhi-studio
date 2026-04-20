import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'eachCondition',
  title: 'Each Condition',
  type: 'document',
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
  fields: [
    // ══════════════════════════════════════════════════════
    //   SEO / META TAGS
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'seoDivider',
      title: '━━━━━━━━  SEO / META TAGS  ━━━━━━━━',
      description: 'Meta title, description, and image alt text — used in search engine results and browser tabs.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      description: 'Page title shown in browser tab and Google search results (recommended: 50–60 characters).',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      description: 'Short summary shown in Google search results (recommended: 150–160 characters).',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'imageAltText',
      title: 'Image Alt Text',
      description: 'Alt text for the main image on this page (for accessibility and SEO).',
      type: 'string',
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      description: 'Main image for this condition page — used in hero, social sharing, and search results.',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'slug',
      title: 'URL Slug',
      description: 'URL slug for this condition page (e.g. "knee-osteoarthritis" → /conditions/knee-osteoarthritis)',
      type: 'slug',
    }),

    // ══════════════════════════════════════════════════════
    //   HERO SECTION
    //   (section label, title, description, buttons, stats)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'heroDivider',
      title: '━━━━━━━━  HERO SECTION  ━━━━━━━━',
      description: 'Top section — section label, condition title, description, CTA buttons, and stat numbers.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'sectionLabel',
      title: 'Section Label',
      description: 'Small label at the very top (e.g. "ORTHOPAEDIC · CONDITION GUIDE")',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Condition Title',
      description: 'Main heading (e.g. "Knee Osteoarthritis")',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      description: 'One or two sentence summary shown below the title.',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'whatsappHref',
      title: 'Book on WhatsApp — Link',
      description: 'e.g. https://wa.me/917969084429',
      type: 'url',
    }),
    defineField({
      name: 'whatsappLabel',
      title: 'Book on WhatsApp — Button Label',
      description: 'e.g. "Book on WhatsApp"',
      type: 'string',
    }),
    defineField({
      name: 'callHref',
      title: 'Call Clinic — Link',
      description: 'e.g. tel:07969084429',
      type: 'string',
    }),
    defineField({
      name: 'callLabel',
      title: 'Call Clinic — Button Label',
      description: 'e.g. "Call Clinic"',
      type: 'string',
    }),
    defineField({
      name: 'statsDivider',
      title: '— Hero Stats (3 numbers at the bottom of the hero) —',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      description: 'The 3 stat blocks at the bottom of the hero (e.g. "1 in 5 · ADULTS AFFECTED").',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Stat Value', description: 'e.g. "1 in 5"',          type: 'string'}),
            defineField({name: 'label', title: 'Stat Label', description: 'e.g. "ADULTS AFFECTED"',  type: 'string'}),
          ],
          preview: {select: {title: 'value', subtitle: 'label'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   ABOUT THIS CONDITION SECTION
    //   (section label, heading, overview paragraph)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'aboutDivider',
      title: '━━━━━━━━  ABOUT THIS CONDITION  ━━━━━━━━',
      description: 'Overview section — small label, heading ("What is…"), and a body paragraph.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'aboutSectionLabel',
      title: 'About — Section Label',
      description: 'Small label above the heading (e.g. "ABOUT THIS CONDITION")',
      type: 'string',
    }),
    defineField({
      name: 'aboutHeadingNormal',
      title: 'About — Heading (normal text)',
      description: 'e.g. "What is"',
      type: 'string',
    }),
    defineField({
      name: 'aboutHeadingHighlight',
      title: 'About — Heading (highlighted text)',
      description: 'e.g. "Knee Osteoarthritis?"',
      type: 'string',
    }),
    defineField({
      name: 'aboutBody',
      title: 'About — Body Paragraph',
      description: 'Overview paragraph explaining the condition.',
      type: 'text',
      rows: 5,
    }),

    // ══════════════════════════════════════════════════════
    //   SIGNS SECTION
    //   (section label, heading, warning label, symptom tags)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'signsDivider',
      title: '━━━━━━━━  SIGNS SECTION  ━━━━━━━━',
      description: 'Common symptoms section — label, heading, warning label, and symptom tag list.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'signsSectionLabel',
      title: 'Signs — Section Label',
      description: 'Small label above the heading (e.g. "SIGNS TO WATCH")',
      type: 'string',
    }),
    defineField({
      name: 'signsHeadingNormal',
      title: 'Signs — Heading (normal text)',
      description: 'e.g. "Common"',
      type: 'string',
    }),
    defineField({
      name: 'signsHeadingHighlight',
      title: 'Signs — Heading (highlighted text)',
      description: 'e.g. "Symptoms"',
      type: 'string',
    }),
    defineField({
      name: 'signsWarningLabel',
      title: 'Signs — Warning Label',
      description: 'Bold label with warning icon (e.g. "Symptoms that need attention")',
      type: 'string',
    }),
    defineField({
      name: 'symptoms',
      title: 'Symptom Tags',
      description: 'Each item is one symptom shown as a tag/pill (e.g. "Persistent or intermittent knee pain…").',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // ══════════════════════════════════════════════════════
    //   WHY IT HAPPENS SECTION
    //   (section label, heading, causes bullet list)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'causesDivider',
      title: '━━━━━━━━  WHY IT HAPPENS SECTION  ━━━━━━━━',
      description: 'Causes & Risk Factors section — label, heading, and bullet list.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'causesSectionLabel',
      title: 'Causes — Section Label',
      description: 'Small label above the heading (e.g. "WHY IT HAPPENS")',
      type: 'string',
    }),
    defineField({
      name: 'causesHeadingNormal',
      title: 'Causes — Heading (normal text)',
      description: 'e.g. "Causes &"',
      type: 'string',
    }),
    defineField({
      name: 'causesHeadingHighlight',
      title: 'Causes — Heading (highlighted text)',
      description: 'e.g. "Risk Factors"',
      type: 'string',
    }),
    defineField({
      name: 'causes',
      title: 'Causes — Bullet Points',
      description: 'Each item is one bullet point (e.g. "Age-related cartilage wear and tear").',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // ══════════════════════════════════════════════════════
    //   CLINICAL DETAILS SECTION
    //   (section label, heading, key fact cards)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'clinicalDivider',
      title: '━━━━━━━━  CLINICAL DETAILS SECTION  ━━━━━━━━',
      description: 'Key Facts section — label, heading, and grid of fact cards (Classification, Surgery Type, Recovery Time…).',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'clinicalSectionLabel',
      title: 'Clinical Details — Section Label',
      description: 'Small label above the heading (e.g. "CLINICAL DETAILS")',
      type: 'string',
    }),
    defineField({
      name: 'clinicalHeadingNormal',
      title: 'Clinical Details — Heading (normal text)',
      description: 'e.g. "Key"',
      type: 'string',
    }),
    defineField({
      name: 'clinicalHeadingHighlight',
      title: 'Clinical Details — Heading (highlighted text)',
      description: 'e.g. "Facts"',
      type: 'string',
    }),
    defineField({
      name: 'facts',
      title: 'Key Fact Cards',
      description: 'Each card has a label and a description (e.g. "Classification" / "Grade I & II — medical management…").',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label',       title: 'Fact Label',       description: 'e.g. "Classification"',  type: 'string'}),
            defineField({name: 'factDetails', title: 'Fact Description', description: 'e.g. "Grade I & II…"',   type: 'text', rows: 2}),
          ],
          preview: {select: {title: 'label', subtitle: 'factDetails'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   HOW WE TREAT IT SECTION
    //   (label, heading, featured treatment card, steps)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'treatmentDivider',
      title: '━━━━━━━━  HOW WE TREAT IT SECTION  ━━━━━━━━',
      description: 'Treatment approach — label, heading, featured treatment card, and numbered steps.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'treatmentSectionLabel',
      title: 'Treatment — Section Label',
      description: 'e.g. "HOW WE TREAT IT"',
      type: 'string',
    }),
    defineField({
      name: 'treatmentHeadingNormal',
      title: 'Treatment — Heading (normal text)',
      description: 'e.g. "Treatment"',
      type: 'string',
    }),
    defineField({
      name: 'treatmentHeadingHighlight',
      title: 'Treatment — Heading (highlighted text)',
      description: 'e.g. "Approach"',
      type: 'string',
    }),
    defineField({
      name: 'featuredCardDivider',
      title: '— Featured Treatment Card —',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'featuredTitle',
      title: 'Featured Card — Title',
      description: 'e.g. "Total Knee Replacement (TKR)"',
      type: 'string',
    }),
    defineField({
      name: 'featuredDescription',
      title: 'Featured Card — Description',
      description: 'Short paragraph inside the featured card.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'featuredBadge',
      title: 'Featured Card — Badge',
      description: 'e.g. "Available at Apollo & Yashoda Hospitals, Hyderabad"',
      type: 'string',
    }),
    defineField({
      name: 'treatmentStepsDivider',
      title: '— Treatment Steps (numbered) —',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'treatmentSteps',
      title: 'Treatment Steps',
      description: 'Each item is one numbered step — add in order.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'stepTitle',       title: 'Step Title',       description: 'e.g. "Consultation & Grading"', type: 'string'}),
            defineField({name: 'stepDescription', title: 'Step Description', description: 'Short paragraph for this step.', type: 'text', rows: 2}),
          ],
          preview: {select: {title: 'stepTitle', subtitle: 'stepDescription'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   AVAILABLE TREATMENTS SECTION
    //   (label, heading, treatment links list, view all button)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'availableTreatmentsDivider',
      title: '━━━━━━━━  AVAILABLE TREATMENTS SECTION  ━━━━━━━━',
      description: 'Treatment Options section — label, heading, list of treatment links, and "View All Treatments" button.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'availableSectionLabel',
      title: 'Available Treatments — Section Label',
      description: 'e.g. "AVAILABLE TREATMENTS"',
      type: 'string',
    }),
    defineField({
      name: 'availableHeadingNormal',
      title: 'Available Treatments — Heading (normal text)',
      description: 'e.g. "Treatment"',
      type: 'string',
    }),
    defineField({
      name: 'availableHeadingHighlight',
      title: 'Available Treatments — Heading (highlighted text)',
      description: 'e.g. "Options"',
      type: 'string',
    }),
    defineField({
      name: 'treatmentLinks',
      title: 'Treatment Links',
      description: 'Each item is one treatment row — title, short text, and link.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label',    title: 'Treatment Name', description: 'e.g. "Total Knee Replacement (TKR)"', type: 'string'}),
            defineField({name: 'subtext',  title: 'Sub Text',       description: 'Short description below the title.',  type: 'string'}),
            defineField({name: 'href',     title: 'Link URL',       description: 'e.g. /treatments/knee-replacement',   type: 'string'}),
          ],
          preview: {select: {title: 'label', subtitle: 'subtext'}},
        },
      ],
    }),
    defineField({
      name: 'viewAllLabel',
      title: 'View All Button — Label',
      description: 'e.g. "View All Treatments ↓"',
      type: 'string',
    }),
    defineField({
      name: 'viewAllHref',
      title: 'View All Button — Link',
      description: 'e.g. /treatments',
      type: 'string',
    }),

    // ══════════════════════════════════════════════════════
    //   CONDITION FAQs SECTION
    //   (label, heading, accordion Q&A list)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'faqsDivider',
      title: '━━━━━━━━  CONDITION FAQs SECTION  ━━━━━━━━',
      description: 'Accordion FAQ section — small label, heading, and list of questions with answers.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'faqsSectionLabel',
      title: 'FAQs — Section Label',
      description: 'Small label above the heading (e.g. "COMMON QUESTIONS")',
      type: 'string',
    }),
    defineField({
      name: 'faqsHeadingNormal',
      title: 'FAQs — Heading (normal text)',
      description: 'e.g. "Frequently"',
      type: 'string',
    }),
    defineField({
      name: 'faqsHeadingHighlight',
      title: 'FAQs — Heading (highlighted text)',
      description: 'e.g. "Asked"',
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
            defineField({name: 'question', title: 'Question', description: 'e.g. "When do I need knee replacement surgery?"', type: 'string'}),
            defineField({name: 'answer',   title: 'Answer',   description: 'Answer shown when the accordion is expanded.', type: 'text', rows: 3}),
          ],
          preview: {select: {title: 'question', subtitle: 'answer'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   CTA BANNER
    //   (blue banner at the bottom — heading, subtext, buttons)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'ctaBannerDivider',
      title: '━━━━━━━━  CTA BANNER  ━━━━━━━━',
      description: 'Blue CTA banner at the bottom of the page — heading, subtext, WhatsApp and back buttons.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
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
