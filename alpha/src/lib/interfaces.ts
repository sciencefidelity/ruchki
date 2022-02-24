import {
  BlockContent,
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot
} from "../generated/schema"

export interface Author {
  body: BlockContent
  name: string
  posts: Post[]
  slug: string
}

export interface Category {
  _id: string
  slug: string
  title: string
  posts: Post[]
}

export interface Home {
  body: BlockContent
  featuredPosts: Post[]
  title: string
}

export interface Image {
  _type: "image";
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface Menu {
  item: MenuItem[]
}

export interface MenuItem {
  slug: string
  title: string
}

export interface Site extends SEO {
  siteDescription: string
  siteName: string
  twitterHandle: string
}

export interface SEO {
  keywords: string
  seoDescription: string
  seoImage: Image
  seoTitle: string
}

export interface Page extends SEO {
  body: BlockContent
  slug: string
  template: string
  title: string
}

export interface Post extends SEO {
  author: Author
  body: BlockContent
  categories: Category[]
  publishedAt: string
  slug: string
  title: string
}

