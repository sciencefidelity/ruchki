import groq from "groq"

const siteFields = `
  seoDescription,
  seoImage,
  "keywords": seoKeywords,
  seoTitle,
  siteDescription,
  siteName,
  twitterHandle
`

export const indexQuery = groq`{
  "home": *[_type == "home"][0]{
    body,
    title
  }
}`

export const pageQuery = groq`{
  "site": *[_type == "site"][0]{
    seoDescription,
    seoImage,
    "keywords": seoKeywords,
    seoTitle,
    siteDescription,
    siteName,
    twitterHandle
  }
}`
