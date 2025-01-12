import groq from 'groq';

const omitDrafts = "!(_id in path('drafts.**'))";

const body = `body[]{
  ...,
  markDefs[]{
    ...,
    item->{
      _type,
      "slug": slug.current
    }
  }
}`;

const seo = `
  keywords,
  seoDescription,
  seoImage,
  seoTitle
`;

const siteFields = `
  ${seo},
  siteDescription,
  siteName,
  twitterHandle,
  url
`;

export const layoutQuery = groq`{
  "site": *[_type == "site"][0]{
    ${siteFields}
  },
  "home": *[_type == "home" && ${omitDrafts}][0]{
    ${body},
    title
  },
  "menu": *[_type == "menu"][0]{
    "items": items[]->{
      "slug": slug.current,
      title
    }
  }
}`;

export const blogQuery = groq`{
  "posts": *[_type == "post"] | order(publishedAt desc)[0..7]{
    _id,
    author->{name, "slug": slug.current},
    body,
    categories[]->{
      _id, "slug": slug.current, title
    },
    publishedAt,
    "slug": slug.current,
    title,
  }
}`;

export const postQuery = groq`{
  "post": *[_type == "post" && ${omitDrafts} && slug.current == $slug][0]{
    author->{
      name,
      "slug": slug.current,
      twitterHandle
    },
    ${body},
    "categories": categories[]->{
      _id, "slug": slug.current, title
    },
    mainImage,
    "next": *[
      _type == 'post' && publishedAt > ^.publishedAt && ${omitDrafts}
    ] | order(publishedAt asc)[0]{
      publishedAt,
      "slug": slug.current,
      title
    },
    "previous": *[
      _type == 'post' && publishedAt < ^.publishedAt && ${omitDrafts}
    ] | order(publishedAt desc)[0]{
      publishedAt,
      "slug": slug.current,
      title
    },
    publishedAt,
    ${seo},
    "slug": slug.current,
    title
  }
}`;

export const pageQuery = groq`{
  "page": *[_type == "page" && ${omitDrafts} && slug.current == $slug][0]{
    ${body},
    ${seo},
    "slug": slug.current,
    template[0],
    title
  }
}`;

export const authorsQuery = groq`{
  "authors": *[_type == "author" && ${omitDrafts}]{
    ${body},
    name,
    "posts": *[_type == "post" && author._ref == ^._id && ${omitDrafts}]{
      _id, publishedAt, "slug": slug.current, title
    },
    "slug": slug.current
  }[count(posts) > 0]
}`;

export const authorQuery = groq`{
  "author": *[_type == "author" && ${omitDrafts} && slug.current == $slug]{
    ${body},
    name,
    "posts": *[_type == "post" && author._ref == ^._id && ${omitDrafts}]{
      _id, publishedAt, "slug": slug.current, title,
      author->{
        name,
        "slug": slug.current,
        twitterHandle
      },
    },
    "slug": slug.current
  }[count(posts) > 0][0]
}`;

export const categoriesQuery = groq`{
  "categories": *[_type == "category" && ${omitDrafts}] | order(title){
    _id,
    "posts": *[_type == "post" && references(^._id) && ${omitDrafts}] | order(publishedAt desc){
      _id, publishedAt, "slug": slug.current, title
    },
    "slug": slug.current,
    title
  }[count(posts) > 0]
}`;

export const categoryQuery = groq`{
  "category": *[_type == "category" && ${omitDrafts} && slug.current == $slug] | order(title){
    _id,
    "posts": *[_type == "post" && references(^._id) && ${omitDrafts}] | order(publishedAt desc){
      _id, publishedAt, "slug": slug.current, title
    },
    "slug": slug.current,
    title
  }[count(posts) > 0][0]
}`;

export const tagsQuery = groq`{
  "posts": *[_type == "post" && ${omitDrafts}]{
    keywords
  }
}`;
