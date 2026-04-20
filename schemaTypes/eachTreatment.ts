import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'eachTreatment',
  title: 'Each Treatment',
  type: 'document',
  preview: {
    select: {title: 'title', subtitle: 'badge'},
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
      description: 'Main image for this treatment page — used in hero, social sharing, and search results.',
      type: 'image',
      options: {hotspot: true},
    }),

    // ══════════════════════════════════════════════════════
    //   HERO SECTION
    //   (the top area with badge, title, description, stats)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'heroDivider',
      title: '━━━━━━━━  HERO SECTION  ━━━━━━━━',
      description:
        'Top section of the treatment page — badge, title, short description, and stat numbers.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),

    defineField({
      name: 'badge',
      title: 'Badge Text',
      description:
        'Small pill shown at the top-left of the hero (e.g. "Joint Replacement · 1–2 hrs")',
      type: 'string',
    }),

    defineField({
      name: 'title',
      title: 'Treatment Title',
      description: 'Main heading of the page (e.g. "Knee Replacement")',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      description: 'URL slug for this treatment page (e.g. "knee-replacement")',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      description: 'One or two sentence summary shown below the title in the hero.',
      type: 'text',
      rows: 3,
    }),

    // ── Hero Stats (4 numbers below the description) ──────
    defineField({
      name: 'statsDivider',
      title: '— Hero Stats (4 numbers shown below the description) —',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      description: 'The 4 stat blocks shown in the hero (e.g. ">90% · SUCCESS RATE").',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Stat Value',
              description: 'e.g. ">90%"',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Stat Label',
              description: 'e.g. "SUCCESS RATE"',
              type: 'string',
            }),
          ],
          preview: {
            select: {title: 'value', subtitle: 'label'},
          },
        },
      ],
    }),
    // ══════════════════════════════════════════════════════
    //   WHAT IS [TREATMENT]? SECTION
    //   (overview heading, body paragraph, highlight note)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'whatIsDivider',
      title: '━━━━━━━━  WHAT IS [TREATMENT]? SECTION  ━━━━━━━━',
      description:
        'Overview section — heading like "What is Knee Replacement?", a body paragraph, and an optional highlighted note box.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'whatIsHeading',
      title: 'What Is — Section Heading',
      description: 'e.g. "What is Knee Replacement?"',
      type: 'string',
    }),
    defineField({
      name: 'whatIsBody',
      title: 'What Is — Body Paragraph',
      description: 'Main overview paragraph explaining the treatment.',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'whatIsNote',
      title: 'What Is — Highlighted Note (blue box)',
      description:
        'Optional callout shown in the blue highlight box below the paragraph (e.g. "✓ Both total and partial… Dr. Satish Reddy will advise…")',
      type: 'text',
      rows: 2,
    }),

    // ══════════════════════════════════════════════════════
    //   HOW THE PROCEDURE WORKS
    //   (numbered steps shown below the hero)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'procedureStepsDivider',
      title: '━━━━━━━━  HOW THE PROCEDURE WORKS  ━━━━━━━━',
      description:
        'Numbered step-by-step section shown on the treatment page (e.g. "Consultation & Grading", "Surgery", "Recovery").',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'procedureSectionTitle',
      title: 'Section Heading',
      description: 'Title shown above the steps (e.g. "How the Procedure Works")',
      type: 'string',
    }),
    defineField({
      name: 'procedureSteps',
      title: 'Procedure Steps',
      description: 'Each item is one numbered step — add in order (step numbers are automatic).',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'stepTitle',
              title: 'Step Title',
              description: 'e.g. "Consultation & Grading"',
              type: 'string',
            }),
            defineField({
              name: 'stepDescription',
              title: 'Step Description',
              description: 'Short paragraph for this step.',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: {title: 'stepTitle', subtitle: 'stepDescription'},
          },
        },
      ],
    }),
    // ══════════════════════════════════════════════════════
    //   OUTCOMES SECTION
    //   (stat cards: value + label, e.g. ">90% · PAIN RELIEF")
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'outcomesDivider',
      title: '━━━━━━━━  OUTCOMES  ━━━━━━━━',
      description:
        'Outcome stat cards shown below the overview (e.g. ">90% · PAIN RELIEF", "24 hrs · WALKING").',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'outcomesSectionTitle',
      title: 'Outcomes — Section Heading',
      description: 'Heading above the outcome cards (e.g. "Outcomes")',
      type: 'string',
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcome Cards',
      description: 'Each card shows a stat value and a label (e.g. ">90%" / "PAIN RELIEF").',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Stat Value',
              description: 'e.g. ">90%"',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Stat Label',
              description: 'e.g. "PAIN RELIEF"',
              type: 'string',
            }),
          ],
          preview: {
            select: {title: 'value', subtitle: 'label'},
          },
        },
      ],
    }),
    // ══════════════════════════════════════════════════════
    //   WHO NEEDS THIS TREATMENT? SECTION
    //   (heading + bullet point list of indications)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'whoNeedsDivider',
      title: '━━━━━━━━  WHO NEEDS THIS TREATMENT?  ━━━━━━━━',
      description: 'Section listing who this treatment is for — shown as arrow bullet points.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'whoNeedsHeading',
      title: 'Who Needs This — Section Heading',
      description: 'e.g. "Who Needs This Treatment?"',
      type: 'string',
    }),
    defineField({
      name: 'whoNeedsItems',
      title: 'Who Needs This — Bullet Points',
      description:
        'Each item is one arrow bullet point (e.g. "Severe knee osteoarthritis (Grade III–IV)…").',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // ══════════════════════════════════════════════════════
    //   QUOTED TEXT SECTION
    //   (doctor quote block — blue background card)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'quotedTextDivider',
      title: '━━━━━━━━  QUOTED TEXT  ━━━━━━━━',
      description: 'Blue quote card shown on the page — doctor quote and attribution.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'quoteText',
      title: 'Quote — Text',
      description:
        'The doctor\'s quote (e.g. "Knee replacement has transformed how we treat severe arthritis…")',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'quoteAttribution',
      title: 'Quote — Attribution',
      description:
        'Name and title shown below the quote (e.g. "— Dr. Satish Reddy, Orthopaedic & Joint Replacement Surgeon")',
      type: 'string',
    }),

    // ══════════════════════════════════════════════════════
    //   TREATMENT FAQs SECTION
    //   (accordion Q&A — "Common Questions / Frequently Asked")
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'faqsDivider',
      title: '━━━━━━━━  TREATMENT FAQs  ━━━━━━━━',
      description:
        'Accordion FAQ section — section label, heading, and list of questions with answers.',
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
            defineField({name: 'question', title: 'Question', type: 'string'}),
            defineField({name: 'answer', title: 'Answer', type: 'text', rows: 3}),
          ],
          preview: {
            select: {title: 'question', subtitle: 'answer'},
          },
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   RIGHT SIDEBAR — BOOK A CONSULTATION
    //   (Call Now button + WhatsApp Us button)
    // ══════════════════════════════════════════════════════

    defineField({
      name: 'sidebarConsultDivider',
      title: '━━━━━━━━  RIGHT SIDEBAR · Book a Consultation  ━━━━━━━━',
      description: 'Sidebar box shown on the right — "Call Now" and "WhatsApp Us" buttons.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'contactOptionsText',
      title: 'Contact Options — Heading Text',
      description: 'Text shown at the top of the sidebar contact box (e.g. "Book a Consultation")',
      type: 'string',
    }),
    defineField({
      name: 'sidebarPhoneHref',
      title: 'Call Now — Phone Link',
      description: 'Phone number link for the "Call Now" button (e.g. tel:07969084429)',
      type: 'string',
    }),
    defineField({
      name: 'sidebarcallLabel',
      title: 'Call Now Button Label',
      description: 'Label on the "Call Now" button (e.g. "Call Now")',
      type: 'string',
    }),
    defineField({
      name: 'sidebarWhatsappHref',
      title: 'WhatsApp Us — Link',
      description: 'WhatsApp link for the "WhatsApp Us" button (e.g. https://wa.me/917969084429)',
      type: 'url',
    }),
    defineField({
      name: 'sidebarWhatsappLabel',
      title: 'WhatsApp Button Label',
      description: 'Label on the WhatsApp button (e.g. "WhatsApp Us")',
      type: 'string',
    }),

    // ══════════════════════════════════════════════════════
    //   RIGHT SIDEBAR — OTHER TREATMENTS
    //   (list of links to other treatment pages)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'sidebarOtherDivider',
      title: '━━━━━━━━  RIGHT SIDEBAR · Other Treatments  ━━━━━━━━',
      description:
        'Sidebar box listing links to other treatment pages (e.g. Hip Replacement, ACL Surgery…).',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'otherTreatmentsCardTitle',
      title: 'Other Treatments — Card Title',
      description:
        'Heading shown at the top of the "Other Treatments" sidebar box (e.g. "Other Treatments")',
      type: 'string',
    }),
    defineField({
      name: 'otherTreatments',
      title: 'Other Treatments List',
      description: 'Links shown in the "Other Treatments" sidebar box.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Treatment Name',
              description: 'e.g. "Hip Replacement"',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Treatment Page Link',
              description: 'e.g. /treatments/hip-replacement',
              type: 'string',
            }),
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
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
      description: 'e.g. "Not sure which treatment is right for you?"',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtext',
      title: 'CTA Banner — Subtext',
      description: 'e.g. "Book a consultation with Dr. Satish Reddy and get a personalised treatment plan."',
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
      description: 'e.g. "WhatsApp Us"',
      type: 'string',
    }),
    defineField({
      name: 'ctaBackLabel',
      title: 'CTA Banner — Back Button Label',
      description: 'e.g. "← Back to Treatments"',
      type: 'string',
    }),
    defineField({
      name: 'ctaBackHref',
      title: 'CTA Banner — Back Button Link',
      description: 'e.g. /treatments',
      type: 'string',
    }),
  ],
})
