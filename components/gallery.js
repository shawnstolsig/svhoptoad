import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import {
    XIcon,
    CheckIcon,
    ChevronRightIcon,
    ChevronLeftIcon
} from "@heroicons/react/outline";
import { Fragment, useState } from 'react'

import * as ga from '../lib/google-analytics'

function Gallery({files, className}){
    const [isOpen, setIsOpen] = useState(false)
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)

    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = (index) => {
        setSelectedPhotoIndex(index)
        setIsOpen(true)
        ga.event({
            action: "photo-viewed",
            params : {
                source: files[index].source
            }
        })
    }

    const nextPhoto = () => {
        selectedPhotoIndex === files.length-1 ? setSelectedPhotoIndex(0) : setSelectedPhotoIndex(selectedPhotoIndex + 1)
        ga.event({
            action: "next-photo-viewed",
            params : {
                source: files[selectedPhotoIndex].source
            }
        })
    }

    const prevPhoto = () => {
        selectedPhotoIndex === 0 ? setSelectedPhotoIndex(files.length-1) : setSelectedPhotoIndex(selectedPhotoIndex - 1)
        ga.event({
            action: "prev-photo-viewed",
            params : {
                source: files[selectedPhotoIndex].source
            }
        })
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
                        <button onClick={prevPhoto} className={'absolute button h-10 w-10 z-50 top-1/2 left-4'}>
                            <ChevronLeftIcon className={`h-5 w-5`} />
                        </button>
                        <button onClick={nextPhoto} className={'absolute button h-10 w-10 z-50 top-1/2 right-4'}>
                            <ChevronRightIcon className={`h-5 w-5`} />
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