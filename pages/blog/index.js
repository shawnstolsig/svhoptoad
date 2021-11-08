import Head from "next/head";

import {blog} from '../../content/blog'
import {formatPredictWindPosts} from "../../util";
import {PinMap} from "../../components/map";

const Blog = (props) => {
    const { title, subtitle } = blog
    const { predictWindPosts } = props

    // re-structure/format Predict Wind blog posts
    const formattedPredictWindsPosts = formatPredictWindPosts(predictWindPosts)

    // combine formatted posts from different sources together
    const posts = formattedPredictWindsPosts

    // sort by recent - oldest
    posts.sort((a,b) => b.date - a.date)

    return (
        <>
            <Head>
                <title>SV Hoptoad | Blog</title>
            </Head>

            <div className="relative pt-4 pb-6 px-4 sm:px-6 lg:pt-10 lg:pb-10 lg:px-8">

                <div className="relative max-w-7xl mx-auto bg-blue-100">

                    {/*Page title and subtitle*/}
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            {subtitle}
                        </p>
                    </div>

                    {/*Card grid*/}
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {posts.map(card => {
                            const {
                                key,
                                title,
                                content,
                                date,
                                image,
                                type
                            } = card

                            return (
                                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" key={key}>

                                    {/*Image*/}
                                    {image &&
                                        <div className="flex-shrink-0">
                                            <img className="h-48 w-full object-cover" src={image} alt={`${type} image`}/>
                                        </div>
                                    }

                                    {/*Card content*/}
                                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">

                                        <div className="flex-1">

                                            {/*Post type*/}
                                            <p className="text-sm font-medium text-cyan-600">
                                                <time dateTime={date.toDateString()}>{date.toLocaleString()}</time>
                                            </p>

                                            {/*Post title and text content*/}
                                            <a href={'#'} className="block mt-2">
                                                <p className="text-xl font-semibold text-gray-900">{title}</p>
                                                <p className="mt-3 text-base text-gray-500 max-h-80 overflow-y-scroll border" dangerouslySetInnerHTML={{__html: content}}/>
                                            </a>
                                        </div>

                                        {/*Post date*/}
                                        <p className="flex space-x-1 text-sm text-gray-400 mt-4">
                                            {type}
                                        </p>

                                        {/*author section, not using*/}
                                        {/*<div className="mt-6 flex items-center">*/}
                                        {/*    <div className="flex-shrink-0">*/}
                                        {/*        <a href={post.author.href}>*/}
                                        {/*            <span className="sr-only">{post.author.name}</span>*/}
                                        {/*            <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="ml-3">*/}
                                        {/*        <p className="text-sm font-medium text-gray-900">*/}
                                        {/*            <a href={post.author.href} className="hover:underline">*/}
                                        {/*                {post.author.name}*/}
                                        {/*            </a>*/}
                                        {/*        </p>*/}
                                        {/*        <div className="flex space-x-1 text-sm text-gray-500">*/}
                                        {/*            <time dateTime={post.datetime}>{post.date}</time>*/}
                                        {/*            <span aria-hidden="true">&middot;</span>*/}
                                        {/*            <span>{post.readingTime} read</span>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>

        </>
    );
}

export async function getServerSideProps(context) {
    // Fetch blog posts from PredictWind's API
    const res = await fetch(`https://forecast.predictwind.com/tracking/blog/Hoptoad?_=1636170664690`)
    const { posts = [] } = await res.json()

    return {
        props: {
            predictWindPosts: posts
        },
    }
}

export default Blog;

