import {defineField, defineType} from 'sanity'

export const menuType = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Manu Items',
      type: 'array',
      of: [{type: 'reference', to: {type: 'page'}}],
      // sortable: true
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
