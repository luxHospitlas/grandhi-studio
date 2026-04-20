import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutUsPage',
  title: 'About Us Page',
  type: 'document',
  preview: {
    select: {title: 'name'},
  },
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

    // ══════════════════════════════════════════════════════
    //   HERO SECTION
    //   (icon card, hospital label, name, credentials, role, tags)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'heroDivider',
      title: '━━━━━━━━  HERO SECTION  ━━━━━━━━',
      description:
        'Top hero banner — icon, hospital label, doctor name, credentials, role, and tag pills.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'icon',
      title: 'Hero — Icon',
      description:
        'Large icon shown inside the rounded card on the left side of the hero (e.g. "🦴" bone emoji). Displayed at ~5rem size.',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero — Image',
      description: 'Optional image for the hero card — used instead of the emoji icon if provided.',
      type: 'image',
    }),
    defineField({
      name: 'hospitalLabel',
      title: 'Hero — Hospital Label',
      description:
        'Small uppercase tracking-wide text above the doctor name (e.g. "LUX HOSPITALS, HYDERABAD")',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Hero — Doctor Full Name',
      description: 'Main bold heading in the hero banner (e.g. "Dr. Satish Reddy Gandavarapu")',
      type: 'string',
    }),
    defineField({
      name: 'credentials',
      title: 'Hero — Credentials Line',
      description:
        'Qualifications shown below the name, separated by dots (e.g. "MS Ortho · M.Ch Ortho · Fellowship Australia, Italy & UK")',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Hero — Role / Designation',
      description:
        'Job title shown below credentials in lighter text (e.g. "Orthopaedic & Joint Replacement Surgeon")',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Hero — Tag Pills',
      description:
        'Rounded pills shown at the bottom of the hero (e.g. "🏅 Nicholas Andrey Gold Medal", "🌐 International Fellowships", "✔ Joint Replacement Expert").',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // ══════════════════════════════════════════════════════
    //   STATS BAR SECTION
    //   (4 stat cards below hero: value + label)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'statsBarDivider',
      title: '━━━━━━━━  STATS BAR  ━━━━━━━━',
      description:
        'Row of 4 stat cards shown directly below the hero banner (e.g. "31+ · YEARS EXPERIENCE").',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'statsBar',
      title: 'Stats Bar — Stat Cards',
      description: 'Each card has a large value and a small label below it.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Stat Value',
              description: 'Large number/text (e.g. "31+", "1000s", "3", "6+")',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Stat Label',
              description:
                'Small uppercase label (e.g. "YEARS EXPERIENCE", "JOINTS REPLACED", "INTL. FELLOWSHIPS", "MEMBERSHIPS")',
              type: 'string',
            }),
          ],
          preview: {select: {title: 'value', subtitle: 'label'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   ABOUT THE DOCTOR SECTION
    //   (section label, heading, bio paragraphs)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'aboutDoctorDivider',
      title: '━━━━━━━━  ABOUT THE DOCTOR  ━━━━━━━━',
      description:
        'Bio section — small label, heading ("Meet Dr. Satish Reddy"), and multi-paragraph biography.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'aboutSectionLabel',
      title: 'About Doctor — Section Label',
      description: 'Small uppercase label above the heading (e.g. "ABOUT THE DOCTOR")',
      type: 'string',
    }),
    defineField({
      name: 'aboutHeadingNormal',
      title: 'About Doctor — Heading (normal text)',
      description: 'e.g. "Meet"',
      type: 'string',
    }),
    defineField({
      name: 'aboutHeadingHighlight',
      title: 'About Doctor — Heading (highlighted text)',
      description: 'e.g. "Dr. Satish Reddy"',
      type: 'string',
    }),
    defineField({
      name: 'aboutBio',
      title: 'About Doctor — Biography',
      description:
        "Full bio text — multiple paragraphs describing the doctor's experience, expertise, and patient approach. Use line breaks to separate paragraphs.",
      type: 'text',
      rows: 10,
    }),

    // ══════════════════════════════════════════════════════
    //   QUALIFICATIONS SECTION
    //   (section label, heading, education cards)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'qualificationsDivider',
      title: '━━━━━━━━  QUALIFICATIONS  ━━━━━━━━',
      description:
        'Education & Degrees section — label, heading, and cards for each qualification.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'qualSectionLabel',
      title: 'Qualifications — Section Label',
      description: 'Small uppercase label above the heading (e.g. "QUALIFICATIONS")',
      type: 'string',
    }),
    defineField({
      name: 'qualHeadingNormal',
      title: 'Qualifications — Heading (normal text)',
      description: 'e.g. "Education &"',
      type: 'string',
    }),
    defineField({
      name: 'qualHeadingHighlight',
      title: 'Qualifications — Heading (highlighted text)',
      description: 'e.g. "Degrees"',
      type: 'string',
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualification Cards',
      description: 'Each card shows an icon, degree name, institution, and subtitle.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon (emoji)',
              description: 'e.g. "🎓", "📚", "🏅"',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Card Image',
              description: 'Optional image for the qualification card — used instead of the emoji icon if provided.',
              type: 'image',
            }),
            defineField({
              name: 'degree',
              title: 'Degree Name',
              description:
                'Uppercase label (e.g. "MBBS", "MS — ORTHOPAEDICS", "M.CH — ORTHOPAEDICS")',
              type: 'string',
            }),
            defineField({
              name: 'institution',
              title: 'Institution Name',
              description: 'e.g. "P.S.G. Institute of Medical Sciences"',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              description: 'e.g. "and Research", "and Research Institute", "Master of Chirurgiae"',
              type: 'string',
            }),
          ],
          preview: {select: {title: 'degree', subtitle: 'institution'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   INTERNATIONAL FELLOWSHIPS SECTION
    //   (section label, heading, fellowship cards)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'fellowshipsDivider',
      title: '━━━━━━━━  INTERNATIONAL FELLOWSHIPS  ━━━━━━━━',
      description:
        'Advanced Training section — label, heading, and cards for each international fellowship.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'fellowSectionLabel',
      title: 'Fellowships — Section Label',
      description: 'Small uppercase label above the heading (e.g. "ADVANCED TRAINING")',
      type: 'string',
    }),
    defineField({
      name: 'fellowHeadingNormal',
      title: 'Fellowships — Heading (normal text)',
      description: 'e.g. "International"',
      type: 'string',
    }),
    defineField({
      name: 'fellowHeadingHighlight',
      title: 'Fellowships — Heading (highlighted text)',
      description: 'e.g. "Fellowships"',
      type: 'string',
    }),
    defineField({
      name: 'fellowships',
      title: 'Fellowship Cards',
      description:
        'Each card shows a country code, fellowship title, institution name, and location.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'countryCode',
              title: 'Country Code',
              description: 'Short code shown on the left (e.g. "AU", "IT", "GB")',
              type: 'string',
            }),
            defineField({
              name: 'fellowTitle',
              title: 'Fellowship Title',
              description: 'Bold title (e.g. "Fellowship in Joint Replacement")',
              type: 'string',
            }),
            defineField({
              name: 'institution',
              title: 'Institution Name',
              description: 'Highlighted link text (e.g. "Flinders Medical Centre")',
              type: 'string',
            }),
            defineField({
              name: 'location',
              title: 'Location',
              description: 'City & country or extra detail (e.g. "Adelaide, Australia")',
              type: 'string',
            }),
          ],
          preview: {select: {title: 'fellowTitle', subtitle: 'institution'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   SPECIALISATION SECTION
    //   (section label, heading, description, expertise pills)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'specDivider',
      title: '━━━━━━━━  SPECIALISATION  ━━━━━━━━',
      description:
        'Areas of Expertise section — label, heading, short paragraph, and specialty tag pills with icons.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'specSectionLabel',
      title: 'Specialisation — Section Label',
      description: 'Small uppercase label (e.g. "SPECIALISATION")',
      type: 'string',
    }),
    defineField({
      name: 'specHeadingNormal',
      title: 'Specialisation — Heading (normal text)',
      description: 'e.g. "Areas of"',
      type: 'string',
    }),
    defineField({
      name: 'specHeadingHighlight',
      title: 'Specialisation — Heading (highlighted text)',
      description: 'e.g. "Expertise"',
      type: 'string',
    }),
    defineField({
      name: 'specDescription',
      title: 'Specialisation — Description',
      description: "Short paragraph below the heading describing the doctor's expertise.",
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'specialisations',
      title: 'Expertise Pills',
      description: 'Each pill has an emoji icon and a label (e.g. "🦴 Total Knee Replacement").',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon (emoji)',
              description: 'e.g. "🦴", "💪", "🔬"',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Specialty Name',
              description: 'e.g. "Total Knee Replacement"',
              type: 'string',
            }),
          ],
          preview: {select: {title: 'label', subtitle: 'icon'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   PROFESSIONAL JOURNEY SECTION
    //   (section label, heading, timeline entries)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'journeyDivider',
      title: '━━━━━━━━  PROFESSIONAL JOURNEY  ━━━━━━━━',
      description: 'Career timeline section — label, heading, and vertical timeline of milestones.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'journeySectionLabel',
      title: 'Journey — Section Label',
      description: 'Small uppercase label (e.g. "CAREER")',
      type: 'string',
    }),
    defineField({
      name: 'journeyHeadingNormal',
      title: 'Journey — Heading (normal text)',
      description: 'e.g. "Professional"',
      type: 'string',
    }),
    defineField({
      name: 'journeyHeadingHighlight',
      title: 'Journey — Heading (highlighted text)',
      description: 'e.g. "Journey"',
      type: 'string',
    }),
    defineField({
      name: 'journeyItems',
      title: 'Journey Timeline Items',
      description: 'Each item is one milestone on the timeline — add in chronological order.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon (emoji or country code)',
              description: 'Emoji icon (e.g. "🎓") or country code (e.g. "AU", "IT", "GB")',
              type: 'string',
            }),
            defineField({
              name: 'stageLabel',
              title: 'Stage Label',
              description:
                'Small uppercase label (e.g. "MEDICAL SCHOOL", "POSTGRADUATE", "INTERNATIONAL FELLOWSHIP", "PRESENT")',
              type: 'string',
            }),
            defineField({
              name: 'stageTitle',
              title: 'Stage Title',
              description: 'Bold heading (e.g. "MBBS — P.S.G. Institute of Medical Sciences")',
              type: 'string',
            }),
            defineField({
              name: 'stageBody',
              title: 'Stage Description',
              description: 'Short paragraph describing this milestone.',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: {select: {title: 'stageTitle', subtitle: 'stageLabel'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   RECOGNITION SECTION
    //   (section label, heading, award cards)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'awardsDivider',
      title: '━━━━━━━━  RECOGNITION  ━━━━━━━━',
      description:
        'Awards & Achievements section — label, heading, and award cards with icon and title.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'awardsSectionLabel',
      title: 'Awards — Section Label',
      description: 'Small uppercase label (e.g. "RECOGNITION")',
      type: 'string',
    }),
    defineField({
      name: 'awardsHeadingNormal',
      title: 'Awards — Heading (normal text)',
      description: 'e.g. "Awards &"',
      type: 'string',
    }),
    defineField({
      name: 'awardsHeadingHighlight',
      title: 'Awards — Heading (highlighted text)',
      description: 'e.g. "Achievements"',
      type: 'string',
    }),
    defineField({
      name: 'awards',
      title: 'Award Cards',
      description: 'Each card has an emoji icon and an award title.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon (emoji)',
              description: 'e.g. "🥇", "🏅"',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Award Image',
              description: 'Optional image for the award card — used instead of the emoji icon if provided.',
              type: 'image',
            }),
            defineField({
              name: 'title',
              title: 'Award Title',
              description: 'e.g. "Nicholas Andrey Gold Medal", "The Rising Star of the Year"',
              type: 'string',
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'icon'}},
        },
      ],
    }),

    // ══════════════════════════════════════════════════════
    //   AFFILIATIONS SECTION
    //   (section label, heading, membership list)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'affiliationsDivider',
      title: '━━━━━━━━  AFFILIATIONS  ━━━━━━━━',
      description:
        'Professional Memberships section — label, heading, and bullet list of associations.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'affiliationsSectionLabel',
      title: 'Affiliations — Section Label',
      description: 'Small uppercase label (e.g. "AFFILIATIONS")',
      type: 'string',
    }),
    defineField({
      name: 'affiliationsHeadingNormal',
      title: 'Affiliations — Heading (normal text)',
      description: 'e.g. "Professional"',
      type: 'string',
    }),
    defineField({
      name: 'affiliationsHeadingHighlight',
      title: 'Affiliations — Heading (highlighted text)',
      description: 'e.g. "Memberships"',
      type: 'string',
    }),
    defineField({
      name: 'memberships',
      title: 'Membership List',
      description: 'Each item is one association name (e.g. "Indian Orthopaedic Association").',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // ══════════════════════════════════════════════════════
    //   PATIENT CARE SECTION
    //   (section label, heading, quote card)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'careDivider',
      title: '━━━━━━━━  PATIENT CARE  ━━━━━━━━',
      description:
        'Care Philosophy section — label, heading, and a blue quote card with doctor attribution.',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'careSectionLabel',
      title: 'Care — Section Label',
      description: 'Small uppercase label (e.g. "PATIENT CARE")',
      type: 'string',
    }),
    defineField({
      name: 'careHeadingNormal',
      title: 'Care — Heading (normal text)',
      description: 'e.g. "Care"',
      type: 'string',
    }),
    defineField({
      name: 'careHeadingHighlight',
      title: 'Care — Heading (highlighted text)',
      description: 'e.g. "Philosophy"',
      type: 'string',
    }),
    defineField({
      name: 'careQuoteText',
      title: 'Care — Quote Text',
      description:
        'Italic quote inside the blue card (e.g. "Orthopaedic surgery is not just about fixing bones…")',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'careQuoteAttribution',
      title: 'Care — Quote Attribution',
      description:
        'Name and credentials below the quote (e.g. "— Dr. Satish Reddy Gandavarapu, MS, M.Ch, FRCS")',
      type: 'string',
    }),

    // ══════════════════════════════════════════════════════
    //   BOOK A CONSULTATION SECTION
    //   (heading, subtext, WhatsApp + Call buttons)
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'bookDivider',
      title: '━━━━━━━━  BOOK A CONSULTATION  ━━━━━━━━',
      description: 'CTA card — heading, subtext, and two buttons (Book on WhatsApp + Call Now).',
      type: 'string',
      readOnly: true,
      initialValue: '',
      components: {input: () => null},
    }),
    defineField({
      name: 'bookHeading',
      title: 'Book — Heading',
      description: 'e.g. "Book a Consultation"',
      type: 'string',
    }),
    defineField({
      name: 'bookSubtext',
      title: 'Book — Subtext',
      description:
        'e.g. "Available at Lux Hospitals, Hyderabad · Expert Orthopaedic & Joint Replacement Care"',
      type: 'string',
    }),
    defineField({
      name: 'bookWhatsappHref',
      title: 'Book — WhatsApp Link',
      description: 'e.g. https://wa.me/917969084429',
      type: 'url',
    }),
    defineField({
      name: 'bookWhatsappLabel',
      title: 'Book — WhatsApp Button Label',
      description: 'e.g. "Book on WhatsApp"',
      type: 'string',
    }),
    defineField({
      name: 'bookCallHref',
      title: 'Book — Call Link',
      description: 'e.g. tel:07969084429',
      type: 'string',
    }),
    defineField({
      name: 'bookCallLabel',
      title: 'Book — Call Button Label',
      description: 'e.g. "Call Now"',
      type: 'string',
    }),
  ],
})
