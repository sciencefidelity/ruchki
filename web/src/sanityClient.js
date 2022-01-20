import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "d5kibd92",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true
})
