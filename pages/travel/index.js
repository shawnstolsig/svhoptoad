import Head from "next/head";
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {
    XIcon,
} from '@heroicons/react/outline';

import {
    aboardHoptoadArticles
} from "../../content/travel";

function AboardHoptoadArticle({title,imageSource}) {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)

    return (
        <>
            <button className={`button m-2 w-full md:w-60`} onClick={openModal}>
                <p>{title}</p>
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen min-w-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        {/*<span*/}
                        {/*    className="inline-block h-screen align-middle"*/}
                        {/*    aria-hidden="true"*/}
                        {/*>*/}
                        {/*  &#8203;*/}
                        {/*</span>*/}

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="relative w-full min-h-screen p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl overflow-auto">
                               <div className={`flex justify-between`}>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <button onClick={closeModal} className={'bg-gray-200'}>
                                        close
                                        {/*<XIcon className={`w-5 h-5`} />*/}
                                    </button>
                               </div>
                                <Image src={imageSource} layout={'fill'} objectFit={'fill'} />
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}

const Travel = () => {
    return (
        <>
            <Head>
                <title>SV Hoptoad | Travel</title>
            </Head>

            {/*Aboard Hoptoad Section*/}
            <section className={`card m-4 md:w-10/12 md:m-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-center`}>

                <div className={`col-span-2 m-2`}>
                    <h1 className={`text-3xl font-cooperBlack`}>
                        {aboardHoptoadArticles.title}
                    </h1>

                    <p>
                        {aboardHoptoadArticles.description}
                    </p>

                    <div className={`flex flex-wrap justify-center`}>
                        {aboardHoptoadArticles.articles.map(({title, path}, index) => (
                            <AboardHoptoadArticle title={title} imageSource={path} key={index} />
                        ))}
                    </div>

                </div>

                <div className={`relative hidden md:block`}>
                    <Image src={aboardHoptoadArticles.previewImage} layout={'fill'} objectFit={`cover`}/>
                </div>

            </section>


        </>
    );
};

export default Travel;