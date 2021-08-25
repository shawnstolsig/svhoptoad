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

} from "../../content/travel";
import Map from '../../components/map'

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

/* This example requires Tailwind CSS v2.0+ */
const directory = {
    A: [
        {
            id: 1,
            name: 'Leslie Abbott',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Hector Adams',
            role: 'VP, Marketing',
            imageUrl:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Blake Alexander',
            role: 'Account Coordinator',
            imageUrl:
                'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Fabricio Andrews',
            role: 'Senior Art Director',
            imageUrl:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
    B: [
        {
            id: 5,
            name: 'Angela Beaver',
            role: 'Chief Strategy Officer',
            imageUrl:
                'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 6,
            name: 'Yvette Blanchard',
            role: 'Studio Artist',
            imageUrl:
                'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 7,
            name: 'Lawrence Brooks',
            role: 'Content Specialist',
            imageUrl:
                'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
    C: [
        {
            id: 8,
            name: 'Jeffrey Clark',
            role: 'Senior Art Director',
            imageUrl:
                'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 9,
            name: 'Kathryn Cooper',
            role: 'Associate Creative Director',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
    E: [
        {
            id: 10,
            name: 'Alicia Edwards',
            role: 'Junior Copywriter',
            imageUrl:
                'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 11,
            name: 'Benjamin Emerson',
            role: 'Director, Print Operations',
            imageUrl:
                'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 12,
            name: 'Jillian Erics',
            role: 'Designer',
            imageUrl:
                'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 13,
            name: 'Chelsea Evans',
            role: 'Human Resources Manager',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
    G: [
        {
            id: 14,
            name: 'Michael Gillard',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 15,
            name: 'Dries Giuessepe',
            role: 'Manager, Business Relations',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
    M: [
        {
            id: 16,
            name: 'Jenny Harrison',
            role: 'Studio Artist',
            imageUrl:
                'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 17,
            name: 'Lindsay Hatley',
            role: 'Front-end Developer',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 18,
            name: 'Anna Hill',
            role: 'Partner, Creative',
            imageUrl:
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
    S: [
        {
            id: 19,
            name: 'Courtney Samuels',
            role: 'Designer',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 20,
            name: 'Tom Simpson',
            role: 'Director, Product Development',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
    T: [
        {
            id: 21,
            name: 'Floyd Thompson',
            role: 'Principal Designer',
            imageUrl:
                'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 22,
            name: 'Leonard Timmons',
            role: 'Senior Designer',
            imageUrl:
                'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 23,
            name: 'Whitney Trudeau',
            role: 'Copywriter',
            imageUrl:
                'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
    W: [
        {
            id: 24,
            name: 'Kristin Watson',
            role: 'VP, Human Resources',
            imageUrl:
                'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 25,
            name: 'Emily Wilson',
            role: 'VP, User Experience',
            imageUrl:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
    Y: [
        {
            id: 26,
            name: 'Emma Young',
            role: 'Senior Front-end Developer',
            imageUrl:
                'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
}

function CountryList() {
    return (
        <nav className="h-full overflow-y-auto" aria-label="Directory">
            {Object.keys(trips.previousTrip.countries).map((year) => (
                <div key={year} className="relative">
                    <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                        <h3>{year}</h3>
                    </div>
                    <ul role="list" className="relative z-0 divide-y divide-gray-200">
                        {trips.previousTrip.countries[year].map((country) => (
                            <li key={country} className="bg-white">
                                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                    {/*<div className="flex-shrink-0">*/}
                                    {/*    <img className="h-10 w-10 rounded-full" src={} alt="" />*/}
                                    {/*</div>*/}
                                    <div className="flex-1 min-w-0">
                                        <a href="#" className="focus:outline-none">
                                            {/* Extend touch target to entire panel */}
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            <p className="text-sm font-medium text-gray-900">{country}</p>
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

            <div className="relative py-16 bg-white overflow-hidden">

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
                            <Map />
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