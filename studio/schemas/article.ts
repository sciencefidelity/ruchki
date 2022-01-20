export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'icon', title: 'Icon', type: 'image'},
    {
      name: 'related',
      title: 'Related',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}]}],
    },
    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoKeywords', title: 'Keywords', type: 'string', group: 'seo'},
    {name: 'seoSlug', title: 'Slug', type: 'slug', group: 'seo'},
    {name: 'seoImage', title: 'Image', type: 'image', group: 'seo'},
  ],
}
