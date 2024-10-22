import {defineField, defineType} from 'sanity'

export const siteType = defineType({
  name: 'site',
  title: 'Site',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'content',
    }),
    defineField({
      name: 'facebookLink',
      title: 'Facebook Link',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'twitterLink',
      title: 'Twitter Link',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'instagramLink',
      title: 'Instagram Link',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      description: 'Displayed on Facebook and Twitter shares (max 60 characters).',
      validation: (Rule) => Rule.max(60).warning('Only 60 characters will be visible.'),
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'string',
      description: 'Displayed on Facebook and Twitter shares (max 65 characters).',
      validation: (Rule) => Rule.max(65).warning('Only 65 characters will be visible.'),
      group: 'seo',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'A list of keywords seperated by commas.',
      group: 'seo',
    }),
    defineField({
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      description: 'Ideal size 1200 x 630px (if not added main image will be used).',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      media: 'mainImage',
    },
  },
})
