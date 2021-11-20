import Head from "next/head";
import Image from "next/image"
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import {blog} from '../../content/blog'
import {formatPredictWindPosts} from "../../util";
import {PinMap} from "../../components/map";

const Blog = (props) => {
    const { title, subtitle, oneSecondEverydayVideos } = blog
    const { predictWindPosts } = props
    const [detailedPost, setDetailedPost] = useState({
        key: null,
        title: null,
        date: null,
        type: null
    })
    const [open, setOpen] = useState(false)

    // opens post details modal
    const openPostDetails = (key) => {
        const detailPost = posts.find(post => post.key === key)
        if(!detailPost){
            setDetailedPost({
                ...detailedPost,
                title: `Post not found`,
                errorText: 'Sorry about that, please try another post.'
            })
        }
        else if(detailPost.type === 'One Second Everyday'){
            return
        }
        else {
            setDetailedPost(detailPost)
        }
        setOpen(true)
    }

    // closes post details modal
    const closePostDetails = () => {
        setOpen(false)

            setTimeout(() => {
                setDetailedPost({
                    key: null,
                    title: null,
                    date: null,
                    type: null
                })
            }, 500)
    }

    // re-structure/format Predict Wind blog posts
    const formattedPredictWindsPosts = formatPredictWindPosts(predictWindPosts)

    // combine formatted posts from different sources together
    const posts = formattedPredictWindsPosts.concat(oneSecondEverydayVideos)

    // sort by recent - oldest
    posts.sort((a,b) => b.date - a.date)

    return (
        <>
            <Head>
                <title>SV Hoptoad | Blog</title>
            </Head>

            {/*Main section of blog post page*/}
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
                        {posts.map(card => {
                            const {
                                key,
                                title,
                                htmlContent,
                                videoContent,
                                date,
                                image,
                                type
                            } = card

                            return (
                                // Card
                                <div
                                    className="flex flex-col rounded-lg shadow-xl overflow-hidden cursor-pointer"
                                    key={key}
                                    onClick={() => openPostDetails(key)}
                                >

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
                                            <p className="text-sm font-medium text-cyan-600 mb-2">
                                                <time dateTime={date.toDateString()}>{date.toLocaleString()}</time>
                                            </p>

                                            {/*Post title and text content*/}

                                            <p className="text-xl font-semibold text-gray-900">{title}</p>
                                            { htmlContent &&
                                            <p className="mt-3 text-base text-gray-500 max-h-80 overflow-y-scroll" dangerouslySetInnerHTML={{__html: htmlContent}}/>
                                            }
                                            { videoContent &&
                                            <video className="mt-3 max-h-80 h-100 overflow-y-scroll rounded" controls  >
                                                <source src={videoContent} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            }
                                            {/*<a href={'#'} className="block mt-2">*/}
                                            {/*    */}
                                            {/*</a>*/}
                                        </div>

                                        {/*Post date*/}
                                        <p className="text-sm text-gray-400 mt-4">
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

            {/*Post details modal*/}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={closePostDetails}>
                    <div className="flex items-end justify-center min-h-screen text-center sm:block">

                        {/*Dialog background dimmer*/}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>

                        {/*Modal content*/}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >

                            {/*PICKUP HERE....STYLING FOR MODAL, ADD DATE AND BLOG POST TYPE*/}

                            <div className="inline-block bg-white rounded-lg p-4 text-left overflow-hidden shadow-xl transform transition-all align-middle max-w-5xl ">
                                <button onClick={closePostDetails} className={'absolute button h-8 w-8 z-50 top-1 right-1'}>
                                    <XIcon className={`h-5 w-5`} />
                                </button>
                                <div className={'mt-6'}>
                                    { detailedPost.errorText &&
                                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                                            <XIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div>
                                    }
                                    { detailedPost.image &&
                                        <img className="h-48 w-full object-cover" src={detailedPost.image} alt={`${detailedPost.type} image`}/>
                                    }

                                    <div className="mt-3 text-left sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            {detailedPost.title}
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            { detailedPost.htmlContent &&
                                            <p className="text-base text-gray-500 overflow-y-scroll" dangerouslySetInnerHTML={{__html: detailedPost.htmlContent}}/>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-600 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:text-sm"
                                        onClick={closePostDetails}
                                    >
                                        Back to blog...
                                    </button>
                                </div>
                            </div>

                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

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

