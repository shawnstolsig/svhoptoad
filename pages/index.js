import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import {PortableText} from '@portabletext/react'


import { intro } from '../content/home'
import PredictWindMap from "../components/predictWindMap"
import VisitedContext from "../context/visted";
import sanity from "../lib/sanity";
import {urlFor,ptComponents} from "../lib/portable-text";

function NavButton({path, title}){
    return (
        <div className="rounded-md shadow ml-2">
            <Link href={path}>
                <a className="w-full flex items-center justify-center px-4 py-1.5 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-2 md:text-lg md:px-5">
                    {title}
                </a>
            </Link>
        </div>
    )
}

export default function Home({headers, content}) {
    // console.log('headers', headers, 'content', content)
    const {visited} = useContext(VisitedContext)

    return (
        <>

            <Head>
                <title>SV Hoptoad | Home</title>
            </Head>

            {/*if no previous visit, show full home page*/}
            {!visited &&
                <>
                    <section className="lg:relative mt-3">
                        <div className="mx-auto w-full py-8 text-center lg:py-36 lg:text-left">
                            <div className="px-8 lg:w-1/2 sm:px-8 xl:pr-16">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                    <span className="block">{headers["home-main"]}</span>{' '}
                                    <span className="block text-cyan-600 ">{headers["home-sub"]}</span>
                                </h1>
                                <div className={'prose prose-stone lg:prose-lg mx-auto mt-8 md:mt-18 prose-img:m-auto prose-img:rounded'}>
                                    <PortableText
                                        value={content['homepage']}
                                        components={ptComponents}
                                    />
                                </div>
                                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                    {
                                        [
                                            { path: '/blog', title: 'Blog'},
                                            { path: '/recipes', title: 'Recipes'},
                                            { path: '/boat', title: 'Boat'},
                                            { path: '/travel', title: 'Travel'},
                                            { path: '/contact', title: 'Contact'},
                                        ].map(({path, title}) => <NavButton key={path} path={path} title={title} /> )
                                    }
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                            <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src={intro.sonnyAndMargiePhoto}
                                alt=""
                            />
                        </div>
                    </section>

                    <div className={'max-w-7xl mx-auto my-4 p-2'}>
                        <h2 className={'text-2xl text-cyan-600'}>Location Tracker</h2>
                        <p>Check back here for real-time updates on Hoptoad's position, weather conditions, and status updates!  This map will take over the home page after your first visit to this website.</p>
                        <PredictWindMap classes={'h-96 mt-2'}/>
                    </div>
                </>
            }

            {/*if previously visited, just show tracker*/}
            { visited && <PredictWindMap classes={'responsive-map'}/> }
        </>
    );
}


export async function getStaticProps(context) {
    const data = await sanity.fetch(`
        *[identifier in ["homepage", "home-main", "home-sub"]]
        `)

    const headers = {}
    const content = {}

    data.filter(d => d._type === 'headers').forEach(h => headers[h.identifier] = h.header)
    data.filter(d => d._type === 'content').forEach(c => content[c.identifier] = c.body)

    return {
        props: {
            headers,
            content
        },
        revalidate: 60
    }
}
