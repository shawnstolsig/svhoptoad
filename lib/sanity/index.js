import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "sq8huxry",
    dataset: "production",
    apiVersion: "v2021-11-23",
    useCdn: false
})