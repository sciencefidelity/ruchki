export default {
  name: 'manu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: {type: 'page' }}],
      sortable: true
    },
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
