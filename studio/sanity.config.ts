import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_TITLE || 'Untitled',

  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_API_DATASET || '',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
