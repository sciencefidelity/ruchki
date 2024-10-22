import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'content',
    }),
    defineField({
      name: 'template',
      title: 'Template',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'grid',
        list: [
          {title: 'Article', value: 'article'},
          {title: 'Blog', value: 'blog'},
          {title: 'Contact Us', value: 'contact'},
        ],
      },
      // initialValue: {
      //   title: 'Article',
      //   value: 'article',
      // },
      validation: (Rule) => Rule.required(),
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
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
      title: 'title',
      media: 'mainImage',
    },
  },
})
