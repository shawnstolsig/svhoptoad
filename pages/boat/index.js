import Head from "next/head"
import Image from "next/image"
import { useRouter } from 'next/router'
import clsx from "clsx"
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import {
    MinusSmIcon,
    PlusSmIcon,
    ExternalLinkIcon
} from '@heroicons/react/outline'
import { CameraIcon } from '@heroicons/react/solid'
import {PortableText} from "@portabletext/react";


import { boats } from "../../content/boat"
import Gallery from "../../components/gallery"
import * as ga from '../../lib/google-analytics'
import sanity from "../../lib/sanity";
import {ptComponents} from "../../lib/portable-text";

function BoatSelector({ boat, setBoat }) {
    // const router = useRouter()

    return (
        <div className={'w-full lg:max-w-4xl mx-auto'}>
            <nav className="relative z-0 lg:rounded-lg shadow flex divide-x divide-gray-200" aria-label="Boat Tabs">
                {boats.map(({design, href}, tabIdx) => (
                    <button
                        key={design}
                        // href={`${router.pathname}?boat=${href}`}
                        onClick={() => {
                            setBoat(href)
                            ga.event({
                                action: "boat-selected",
                                params : {
                                    boat: href
                                }
                            })
                        }}
                        className={clsx(
                            href === boat ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                            tabIdx === 0 ? 'lg:rounded-l-lg' : '',
                            tabIdx === boats.length - 1 ? 'lg:rounded-r-lg' : '',
                            'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                        )}
                        aria-current={href === boat ? 'page' : undefined}
                    >
                        <span>{design}</span>
                        <span
                            aria-hidden="true"
                            className={clsx(
                                href === boat ? 'bg-cyan-500' : 'bg-transparent',
                                'absolute inset-x-0 bottom-0 h-0.5'
                            )}
                        />
                    </button>
                ))}
            </nav>
        </div>
    )
}

function BoatSpecCard({boat}) {
    const {
        design,
        length,
        beam,
        draft,
        material,
        rig,
        speed: {
            max,
            cruising
        },
        years: {
            built
        }
    } = boat

    const specs = [
        { label: 'Design', content: design},
        { label: 'Year Built', content: built},
        { label: 'Construction Material', content: material},
        { label: 'Rig', content: rig},
        { label: 'Length', content: `${length} ft`},
        { label: 'Beam', content: `${beam} ft`},
        { label: 'Draft', content: `${draft} ft`},
        { label: 'Cruising Speed', content: `${cruising}`},
        { label: 'Max Speed', content: `${max}`},
    ]

    return (
        <div className="bg-white border shadow overflow-hidden sm:rounded-lg">
            <div className="py-5 px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Specifications</h3>
                {/*<p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>*/}
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="divide-y divide-gray-200">
                    {specs.map(({label, content}) => (
                        <div className="py-3 grid grid-cols-3 gap-4 px-6" key={label}>
                            <dt className="text-sm font-medium text-cyan-600">{label}</dt>
                            <dd className="text-sm text-gray-900 mt-0 col-span-2">{content}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}

function BoatGear({gear}){
    return (
        <>
            {/*Gear heading*/}
            <div className="pb-5 border-b border-gray-200 px-4 sm:px-20 md:px-40 mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Equipment</h3>
                <p className="mt-2 max-w-4xl text-sm text-gray-500">
                    The most important (or favorite!) pieces of gear on Hoptoad.
                </p>
            </div>

            {/*Gear accordions*/}
            <div className="border-t divide-y divide-gray-200">
                {gear.map(({type, name, description, url, image}) => (
                    <Disclosure as="div" key={type}>
                        {({ open }) => (
                            <>
                                <h3>
                                    <Disclosure.Button className={"group relative w-full py-4 px-4 sm:px-20 md:px-40 flex justify-between items-center text-left hover:bg-gray-100"}>
                                        <span
                                            className={clsx(
                                                open ? 'text-cyan-600' : 'text-gray-900',
                                                'text-sm font-medium'
                                            )}
                                        >
                                          {type}
                                        </span>
                                        <span className="ml-6 flex items-center">
                                            {open ? (
                                                <MinusSmIcon
                                                    className="block h-6 w-6 text-cyan-400 group-hover:text-cyan-500"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <PlusSmIcon
                                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </span>
                                    </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel as="div" className={"mx-auto"}>
                                    <div className="flex justify-center p-2">
                                       <Image src={image} className={'rounded'} height={300} width={300} objectFit={'contain'}/>
                                        <div className={'flex flex-col justify-center ml-4'}>
                                            <h4 className="text-xl font-bold mt-0">{name}</h4>
                                            <p>
                                                {description}
                                            </p>
                                            <a href={url} className={'align-middle text-cyan-600'}>
                                                more info
                                                <ExternalLinkIcon className={'inline h-4 w-4 ml-1 '} />
                                            </a>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>

        </>
    )
}

function BoatDetails({boat, headers, content, gear}){
    const {
        header,
        href,
        description,
        photos,
        gallery,
        years: {
            start,
            end
        }
    } = boat
    return (
        <div className="bg-white overflow-hidden mt-4">
            <div className="relative max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">

                {/*Gray rectangle behind photo*/}
                {/*<div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />*/}

                {/*Description text and photo*/}
                <div className="sm:mt-6 lg:grid lg:grid-cols-2 lg:gap-8">

                    {/*Headers*/}
                    <div className="text-base max-w-prose ">
                        <div>
                            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase">
                                {headers[`boat-${href}-main`]}
                            </h2>
                            <h3 className="text-lg text-cyan-600 font-semibold tracking-wide uppercase">{headers[`boat-${href}-sub`]}</h3>
                        </div>
                    </div>

                    {/*Photo*/}
                    <div className="relative lg:row-start-1 lg:row-span-5 lg:col-start-2">
                        {/*<svg*/}
                        {/*    className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"*/}
                        {/*    width={404}*/}
                        {/*    height={384}*/}
                        {/*    fill="none"*/}
                        {/*    viewBox="0 0 404 384"*/}
                        {/*    aria-hidden="true"*/}
                        {/*>*/}
                        {/*    <defs>*/}
                        {/*        <pattern*/}
                        {/*            id="de316486-4a29-4312-bdfc-fbce2132a2c1"*/}
                        {/*            x={0}*/}
                        {/*            y={0}*/}
                        {/*            width={20}*/}
                        {/*            height={20}*/}
                        {/*            patternUnits="userSpaceOnUse"*/}
                        {/*        >*/}
                        {/*            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />*/}
                        {/*        </pattern>*/}
                        {/*    </defs>*/}
                        {/*    <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />*/}
                        {/*</svg>*/}

                        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                            <figure>
                                <div>
                                {/*<div className="aspect-w-12 aspect-h-7 lg:aspect-none">*/}
                                    <img
                                        className="rounded-lg shadow-lg object-cover object-center"
                                        src={photos[0].url}
                                        alt={photos[0].alt}
                                        width={1184}
                                        height={1376}
                                    />
                                    {/*<Image*/}
                                    {/*    width={1184}*/}
                                    {/*    height={1376}*/}
                                    {/*    src={photos[0].url}*/}
                                    {/*/>*/}
                                    {/*<img*/}
                                    {/*    className="rounded-lg shadow-lg object-cover object-center"*/}
                                    {/*    src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"*/}
                                    {/*    alt="Whitney leaning against a railing on a downtown street"*/}
                                    {/*    width={1184}*/}
                                    {/*    height={1376}*/}
                                    {/*/>*/}
                                </div>
                                <figcaption className="mt-3 flex text-sm text-gray-500">
                                    <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                                    <span className="ml-2">{photos[0].title}</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    {/*Description Text Paragraphs*/}
                    <div className={'prose prose-stone lg:prose-lg mx-auto mt-8 md:mt-18 prose-img:m-auto prose-img:rounded'}>
                        <PortableText
                            value={content[`boat-${href}`]}
                            components={ptComponents}
                        />
                    </div>
                </div>
            </div>

            {/*Gallery*/}
            {gallery && <Gallery files={gallery} className={'px-4'}/>}

            {/*Boat specs*/}
            <div className={`max-w-xl mx-auto my-4`}>
                <BoatSpecCard boat={boat} />
            </div>

            {/*Gear (if available)*/}
            <div className={`mx-auto my-4`}>
                {boat.href === 'moody46' && <BoatGear gear={gear} />}
            </div>
        </div>
    )
}

function Boat({headers, content, gear}){
    // console.log('headers', headers, 'content', content, 'gear', gear)
    const router = useRouter()
    const [boat, setBoat] = useState(router.query.boat ? router.query.boat : boats[0].href)
    console.log(boat)
    return (
        <>
            <Head>
                <title>SV Hoptoad | Boat</title>
            </Head>
            <div className={'mt-3'}>
                <BoatSelector boat={boat} setBoat={setBoat} />
                <BoatDetails boat={boats.find(({ href }) => href === boat)} headers={headers} content={content} gear={gear}/>
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    const [gear, data] = await Promise.all([
        sanity.fetch(`
        *[_type == 'gear']
        `),
        sanity.fetch(`
        *[identifier in [
            "boat-moody46", 
            "boat-roberts38",
            "boat-cal330",
            "boat-sanjuan23",
            "boat-moody46-main",
            "boat-moody46-sub",
            "boat-roberts38-main",
            "boat-roberts38-sub",
            "boat-cal330-main",
            "boat-cal330-sub",
            "boat-sanjuan23-main",
            "boat-sanjuan23-sub",
            ]]
        `)
    ])

    const headers = {}
    const content = {}

    data.filter(d => d._type === 'headers').forEach(h => headers[h.identifier] = h.header)
    data.filter(d => d._type === 'content').forEach(c => content[c.identifier] = c.body)

    return {
        props: {
            gear,
            headers,
            content
        },
        revalidate: 60
    }
}

export default Boat;
