import Head from "next/head";
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react'
import { useState } from 'react'
import {
    XIcon,
} from '@heroicons/react/outline';

import {
    aboardHoptoadArticles
} from "../../content/travel";

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

                        <div className={`m-auto w-full sm:w-5/6 lg:w-4/6 sm:h-4/6 bg-cyan-300 rounded p-4 z-20 sm:mt-4`}>
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
                        {aboardHoptoadArticles.articles.map(({title, path, pages}, index) => (
                            <AboardHoptoadArticle title={title} imageSource={path} pageCount={pages} key={index} />
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