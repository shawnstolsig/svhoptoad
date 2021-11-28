/**
 * This was the old version that'd parse posts directly from predict wind's API...
 * ...keeping this around in case we remove sanity.io
 * @param data
 * @returns {*}
 */
export function formatPredictWindPostsOld(data) {
    return data.map(({topic_id, title, raw, created_at, cooked}) => {

        const postType = 'Satellite Update'

        // pull out any image URL
        let cardImageUrl
        const photoRegex = /!\[Photo\|\d+x\d+]\((.+)\)/g;
        const photoMatches = raw.match(photoRegex)
        if (photoMatches) {
            const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
            const url = photoMatches[0].match(urlRegex)
            if (url) {
                cardImageUrl = url[0].substring(0, url[0].length - 1)  // chop off trailing ')'
            }
        }

        // pull images out of cooked so that they don't appear in content
        const cookedPhotoRegex = /<p><img.*<\/p>/g
        const cookedPhotoMatches = cooked.match(cookedPhotoRegex)
        let formattedCooked = cooked
        if (cookedPhotoMatches) {
            formattedCooked = cooked.replace(cookedPhotoMatches[0], '')
        }

        // add some spacing between paragraphs
        formattedCooked = formattedCooked.replace(/<\/p>/g,'<\/p><br/>')

        return {
            key: `blog-${topic_id}`,
            title,
            htmlContent: formattedCooked,
            date: new Date(created_at),
            image: cardImageUrl,
            type: 'Satellite Update'
        }
    })
}

/**
 * Used by Next.js so that PredictWind images work with the <Image> component
 * @param src
 * @param width
 * @param quality
 * @returns {*}
 */
export function cloudfrontLoader({src, width, quality}){
    return src
}