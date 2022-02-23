import { BlockContent } from "sanity-codegen"

export interface Home {
  body: BlockContent
  title: string
}

export interface Page {
  seoDescription: string
  seoImage: string
  keywords: string
  seoTitle: string
  siteDescription: string
  siteName: string
  twitterHandle: string
}
