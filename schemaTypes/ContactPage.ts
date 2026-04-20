import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ContactPage',
  title: 'Contact Page',
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
      description: 'Meta title and description for the Contact page — used in search engine results and browser tabs.',
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

    // ══════════════════════════════════════════════════════
    //   HERO SECTION — GET IN TOUCH
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'heroDivider',
      title: '━━━━━━━━  HERO SECTION — GET IN TOUCH  ━━━━━━━━',
      description: 'Top section of the Contact page — section label, heading, and subtext.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'sectionLabel',
      title: 'Section Label',
      description: 'Small label above the heading (e.g. "GET IN TOUCH")',
      type: 'string',
    }),
    defineField({
      name: 'headingNormal',
      title: 'Heading — Normal Text',
      description: 'e.g. "Contact Dr."',
      type: 'string',
    }),
    defineField({
      name: 'headingHighlight',
      title: 'Heading — Highlighted Text',
      description: 'e.g. "Satish Reddy"',
      type: 'string',
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      description: 'Short paragraph below the heading (e.g. "Reach out to book a consultation…")',
      type: 'text',
      rows: 2,
    }),

    // ══════════════════════════════════════════════════════
    //   TRUST BANNER
    //   (dark blue bar with 3 text items)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'trustBannerDivider',
      title: '━━━━━━━━  TRUST BANNER  ━━━━━━━━',
      description:
        'Dark blue bar below the hero — 3 short trust labels separated by dividers (e.g. "Same-Day Appointments").',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'trustBannerItems',
      title: 'Trust Banner Items',
      description:
        'The 3 labels shown in the dark blue banner (e.g. "Same-Day Appointments", "Confidential Consultations", "Insurance Assistance").',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // ══════════════════════════════════════════════════════
    //   REACH US SECTION
    //   (4 contact cards + bottom call bar)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'reachUsDivider',
      title: '━━━━━━━━  REACH US SECTION  ━━━━━━━━',
      description:
        'Section with 4 contact cards (WhatsApp, Call Us, Directions, Book Now) and a bottom call bar.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'reachUsSectionLabel',
      title: 'Section Label',
      description: 'Small label above the heading (e.g. "REACH US")',
      type: 'string',
    }),
    defineField({
      name: 'reachUsSectionHeading',
      title: 'Section Heading',
      description: 'e.g. "How Would You Like to Connect?"',
      type: 'string',
    }),
    defineField({
      name: 'contactCards',
      title: 'Contact Cards',
      description: 'The 4 contact cards — WhatsApp, Call Us, Directions, Book Now.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'cardTitle',
              title: 'Card Title',
              description: 'e.g. "WhatsApp"',
              type: 'string',
            }),
            defineField({
              name: 'descLine1',
              title: 'Description Line 1',
              description: 'e.g. "Fastest response"',
              type: 'string',
            }),
            defineField({
              name: 'descLine2',
              title: 'Description Line 2',
              description: 'e.g. "Usually within 15 min"',
              type: 'string',
            }),
            defineField({
              name: 'linkLabel',
              title: 'Link Label',
              description: 'e.g. "→ Chat Now"',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              description: 'e.g. https://wa.me/...',
              type: 'string',
            }),
          ],
          preview: {select: {title: 'cardTitle', subtitle: 'descLine1'}},
        },
      ],
    }),
    defineField({
      name: 'bottomBarDivider',
      title: '— Bottom Call Bar —',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'bottomBarLabel',
      title: 'Bottom Bar — Label',
      description: 'Text shown in the bottom bar (e.g. "Call 07969 084 448")',
      type: 'string',
    }),
    defineField({
      name: 'bottomBarHref',
      title: 'Bottom Bar — Phone Link',
      description: 'e.g. tel:07969084448',
      type: 'string',
    }),

    // ══════════════════════════════════════════════════════
    //   NOTICE BANNER
    //   (light orange box with bold label + paragraph)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'noticeBannerDivider',
      title: '━━━━━━━━  NOTICE BANNER  ━━━━━━━━',
      description:
        'Light orange callout box — bold label and a short paragraph (e.g. "Confidential & Compassionate Care").',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'noticeBannerLabel',
      title: 'Notice Banner — Label',
      description: 'Bold label with star icon (e.g. "Confidential & Compassionate Care")',
      type: 'string',
    }),
    defineField({
      name: 'noticeBannerText',
      title: 'Notice Banner — Text',
      description: 'Paragraph shown below the label.',
      type: 'text',
      rows: 2,
    }),

    // ══════════════════════════════════════════════════════
    //   OUR HOSPITALS / WHERE TO FIND US
    //   (section label, heading + hospital location cards)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'locationsDivider',
      title: '━━━━━━━━  OUR HOSPITALS — WHERE TO FIND US  ━━━━━━━━',
      description:
        'Section with hospital location cards — each card has address, map embed, and a Get Directions button.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'locationsSectionLabel',
      title: 'Section Label',
      description: 'Small label above the heading (e.g. "OUR HOSPITALS")',
      type: 'string',
    }),
    defineField({
      name: 'locationsHeadingNormal',
      title: 'Heading — Normal Text',
      description: 'e.g. "Where to"',
      type: 'string',
    }),
    defineField({
      name: 'locationsHeadingHighlight',
      title: 'Heading — Highlighted Text',
      description: 'e.g. "Find Us"',
      type: 'string',
    }),
    defineField({
      name: 'locations',
      title: 'Hospital Location Cards',
      description:
        'Each card is one hospital — name, address lines, landmark, map embed URL, and directions link.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'hospitalName',
              title: 'Hospital Name',
              description: 'e.g. "Apollo Hospitals"',
              type: 'string',
            }),
            defineField({
              name: 'addressLine1',
              title: 'Address Line 1',
              description: 'e.g. "Jubilee Hills, Hyderabad"',
              type: 'string',
            }),
            defineField({
              name: 'addressLine2',
              title: 'Address Line 2',
              description: 'e.g. "Telangana – 500 033"',
              type: 'string',
            }),
            defineField({
              name: 'landmark',
              title: 'Landmark',
              description: 'e.g. "Near Jubilee Hills Check Post"',
              type: 'string',
            }),
            defineField({
              name: 'mapEmbedUrl',
              title: 'Map Embed URL',
              description: 'Google Maps embed iframe src URL.',
              type: 'url',
            }),
            defineField({
              name: 'mapsOpenUrl',
              title: 'Open in Maps — URL',
              description: 'Google Maps link to open in browser.',
              type: 'url',
            }),
            defineField({
              name: 'directionsUrl',
              title: 'Get Directions — URL',
              description: 'Google Maps directions link.',
              type: 'url',
            }),
          ],
          preview: {select: {title: 'hospitalName', subtitle: 'addressLine1'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   CTA SECTION (bottom blue block)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'ctaDivider',
      title: '━━━━━━━━  CTA SECTION (Bottom Blue Block)  ━━━━━━━━',
      description:
        'Blue CTA block at the bottom — heading, subtext, WhatsApp button, and Back to Home button.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'ctaHeading',
      title: 'CTA Heading',
      description: 'e.g. "Ready to Book a Consultation?"',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtext',
      title: 'CTA Subtext',
      description: 'e.g. "Same-day appointments available — WhatsApp us now to confirm your slot."',
      type: 'string',
    }),
    defineField({
      name: 'ctaWhatsappHref',
      title: 'WhatsApp Button — Link',
      description: 'e.g. https://wa.me/917969084429',
      type: 'url',
    }),
    defineField({
      name: 'ctaWhatsappLabel',
      title: 'WhatsApp Button — Label',
      description: 'e.g. "WhatsApp to Book"',
      type: 'string',
    }),
    defineField({
      name: 'ctaBackLabel',
      title: 'Back Button — Label',
      description: 'e.g. "← Back to Home"',
      type: 'string',
    }),
    defineField({
      name: 'ctaBackHref',
      title: 'Back Button — Link',
      description: 'e.g. /',
      type: 'string',
    }),
  ],
})
