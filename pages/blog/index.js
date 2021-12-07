import Head from "next/head";
import Image from "next/image"
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import {blog} from '../../content/blog'
import {cloudfrontLoader, addDays} from "../../util";
import {PinMap} from "../../components/map";
import sanity from '../../lib/sanity';

const URL_LAST_36_POSTS = `https://sq8huxry.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'post'%5D%20%7C%20order(date%20desc)%20%7B%0A%20%20id%2C%20%0A%20%20title%2C%20%0A%20%20date%2C%0A%20%20type%2C%0A%20%20content%2C%0A%20%20htmlContent%2C%0A%20%20location%2C%0A%20%20%22photos%22%3A%20*%5B_type%20%3D%3D%20%22photo%22%20%26%26%20references(%5E._id)%5D%7Bid%2C%20src%2C%20height%2C%20width%2C%20alt%7D%0A%7D%5B0...36%5D`

const Blog = ({ blogPosts }) => {
    const { title, subtitle, oneSecondEverydayVideos } = blog
    const [detailedPost, setDetailedPost] = useState({
        key: null,
        title: null,
        date: null,
        type: null
    })
    const [open, setOpen] = useState(false)

    const [pw, setPw] = useState(blogPosts)
    useEffect(() => {
        setPw(blogPosts);
    }, [blogPosts])

    const [startDate, setStartDate] = useState(new Date(blogPosts[blogPosts.length - 1].date))
    const [endDate, setEndDate] = useState(addDays(new Date(blogPosts[0].date),1))
    useEffect(async () => {
        console.log(endDate, startDate)
        const posts = await sanity.fetch(`
            *[_type == 'post' && date >= "${startDate.toISOString()}" && date <= "${endDate.toISOString()}"] | order(date desc) {
              id,
              title,
              date,
              type,
              content,  
              htmlContent,
              location,
              "photos": *[_type == "photo" && references(^._id)]{id, src, height, width, alt}
            }[0...100]
        `)
        setPw(posts)
    }, [startDate, endDate])

    // opens post details modal
    const openPostDetails = (key) => {
        const detailPost = originalPosts.find(post => post.key === key)
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

            // a slight delay before updating state to allow animation time to run
            setTimeout(() => {
                setDetailedPost({
                    key: null,
                    title: null,
                    date: null,
                    type: null
                })
            }, 200)
    }

    // grab next month of posts
    const backOneMonth = () => {
        const end = startDate
        setStartDate(addDays(startDate, -30))
        setEndDate(end)
        // PICKUP HERE....FIGURE OUT HOW TO ADD THESE TO START RATHER THAN REPLACING ALL POSTS
    }

    // re-structure/format Predict Wind blog posts
    const formattedPredictWindsPosts = pw.map(({id, title, type, date, content, photos, location}) =>  ({
            key: `blog-${id}`,
            title,
            textContent: content,
            date: new Date(date),
            image: photos.length ? photos[0].src : null,
            photos,
            location,
            type
        })
    )

    // combine formatted posts from different sources together
    const originalPosts = formattedPredictWindsPosts.concat(oneSecondEverydayVideos)

    // sort by recent - oldest
    originalPosts.sort((a,b) => b.date - a.date)

    // ADD DATE RANGE PICKER SO THAT START DATE AND END DATE CAN BE UPDATED

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
                        {originalPosts.map(card => {
                            const {
                                key,
                                title,
                                textContent,
                                videoContent,
                                date,
                                image,
                                type
                            } = card

                            return (
                                // Card
                                <div
                                    className={`flex flex-col rounded-lg shadow-xl overflow-hidden ${type === 'One Second Everyday' ? '' : 'cursor-pointer'}`}
                                    key={key}
                                    onClick={() => openPostDetails(key)}
                                >

                                    {/*Image*/}
                                    {image &&
                                        <div className="flex-shrink-0 h-48 relative w-full">
                                            <Image src={image} layout={"fill"} objectFit={'cover'} loader={cloudfrontLoader}/>
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
                                            { textContent &&
                                                <p className={`mt-3 text-base text-gray-500 overflow-y-scroll ${image ? 'max-h-60' : 'max-h-112'} whitespace-pre-line`}>
                                                    {textContent}
                                                </p>
                                            }
                                            { videoContent &&
                                                <video className="mt-3 h-100 overflow-y-scroll rounded" controls  >
                                                    <source src={videoContent} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            }

                                        </div>

                                        {/*Post date*/}
                                        <p className="text-sm text-gray-400 mt-4">
                                            {type}
                                        </p>

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/*Load more posts button*/}
                    <div className={'flex justify-center'}>
                        <button type="button"
                                onClick={backOneMonth}
                                className="my-4 inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                            Load another month...
                        </button>
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
                            {/*Modal card*/}
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
                                    <div className={`relative ${detailedPost.image && 'h-112'}`}>
                                        { detailedPost.image &&
                                            <Image src={detailedPost.image} layout={"fill"} objectFit={'contain'} loader={cloudfrontLoader} />
                                        }
                                    </div>

                                    <div className="mt-3 text-left sm:mt-5 px-4">
                                        <Dialog.Title as="h3" className="text-xl leading-6 font-medium text-gray-900">
                                            {detailedPost.title}
                                        </Dialog.Title>
                                        <div className={'flex items-center justify-between my-1'}>
                                            {detailedPost.date &&
                                                <p className="text-sm text-cyan-600">
                                                    <time dateTime={detailedPost.date.toDateString()}>{detailedPost.date.toLocaleString()}</time>
                                                </p>
                                            }
                                            {detailedPost.type &&
                                                <p className="text-sm text-gray-400 ml-4">
                                                    {detailedPost.type}
                                                </p>
                                            }
                                        </div>
                                        { detailedPost.textContent &&
                                            <div className="mt-2">
                                                <p className={`text-base text-gray-500 overflow-y-scroll whitespace-pre-line`}>
                                                    {detailedPost.textContent}
                                                </p>
                                            </div>
                                        }
                                        { detailedPost.photos && detailedPost.photos.length > 1 && detailedPost.photos.map((photo,i) => {
                                            if(i === 0) return  // don't render the first image, since it's already displayed
                                            return (
                                                <div className="mt-2 relative h-160" key={photo.id}>
                                                    <Image src={photo.src} layout={"fill"} objectFit={'contain'} loader={cloudfrontLoader}/>
                                                </div>
                                            )
                                        })}
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
    const blogPosts = await sanity.fetch(`
        *[_type == 'post'] | order(date desc) {
          id,
          title,
          date,
          type,
          content,
          htmlContent,
          location,
          "photos": *[_type == "photo" && references(^._id)]{id, src, height, width, alt}
        }[0...24]
        `)

    return {
        props: {
            blogPosts
        },
    }
}

export default Blog;

