import Head from "next/head"
import Image from "next/image"
import { useRouter } from 'next/router'
import clsx from "clsx"
import { useState } from 'react'
import { CameraIcon } from '@heroicons/react/solid'

import { boats } from "../../content/boat"

function BoatSelector({ boat, setBoat }) {
    // const router = useRouter()

    return (
        <div className={'max-w-5xl mx-auto'}>
            <div className="sm:hidden">
                <label htmlFor="boat-tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="boat-tabs"
                    name="boat-tabs"
                    className="block w-3/4 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md mx-auto"
                    onChange={(event) => setBoat(event.target.value)}
                    value={boat}
                >
                    {boats.map(({design, href}) => (
                        <option key={design} value={href}>{design}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Boat Tabs">
                    {boats.map(({design, href}, tabIdx) => (
                        <button
                            key={design}
                            // href={`${router.pathname}?boat=${href}`}
                            onClick={() => setBoat(href)}
                            className={clsx(
                                href === boat ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                tabIdx === 0 ? 'rounded-l-lg' : '',
                                tabIdx === boats.length - 1 ? 'rounded-r-lg' : '',
                                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
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
        { label: 'Cruising Speed', content: `${cruising} knots (${(cruising * 1.15).toFixed(1)} mph)`},
        { label: 'Max Speed', content: `${max} knots (${(max * 1.15).toFixed(1)} mph)`},
    ]

    return (
        <div className="bg-white border shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Specifications</h3>
                {/*<p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>*/}
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    {specs.map(({label, content}) => (
                        <div className="py-1 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">{label}</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{content}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}

function BoatDetails({boat}){
    const {
        header,
        description,
        photos,
        years: {
            start,
            end
        }
    } = boat
    return (
        <div className="bg-white overflow-hidden mt-4">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

                {/*Gray rectangle behind photo*/}
                <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />

                {/*Headers*/}
                <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                    <div>
                        <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">{header}</h2>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {start} - {end}
                        </h3>
                    </div>
                </div>

                {/*Description text and photo*/}
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">

                    {/*Photo*/}
                    <div className="relative lg:row-start-1 lg:col-start-2">
                        <svg
                            className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>

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
                    <div className="mt-8 lg:mt-0">
                        {/*<div className="text-base max-w-prose mx-auto lg:max-w-none">*/}
                        {/*    <p className="text-lg text-gray-500">*/}
                        {/*        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique*/}
                        {/*        pellentesque. Blandit amet, sed aenean erat arcu morbi.*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div className="mt-5 prose prose-cyan text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                            {description.map(paragraph => (
                                <p>
                                    {paragraph}
                                </p>
                            ))}
                            {/*<p>*/}
                            {/*    Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet*/}
                            {/*    fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*    Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.*/}
                            {/*</p>*/}
                            {/*<ul>*/}
                            {/*    <li>Quis elit egestas venenatis mattis dignissim.</li>*/}
                            {/*    <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>*/}
                            {/*    <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>*/}
                            {/*</ul>*/}
                            {/*<p>*/}
                            {/*    Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet*/}
                            {/*    velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus*/}
                            {/*    egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.*/}
                            {/*</p>*/}
                            {/*<h3>How we helped</h3>*/}
                            {/*<p>*/}
                            {/*    Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.*/}
                            {/*    Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,*/}
                            {/*    lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique*/}
                            {/*    pellentesque. Blandit amet, sed aenean erat arcu morbi.*/}
                            {/*</p>*/}
                        </div>
                    </div>

                </div>

            </div>
            <div className={`max-w-5xl mx-auto my-4`}>
                <BoatSpecCard boat={boat} />
            </div>
        </div>
    )
}

const Boat = () => {
    const router = useRouter()
    const [boat, setBoat] = useState(router.query.boat ? router.query.boat : boats[0].href)
    return (
        <>
            <Head>
                <title>SV Hoptoad | Boat</title>
            </Head>
            <BoatSelector boat={boat} setBoat={setBoat} />
            <BoatDetails boat={boats.find(({ href }) => href === boat)} />
        </>
    );
}

export default Boat;