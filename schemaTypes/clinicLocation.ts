import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'clinicLocation',
  title: 'Clinic Location',
  type: 'document',
  fields: [
    defineField({name: 'sectionLabel', title: 'Section Label', type: 'string'}),
    defineField({name: 'headingNormal', title: 'Heading (normal)', type: 'string'}),
    defineField({name: 'headingHighlight', title: 'Heading (highlight)', type: 'string'}),
    defineField({name: 'hospital', title: 'Hospital Name', type: 'string'}),
    defineField({name: 'rating', title: 'Google Rating', type: 'string'}),
    defineField({name: 'reviews', title: 'Reviews Count Text', type: 'string'}),
    defineField({
      name: 'address',
      title: 'Address Lines',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'landmark', title: 'Landmark', type: 'string'}),
    defineField({name: 'phone', title: 'Phone (display)', type: 'string'}),
    defineField({name: 'phoneHref', title: 'Phone (tel: link)', type: 'string'}),
    defineField({name: 'mapsEmbedSrc', title: 'Google Maps Embed URL', type: 'url'}),
    defineField({name: 'directionsHref', title: 'Directions Link', type: 'url'}),
    defineField({name: 'directionsLabel', title: 'Directions Button Label', type: 'string'}),
    defineField({name: 'reviewsHref', title: 'Google Reviews Link', type: 'url'}),
  ],
})
