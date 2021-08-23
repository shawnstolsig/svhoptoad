import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon, CheckIcon } from "@heroicons/react/outline";
import { Fragment, useState } from 'react'

function Gallery({files, className}){
    const [isOpen, setIsOpen] = useState(false)
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(1)

    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = (index) => {
        setSelectedPhotoIndex(index)
        setIsOpen(true)
    }

    return (
        <>
            {/*Gallery view*/}
            <ul role="list" className={`grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ${className}`}>
                {files.map(({title, subtitle, source },index) => (
                    <li key={source} className="relative">
                        <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-cyan-500 overflow-hidden">
                            <img src={source} alt="" className="object-contain pointer-events-none group-hover:opacity-75" />
                            <button type="button" className="absolute inset-0 focus:outline-none" onClick={() => openModal(index)}>
                                <span className="sr-only">View details for {title}</span>
                            </button>
                        </div>
                        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{title}</p>
                        {subtitle && <p className="block text-sm font-medium text-gray-500 pointer-events-none">{subtitle}</p>}
                    </li>
                ))}
            </ul>

            {/*Image overlay*/}
            {/*<Transition*/}
            {/*    show={isOpen}*/}
            {/*    enter="transition duration-100 ease-out"*/}
            {/*    enterFrom="transform scale-95 opacity-0"*/}
            {/*    enterTo="transform scale-100 opacity-100"*/}
            {/*    leave="transition duration-75 ease-out"*/}
            {/*    leaveFrom="transform scale-100 opacity-100"*/}
            {/*    leaveTo="transform scale-95 opacity-0"*/}
            {/*>*/}
            {/*    <Dialog*/}
            {/*        as={`div`}*/}
            {/*        className={`fixed inset-0 overflow-y-auto`}*/}
            {/*        onClose={closeModal}*/}
            {/*    >*/}
            {/*        <div className="text-center flex flex-col">*/}

            {/*            <Dialog.Overlay className={`fixed inset-0 z-10 bg-black opacity-50`}/>*/}

            {/*            <div className={`m-auto w-full sm:w-5/6 lg:w-4/6 sm:h-4/6 bg-cyan-200 rounded p-4 z-20 sm:mt-4`}>*/}
            {/*                <div className={`flex justify-between items-center mb-4`}>*/}
            {/*                    <div className={`flex items-end`}>*/}
            {/*                        <Dialog.Title className={`hidden`}>{files[selectedPhotoIndex].title}</Dialog.Title>*/}
            {/*                        <Dialog.Description className={`text-xl font-cooperBlack`}>{files[selectedPhotoIndex].subtitle}</Dialog.Description>*/}
            {/*                    </div>*/}
            {/*                    <button onClick={closeModal} className={'button h-10 w-10'}>*/}
            {/*                        <XIcon className={`h-5 w-5`} />*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*                <div className={`text-center`}>*/}
            {/*                    <Image src={files[selectedPhotoIndex].source} layout={'fill'}}/>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </Dialog>*/}
            {/*</Transition>*/}
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" auto-reopen="true" className="fixed z-10 inset-0 overflow-y-auto" onClose={closeModal}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                        {/*Overlay Dimmer*/}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>

                        <button onClick={closeModal} className={'absolute button h-10 w-10 z-50 top-4 right-4'}>
                            <XIcon className={`h-5 w-5`} />
                        </button>

                        {/*Dialog Content*/}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div>
                                <Image src={files[selectedPhotoIndex].source} layout={'fill'} objectFit={'scale-down'}/>
                            </div>

                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default Gallery