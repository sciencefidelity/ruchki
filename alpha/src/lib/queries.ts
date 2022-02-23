import groq from "groq"

export const indexQuery = groq`{
  "home": *[_type == "home"][0]{
    body,
    title
  }
}`

export const pageQuery = groq`{
  "page": *[_type == "site"][0]{
    seoDescription,
    seoImage,
    "keywords": seoKeywords,
    seoTitle,
    siteDescription,
    siteName,
    twitterHandle
  }
}`
