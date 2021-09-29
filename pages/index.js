import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

import { intro } from '../content/home'
import PredictWindMap from "../components/predictWindMap"
import VisitedContext from "../context/visted";

export default function Home() {

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
                                    <span className="block">{intro.title1}</span>{' '}
                                    <span className="block text-cyan-600 ">{intro.title2}</span>
                                </h1>
                                <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                                    {intro.para1}
                                </p>
                                <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                                    {intro.para2}
                                </p>
                                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link href="/boat">
                                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10">
                                                Boat Info
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <Link href="/travel">
                                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10">
                                                Travel Info
                                            </a>
                                        </Link>
                                    </div>
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
