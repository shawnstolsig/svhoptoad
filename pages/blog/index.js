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

                <div className="relative max-w-7xl mx-auto">

                    {/*Page title and subtitle*/}
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            {subtitle}
                        </p>
                    </div>

                    {/*Card grid*/}
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                        {/*Cards: title, imageUrl, category.href, category.name, description, datetime, date*/}
                        {posts.map(({card}) => {

                            /**
                             * BLOG TODO :
                             * create little thumbnail maps for posts without pictures
                             * add spaces between <p> tags in cooked
                             * fix the card sizes, show popup if larger than card
                             * instagram posts?
                             * 1SE videos?
                             */

                            return card
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

