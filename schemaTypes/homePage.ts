//File :- schemaTypes/homePage.ts
import { defineType, defineField } from "sanity";

export default defineType({ 
    name: "homePage",
    title: "Home Page",
    type: "document",
    fields: [
              // ── SEO / Meta Tags ─────────────────────────────────────────────
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
  ],
})