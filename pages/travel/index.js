import Head from "next/head";
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react'
import { useState } from 'react'
import {
    XIcon,
} from '@heroicons/react/outline';

import {
    aboardHoptoadArticles,
    tripDetails
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

const Travel = () => {
    return (
        <>
            <Head>
                <title>SV Hoptoad | Travel</title>
            </Head>

            <div className="relative py-16 bg-white overflow-hidden">
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
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
            <span className="block text-base text-center text-cyan-600 font-semibold tracking-wide uppercase">
              Introducing
            </span>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              JavaScript for Beginners
            </span>
                        </h1>
                        <p className="mt-8 text-xl text-gray-500 leading-8">
                            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
                            egestas fringilla sapien.
                        </p>
                    </div>
                    <div className="mt-6 prose prose-cyan prose-lg text-gray-500 mx-auto">
                        <p>
                            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
                            Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
                            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
                            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
                        </p>
                        <ul role="list">
                            <li>Quis elit egestas venenatis mattis dignissim.</li>
                            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                        </ul>
                        <p>
                            Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
                            porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
                            purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
                        </p>
                        <h2>From beginner to expert in 30 days</h2>
                        <p>
                            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
                            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                            ipsum eu a sed convallis diam.
                        </p>
                        <blockquote>
                            <p>
                                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                                pellentesque. Blandit amet, sed aenean erat arcu morbi.
                            </p>
                        </blockquote>
                        <p>
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                        </p>
                        <figure>
                            {/*<img*/}
                            {/*    className="w-full rounded-lg"*/}
                            {/*    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"*/}
                            {/*    alt=""*/}
                            {/*    width={1310}*/}
                            {/*    height={873}*/}
                            {/*/>*/}
                            <Map />
                            <figcaption>{tripDetails.mapCaption}</figcaption>
                        </figure>
                        <h2>Everything you need to get up and running</h2>
                        <p>
                            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
                            volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
                            non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                            congue erat ac. Cras fermentum convallis quam.
                        </p>
                        <p>
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                        </p>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Travel;