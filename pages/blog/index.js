import Head from "next/head";

import {
    blog
} from '../../content/blog'

const Blog = () => {
    const { title, subtitle, posts } = blog

    return (
        <>
            <Head>
                <title>SV Hoptoad | Blog</title>
            </Head>

            <div className="relative bg-gray-50 pt-4 pb-6 px-4 sm:px-6 lg:pt-10 lg:pb-10 lg:px-8">

                {/*removing for now...not sure the point of this div*/}
                {/*<div className="absolute inset-0">*/}
                {/*    <div className="bg-white h-1/3 sm:h-2/3" />*/}
                {/*</div>*/}

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

                        {/*Cards*/}
                        {posts.map((post) => (
                            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">

                                {/*Image*/}
                                <div className="flex-shrink-0">
                                    <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                                </div>

                                {/*Card content*/}
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between">


                                    <div className="flex-1">

                                        {/*Post type*/}
                                        <p className="text-sm font-medium text-cyan-600">
                                            <a href={post.category.href} className="hover:underline">
                                                {post.category.name}
                                            </a>
                                        </p>

                                        {/*Post title and text content*/}
                                        <a href={post.href} className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                            <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                        </a>
                                    </div>

                                    {/*Post date*/}
                                    <div className="flex space-x-1 text-sm text-gray-500 mt-6">
                                        <time dateTime={post.datetime}>{post.date}</time>
                                    </div>

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
                        ))}
                    </div>

                </div>
            </div>

        </>
    );
}

export default Blog;