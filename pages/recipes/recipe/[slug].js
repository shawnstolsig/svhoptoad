import Head from "next/head";
import Image from "next/image"
import Link from "next/link"
import { Fragment, useState, useEffect, forwardRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {PortableText} from '@portabletext/react'
import { useRouter} from "next/router";

import {recipes} from '../../../content/recipes'
import {cloudfrontLoader } from "../../../util";
import sanity from '../../../lib/sanity';
import Loader from "../../../components/loader";
import {urlFor,ptComponents} from "../../../lib/portable-text";

const Recipe = ({recipe = {}}) => {
    const router = useRouter()


    if(!recipe) return <div>Recipe not found :(</div>

    const {
        title,
        body,
        mainImage,
        createdAt,
        servingSize
    } = recipe

    const timeOptions = { month: 'long', year: 'numeric' }

    return (
        <>

            <Head>
                <title>SV Hoptoad | {title}</title>
            </Head>

            {/*Main section of recipe page*/}
            <div className="relative pt-4 pb-6 px-4 sm:px-6 lg:pt-10 lg:pb-10 lg:px-8">

                <div className="relative max-w-7xl mx-auto">

                    {/*Page title and subtitle*/}
                    <div className="text-center">
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{title}</h1>
                        <h2 className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 font-light">
                            {servingSize ? `Serving Size: ${servingSize}` : ''} {servingSize && createdAt ? '•' : ''} {new Date(createdAt).toLocaleString([], timeOptions)}
                        </h2>
                        <button onClick={router.back} className={'border border-gray-300 py-1 px-3 m-4 rounded hover:shadow-inner'}>Back to recipes</button>
                    </div>

                    <div className={'prose prose-stone lg:prose-lg mx-auto mt-8 md:mt-18 prose-img:m-auto prose-img:rounded'}>
                        <PortableText
                            value={body}
                            components={ptComponents}
                        />
                    </div>

                    <div className={'flex justify-center mt-8'}>
                        <button onClick={router.back} className={'border border-gray-300 py-1 px-3 m-2 rounded hover:shadow-inner'}>Back to recipes</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const paths = await sanity.fetch(
        `*[_type == "recipe" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: 'blocking',
    }
}

export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params

    // PICKUP HERE....why is recipe not fetching??
    const recipe = await sanity.fetch(`
        *[_type == "recipes" && slug.current == $slug][0]{
          title,
          body,
          "mainImage": mainImage.asset->,
          createdAt,
          servingSize,
        }
    `, { slug })

    return {
        props: {
            recipe
        },
        revalidate: 60
    }
}

export default Recipe;

