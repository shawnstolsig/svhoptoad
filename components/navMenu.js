import Link from 'next/link';
import clsx from "clsx";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import {MenuIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";

export default function NavMenu({links}) {
    const router = useRouter();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
                    <MenuIcon className={`h-6 w-6`} />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >

                <Menu.Items
                    className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <div className="p-1">

                        {links.map(({text, path, icon: Icon}, index) => (
                            <Link href={path} key={index}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={clsx(
                                                `group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900 focus:outline-none`,
                                                active && 'bg-cyan-100',
                                                index + 1 !== links.length && `mb-1`,
                                                `disabled:cursor-default disabled:bg-cyan-900 disabled:text-gray-100`
                                            )}
                                            disabled={router.pathname === path}
                                        >
                                            <Icon className={`w-5 h-5 mr-2`} aria-hidden="true"/>
                                            {text}
                                        </button>
                                    )}
                                </Menu.Item>

                            </Link>
                        ))}

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
