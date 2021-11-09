import Head from "next/head";
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react'
import { useState } from 'react'
import {
    XIcon,
} from '@heroicons/react/outline';

import {
    aboardHoptoadArticles,
    trips,
    circumnavigationMap
} from "../../content/travel";
import {
    TripMap
} from '../../components/map'

function AboardHoptoadArticle({title,imageSource,pageCount}) {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)

    return (
        <>
            <button className={`button m-2 w-full md:w-60`} onClick={openModal}>
                <p>{title}</p>
            </button>

            <Transition
                show={isOpen}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Dialog
                    as={`div`}
                    className={`fixed inset-0 overflow-y-auto`}
                    onClose={closeModal}
                >
                    <div className="text-center flex flex-col">

                        <Dialog.Overlay className={`fixed inset-0 z-10 bg-black opacity-50`}/>

                        <div className={`m-auto w-full sm:w-5/6 lg:w-4/6 sm:h-4/6 bg-cyan-200 rounded p-4 z-20 sm:mt-4`}>
                            <div className={`flex justify-between items-center mb-4`}>
                                <div className={`flex items-end`}>
                                    <Dialog.Title className={`hidden`}>Aboard Hoptoad</Dialog.Title>
                                    <Dialog.Description className={`text-xl font-cooperBlack`}>{title}</Dialog.Description>
                                </div>
                                <button onClick={closeModal} className={'button h-10 w-10'}>
                                    <XIcon className={`h-5 w-5`} />
                                </button>
                            </div>
                            <div className={`text-center`}>
                                <Image src={imageSource} layout={'intrinsic'} width={1200} height={pageCount*1584}/>
                            </div>
                        </div>

                    </div>
                </Dialog>
            </Transition>

        </>
    )
}

function AboardHoptoadCard(){
    return (
        <section className={`card m-4 md:w-10/12 md:m-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-center`}>

            <div className={`col-span-2 m-2`}>
                <h1 className={`text-3xl 2xl:font-bold`}>
                    {aboardHoptoadArticles.title}
                </h1>

                <p>
                    {aboardHoptoadArticles.description}
                </p>

                <div className={`flex flex-wrap justify-center`}>
                    {aboardHoptoadArticles.articles.map(({title, path, pages}, index) => (
                        <AboardHoptoadArticle title={title} imageSource={path} pageCount={pages} key={index} />
                    ))}
                </div>

            </div>

            <div className={`relative hidden md:block`}>
                <Image src={aboardHoptoadArticles.previewImage} layout={'fill'} objectFit={`cover`}/>
            </div>

        </section>
    )
}

function CountryList() {
    return (
        <nav className="h-full overflow-y-auto" aria-label="Directory">
            {Object.keys(trips.previousTrip.countries).map((year) => (
                <div key={year} className="relative">
                    <div className="z-10 sticky top-0 border-t border-b border-cyan-200 bg-cyan-100 px-6 py-1 text-sm font-medium text-gray-500">
                        <h3>{year}</h3>
                    </div>
                    <ul role="list" className="relative z-0 divide-y divide-gray-200">
                        {trips.previousTrip.countries[year].map(({name,imageUrl}) => (
                            <li key={name} className="bg-white">
                                <div className="relative px-6 py-3 flex items-center space-x-3 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                    <div className="h-10 w-10 relative" >
                                        <Image src={imageUrl} className={''} layout={'fill'} objectFit={'contain'}/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <a href="#" className="focus:outline-none">
                                            {/* Extend touch target to entire panel */}
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            <p className="text-sm font-medium text-gray-900">{name}</p>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    )
}

const Travel = () => {
    return (
        <>
            <Head>
                <title>SV Hoptoad | Travel</title>
            </Head>

            <div className="relative lg:py-10 bg-white overflow-hidden mt-3">

                {/*Gray background graphics*/}
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                    <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                        <svg
                            className="absolute top-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                        </svg>
                        <svg
                            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                        </svg>
                        <svg
                            className="absolute bottom-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                        </svg>
                    </div>
                </div>

                <div className="relative px-4 sm:px-6 lg:px-8">

                    {/*Current trip content*/}
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <span className="block text-base text-center text-cyan-600 font-semibold tracking-wide uppercase">
                                {trips.currentTrip.subtitle}
                            </span>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                {trips.currentTrip.title}
                            </span>
                        </h1>
                    </div>
                    <div className="mt-6 prose prose-cyan prose-lg text-gray-500 mx-auto">
                        <p>{trips.currentTrip.paragraphs[0]}</p>
                        <p>{trips.currentTrip.paragraphs[1]}</p>
                        <p>{trips.currentTrip.paragraphs[2]}</p>
                        <p>{trips.currentTrip.paragraphs[3]}</p>
                        <p>{trips.currentTrip.paragraphs[4]}</p>
                        <h3>The Plan</h3>
                        <p>{trips.currentTrip.paragraphs[5]}</p>
                        <p>{trips.currentTrip.paragraphs[6]}</p>
                    </div>

                    {/*Previous trip content*/}
                    <div className="text-lg max-w-prose mx-auto mt-4">
                        <h1>
                            <span className="block text-base text-center text-cyan-600 font-semibold tracking-wide uppercase">
                                {trips.previousTrip.subtitle}
                            </span>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                {trips.previousTrip.title}
                            </span>
                        </h1>
                    </div>
                    <div className="mt-6 prose prose-cyan prose-lg text-gray-500 mx-auto">
                        <figure>
                            <TripMap
                                initLng={circumnavigationMap.initLng}
                                initLat={circumnavigationMap.initLat}
                                initZoom={circumnavigationMap.initZoom}
                                route={circumnavigationMap.route}
                            />
                            <figcaption>{trips.mapCaption}</figcaption>
                        </figure>
                        <p>{trips.previousTrip.paragraphs[0]}</p>
                        <p>{trips.previousTrip.paragraphs[1]}</p>
                        <p>{trips.previousTrip.paragraphs[2]}</p>
                    </div>
                    <h5 className={'mx-auto text-center text-gray-500 mt-2'}>Country List</h5>
                    <div className={'w-80 h-80 mx-auto rounded border overflow-y-scroll shadow'}>
                        <CountryList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Travel;