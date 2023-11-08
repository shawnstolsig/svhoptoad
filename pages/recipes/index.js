import Head from "next/head";
import Image from "next/image"
import Link from "next/link";
import { Fragment, useState, useEffect, forwardRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import {recipes} from '../../content/recipes'
import {cloudfrontLoader } from "../../util";
import sanity from '../../lib/sanity';
import Loader from "../../components/loader";
import {urlFor} from "../../lib/portable-text";


const Recipes = ({headers, content, recipeData = []}) => {
    // console.log('headers', headers, 'content', content)

    const { title, subtitle } = recipes
    return (
        <>

            <Head>
                <title>SV Hoptoad | Recipes</title>
            </Head>

            {/*Main section of blog post page*/}
            <div className="relative pt-4 pb-6 px-4 sm:px-6 lg:pt-10 lg:pb-10 lg:px-8">

                <div className="relative max-w-7xl mx-auto">

                    {/*Page title and subtitle*/}
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{headers["recipes-main"]}</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">{headers["recipes-sub"]}</p>
                    </div>

                    {/*Card grid*/}
                    <div className={'flex flex-wrap justify-center'}>
                        { recipeData.map(({createdAt, title, slug, mainImage}) => {
                            const foregroundColor = mainImage && mainImage.metadata.palette.dominant.foreground === "#fff" ? 'text-white' : 'text-black'

                            return (
                                <a href={`/recipes/recipe/${slug.current}`} className={'nav-hover'}>
                                    <div className={'relative w-96 h-64 m-4 rounded overflow-hidden border shadow-xl'} key={slug.current} >
                                        {mainImage &&
                                            <Image
                                                key={slug.current}
                                                src={urlFor(mainImage).url()}
                                                layout={'fill'}
                                                objectFit={'cover'}
                                                // height={200}
                                                // width={300}
                                            />
                                        }

                                        <div className={`absolute bottom-0 bg-gradient-to-t from-black from-30% p-4 w-full h-32 flex items-end`}>
                                            <h1 className={`text-lg font-semibold text-white`}>{title}</h1>
                                        </div>

                                    </div>
                                </a>


                            )
                        })}
                    </div>



                    {/*{originalPosts.filter(({type}) => type === 'Satellite Update' || type === 'One Second Everyday').length*/}
                    {/*    ? (*/}
                    {/*        <>*/}
                    {/*            <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">*/}
                    {/*                {originalPosts.map(card => {*/}
                    {/*                    const {*/}
                    {/*                        key,*/}
                    {/*                        title,*/}
                    {/*                        textContent,*/}
                    {/*                        videoContent,*/}
                    {/*                        date,*/}
                    {/*                        image,*/}
                    {/*                        type*/}
                    {/*                    } = card*/}

                    {/*                    return (*/}
                    {/*                        // Card*/}
                    {/*                        <div*/}
                    {/*                            className={`flex flex-col rounded-lg shadow-xl overflow-hidden ${type === 'One Second Everyday' ? '' : 'cursor-pointer'}`}*/}
                    {/*                            key={key}*/}
                    {/*                            onClick={() => openPostDetails(key)}*/}
                    {/*                        >*/}

                    {/*                            /!*Image*!/*/}
                    {/*                            {image &&*/}
                    {/*                                <div className="flex-shrink-0 h-48 relative w-full">*/}
                    {/*                                    <Image src={image} layout={"fill"} objectFit={'cover'} loader={cloudfrontLoader}/>*/}
                    {/*                                </div>*/}
                    {/*                            }*/}

                    {/*                            /!*Card content*!/*/}
                    {/*                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">*/}

                    {/*                                <div className="flex-1">*/}

                    {/*                                    /!*Post type*!/*/}
                    {/*                                    <p className="text-sm font-medium text-cyan-600 mb-2">*/}
                    {/*                                        <time dateTime={date.toDateString()}>{date.toLocaleString()}</time>*/}
                    {/*                                    </p>*/}

                    {/*                                    /!*Post title and text content*!/*/}
                    {/*                                    <p className="text-xl font-semibold text-gray-900">{title}</p>*/}
                    {/*                                    { textContent &&*/}
                    {/*                                        <p className={`mt-3 text-base text-gray-500 overflow-y-scroll ${image ? 'max-h-60' : 'max-h-112'} whitespace-pre-line`}>*/}
                    {/*                                            {textContent}*/}
                    {/*                                        </p>*/}
                    {/*                                    }*/}
                    {/*                                    { videoContent &&*/}
                    {/*                                        <video className="mt-3 h-100 overflow-y-scroll rounded" controls  >*/}
                    {/*                                            <source src={videoContent} type="video/mp4" />*/}
                    {/*                                            Your browser does not support the video tag.*/}
                    {/*                                        </video>*/}
                    {/*                                    }*/}

                    {/*                                </div>*/}

                    {/*                                /!*Post date*!/*/}
                    {/*                                <p className="text-sm text-gray-400 mt-4">*/}
                    {/*                                    {type}*/}
                    {/*                                </p>*/}

                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    )*/}
                    {/*                })}*/}
                    {/*            </div>*/}

                    {/*            /!*Load more posts button*!/*/}
                    {/*            <div className={'flex justify-center'}>*/}
                    {/*                <button type="button"*/}
                    {/*                        onClick={backOneMonth}*/}
                    {/*                        disabled={endReached()}*/}
                    {/*                        className={`disabled:hidden my-6 inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500`}>*/}
                    {/*                    {`Load another 30 days...`}*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                    {/*        </>*/}
                    {/*    ) : (*/}
                    {/*        <Loader />*/}
                    {/*    )*/}
                    {/*}*/}

                </div>
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    const recipes = await sanity.fetch(`
        *[_type == 'recipes'] | order(title asc) {
          title,
          createdAt,
          "mainImage": mainImage.asset->,
          slug
        }
        `)

    const data = await sanity.fetch(`
        *[identifier in ["recipes-main", "recipes-sub"]]
        `)

    const headers = {}
    const content = {}

    data.filter(d => d._type === 'headers').forEach(h => headers[h.identifier] = h.header)
    data.filter(d => d._type === 'content').forEach(c => content[c.identifier] = c.body)

    return {
        props: {
            headers,
            content,
            recipeData: recipes
        },
        revalidate: 60
    }

}

export default Recipes;

