export function formatPredictWindPosts(data) {
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

        return {
            key: topic_id,
            title,
            content: formattedCooked,
            date: new Date(created_at),
            image: cardImageUrl,
            type: 'Satellite Update'
        }


        // return {
        //     date: new Date(created_at),
        //     card: (
        //         <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" key={topic_id}>
        //
        //             {/*Image*/}
        //             {cardImageUrl &&
        //                 <div className="flex-shrink-0">
        //                     <img className="h-48 w-full object-cover" src={cardImageUrl} alt={`${postType} image`}/>
        //                 </div>
        //             }
        //
        //             {/*Card content*/}
        //             <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        //
        //                 <div className="flex-1">
        //
        //                     {/*Post type*/}
        //                     <p className="text-sm font-medium text-cyan-600">
        //                         <time dateTime={new Date(created_at).toDateString()}>{new Date(created_at).toLocaleString()}</time>
        //
        //                     </p>
        //
        //                     {/*Post title and text content*/}
        //                     <a href={'#'} className="block mt-2">
        //                         <p className="text-xl font-semibold text-gray-900">{title}</p>
        //                         <p className="mt-3 text-base text-gray-500 h-80 overflow-y-scroll border" dangerouslySetInnerHTML={{__html: formattedCooked}}/>
        //                     </a>
        //                 </div>
        //
        //                 {/*Post date*/}
        //                 <p className="flex space-x-1 text-sm text-gray-400 mt-4">
        //                     {postType}
        //                 </p>
        //
        //                 {/*author section, not using*/}
        //                 {/*<div className="mt-6 flex items-center">*/}
        //                 {/*    <div className="flex-shrink-0">*/}
        //                 {/*        <a href={post.author.href}>*/}
        //                 {/*            <span className="sr-only">{post.author.name}</span>*/}
        //                 {/*            <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />*/}
        //                 {/*        </a>*/}
        //                 {/*    </div>*/}
        //                 {/*    <div className="ml-3">*/}
        //                 {/*        <p className="text-sm font-medium text-gray-900">*/}
        //                 {/*            <a href={post.author.href} className="hover:underline">*/}
        //                 {/*                {post.author.name}*/}
        //                 {/*            </a>*/}
        //                 {/*        </p>*/}
        //                 {/*        <div className="flex space-x-1 text-sm text-gray-500">*/}
        //                 {/*            <time dateTime={post.datetime}>{post.date}</time>*/}
        //                 {/*            <span aria-hidden="true">&middot;</span>*/}
        //                 {/*            <span>{post.readingTime} read</span>*/}
        //                 {/*        </div>*/}
        //                 {/*    </div>*/}
        //                 {/*</div>*/}
        //
        //             </div>
        //         </div>
        //     )
        // }
    })
}