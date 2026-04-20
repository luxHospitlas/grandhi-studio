import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // ══════════════════════════════════════════════════════
    //   SEO / META TAGS
    // ══════════════════════════════════════════════════════
    defineField({
      name: 'seoDivider',
      title: '━━━━━━━━  SEO / META TAGS  ━━━━━━━━',
      description: 'Meta title and description for the Home page — used in search engine results and browser tabs.',
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

    // ── Hero Section ────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({name: 'name', title: 'Doctor Name', type: 'string'}),
        defineField({name: 'designation', title: 'Designation', type: 'string'}),
        defineField({name: 'credentials', title: 'Credentials', type: 'string'}),
        defineField({name: 'membership', title: 'Membership Line', type: 'string'}),
        defineField({
          name: 'fellowships',
          title: 'Fellowships',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({name: 'hospital', title: 'Hospital Name', type: 'string'}),
        defineField({name: 'location', title: 'Location', type: 'string'}),
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
            },
          ],
        }),
        defineField({
          name: 'bookCta',
          title: 'Book CTA',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Button Label', type: 'string'}),
            defineField({name: 'subtext', title: 'Subtext', type: 'string'}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
          ],
        }),
        defineField({
          name: 'callCta',
          title: 'Call CTA',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Button Label', type: 'string'}),
            defineField({name: 'phone', title: 'Phone Number', type: 'string'}),
            defineField({name: 'href', title: 'Tel Link', type: 'string'}),
          ],
        }),
        defineField({name: 'heroImage', title: 'Hero Photo', type: 'image'}),
        defineField({name: 'heroImageAlt', title: 'Hero Photo Alt Text', type: 'string'}),
      ],
    }),

    // ── Nav Links ───────────────────────────────────────────────────
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),

    // ── CTA Buttons ─────────────────────────────────────────────────
    defineField({
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
            defineField({
              name: 'variant',
              title: 'Variant',
              type: 'string',
              options: {list: ['primary', 'outline']},
            }),
          ],
        },
      ],
    }),

    // ── Trust Badges ────────────────────────────────────────────────
    defineField({
      name: 'trustBadges',
      title: 'Trust Badges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
          ],
        },
      ],
    }),

    // ── Header ──────────────────────────────────────────────────────
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        defineField({name: 'name', title: 'Doctor Name', type: 'string'}),
        defineField({name: 'designation', title: 'Designation', type: 'string'}),
        defineField({name: 'phone', title: 'Phone (display)', type: 'string'}),
        defineField({name: 'phoneHref', title: 'Phone (tel: link)', type: 'string'}),
      ],
    }),

    // ── Footer ──────────────────────────────────────────────────────
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({name: 'name', title: 'Doctor Name', type: 'string'}),
        defineField({name: 'designation', title: 'Designation', type: 'string'}),
        defineField({name: 'phone', title: 'Phone', type: 'string'}),
        defineField({name: 'hospital', title: 'Hospital', type: 'string'}),
        defineField({name: 'location', title: 'Location', type: 'string'}),
        defineField({name: 'year', title: 'Copyright Year', type: 'string'}),
        defineField({name: 'copyright', title: 'Copyright Text', type: 'string'}),
        defineField({
          name: 'links',
          title: 'Footer Quick Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'href', title: 'Link', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // ── Conditions Section (headings only — items are separate documents) ──
    defineField({
      name: 'conditionsSection',
      title: 'Conditions Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
        defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
        defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
        defineField({name: 'viewAllHref', title: 'View All Link', type: 'string'}),
      ],
    }),

    // ── Treatments Section (headings only — items are separate documents) ──
    defineField({
      name: 'treatmentsSection',
      title: 'Treatments Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
        defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
        defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
      ],
    }),

    // ── FAQ Section (headings only — items are separate documents) ──
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
        defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
        defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
      ],
    }),

    // ── Testimonials Section (headings only — items are separate documents) ──
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
        defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
        defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
      ],
    }),

    // ── About Doctor ────────────────────────────────────────────────
    defineField({
      name: 'aboutDoctor',
      title: 'About Doctor Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
        defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
        defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
        defineField({name: 'bio', title: 'Bio / Description', type: 'text'}),
        defineField({name: 'profileHref', title: 'Full Profile Link', type: 'string'}),
        defineField({name: 'profileLabel', title: 'Full Profile Link Label', type: 'string'}),
        defineField({
          name: 'tags',
          title: 'Credential Tags',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),

    // ── Clinic Location ─────────────────────────────────────────────
    defineField({
      name: 'clinicLocation',
      title: 'Clinic Location',
      type: 'object',
      fields: [
        defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
        defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
        defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
        defineField({name: 'hospital', title: 'Hospital Name', type: 'string'}),
        defineField({
          name: 'address',
          title: 'Address Lines',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({name: 'landmark', title: 'Landmark', type: 'string'}),
        defineField({name: 'rating', title: 'Google Rating', type: 'string'}),
        defineField({name: 'reviews', title: 'Reviews Count Text', type: 'string'}),
        defineField({name: 'phone', title: 'Phone (display)', type: 'string'}),
        defineField({name: 'phoneHref', title: 'Phone (tel: link)', type: 'string'}),
        defineField({name: 'mapsEmbedSrc', title: 'Google Maps Embed URL', type: 'url'}),
        defineField({name: 'directionsHref', title: 'Directions Link', type: 'url'}),
        defineField({name: 'directionsLabel', title: 'Directions Button Label', type: 'string'}),
        defineField({name: 'reviewsHref', title: 'Google Reviews Link', type: 'url'}),
      ],
    }),

    // ── Hospital Info ───────────────────────────────────────────────
    defineField({
      name: 'hospital',
      title: 'Hospital Info',
      type: 'object',
      fields: [
        defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
        defineField({name: 'name', title: 'Hospital Name', type: 'string'}),
        defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({name: 'logo', title: 'Hospital Logo', type: 'image'}),
        defineField({
          name: 'features',
          title: 'Feature Badges',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'icon', title: 'Icon (emoji)', type: 'string'}),
                defineField({name: 'label', title: 'Label', type: 'string'}),
              ],
            },
          ],
        }),
        defineField({name: 'websiteHref', title: 'Website URL', type: 'url'}),
        defineField({name: 'websiteLabel', title: 'Website Button Label', type: 'string'}),
      ],
    }),

    // ── Insurance ───────────────────────────────────────────────────
    defineField({
      name: 'insurance',
      title: 'Insurance Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
        defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
        defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
        defineField({
          name: 'cards',
          title: 'Info Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'icon', title: 'Icon (emoji)', type: 'string'}),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // ── Health Videos ───────────────────────────────────────────────
    defineField({
      name: 'healthVideos',
      title: 'Health Videos',
      type: 'object',
      fields: [
        defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
        defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
        defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
        defineField({
          name: 'videos',
          title: 'Videos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Video Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'string'}),
                defineField({name: 'videoId', title: 'YouTube Video ID', type: 'string'}),
                defineField({name: 'href', title: 'Link', type: 'string'}),
              ],
            },
          ],
        }),
        defineField({name: 'viewAllHref', title: 'View All Link', type: 'string'}),
        defineField({name: 'viewAllLabel', title: 'View All Label', type: 'string'}),
      ],
    }),

    // ── Surgical Team ───────────────────────────────────────────────
    defineField({
      name: 'surgicalTeam',
      title: 'Surgical Team',
      type: 'object',
      fields: [
        defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
        defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
        defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
        defineField({
          name: 'members',
          title: 'Team Members',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'name', title: 'Name', type: 'string'}),
                defineField({name: 'credentials', title: 'Credentials', type: 'string'}),
                defineField({name: 'role', title: 'Role', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({name: 'image', title: 'Photo', type: 'image'}),
              ],
            },
          ],
        }),
        defineField({name: 'note', title: 'Team Note', type: 'text'}),
      ],
    }),
  ],
})
