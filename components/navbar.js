import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import clsx from "clsx";
import {
    HomeIcon,
    GlobeIcon,
    IdentificationIcon,
    NewspaperIcon,
    AtSymbolIcon,
    MenuIcon
} from '@heroicons/react/outline';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Border from "./border";
import logo from '../public/world-logo.svg';
import logoWithText from '../public/world-with-text-logo.svg';

const StyledLink = ({text, path, icon: Icon}) => {
    const router = useRouter();

    return (
        <div className={clsx(
            'flex items-center mx-4',
            router.pathname === path && 'border-b-2 border-gray-400'
        )}>
            <Link href={path}>
                <Icon className={'h-6 w-6 cursor-pointer'}/>
            </Link>
            <Link href={path}>
                <a className={`ml-0.5 text-lg font-bold text-black`}>{text}</a>
            </Link>
        </div>
    );
}

const DropdownMenu = ({links}) => (
    <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
            <>
                <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        <MenuIcon className={`h-6 w-6`} />
                    </Menu.Button>
                </div>

                <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        static
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <div className="py-1">

                            {links.map(({text, path, icon}, i) => (
                                <StyledLink text={text} path={path} key={i} icon={icon} />
                            ))}

                            {/*<Menu.Item>*/}
                            {/*    {({ active }) => (*/}
                            {/*        <a*/}
                            {/*            href="#"*/}
                            {/*            className={classNames(*/}
                            {/*                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                            {/*                'block px-4 py-2 text-sm'*/}
                            {/*            )}*/}
                            {/*        >*/}
                            {/*            Account settings*/}
                            {/*        </a>*/}
                            {/*    )}*/}
                            {/*</Menu.Item>*/}
                            {/*<Menu.Item>*/}
                            {/*    {({ active }) => (*/}
                            {/*        <a*/}
                            {/*            href="#"*/}
                            {/*            className={classNames(*/}
                            {/*                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                            {/*                'block px-4 py-2 text-sm'*/}
                            {/*            )}*/}
                            {/*        >*/}
                            {/*            Support*/}
                            {/*        </a>*/}
                            {/*    )}*/}
                            {/*</Menu.Item>*/}
                            {/*<Menu.Item>*/}
                            {/*    {({ active }) => (*/}
                            {/*        <a*/}
                            {/*            href="#"*/}
                            {/*            className={classNames(*/}
                            {/*                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                            {/*                'block px-4 py-2 text-sm'*/}
                            {/*            )}*/}
                            {/*        >*/}
                            {/*            License*/}
                            {/*        </a>*/}
                            {/*    )}*/}
                            {/*</Menu.Item>*/}
                            {/*<form method="POST" action="#">*/}
                            {/*    <Menu.Item>*/}
                            {/*        {({ active }) => (*/}
                            {/*            <button*/}
                            {/*                type="submit"*/}
                            {/*                className={classNames(*/}
                            {/*                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                            {/*                    'block w-full text-left px-4 py-2 text-sm'*/}
                            {/*                )}*/}
                            {/*            >*/}
                            {/*                Sign out*/}
                            {/*            </button>*/}
                            {/*        )}*/}
                            {/*    </Menu.Item>*/}
                            {/*</form>*/}
                        </div>
                    </Menu.Items>
                </Transition>
            </>
        )}
    </Menu>
)

const Navbar = () => {
    const links = [
        {text: 'Home', path: '/', icon: HomeIcon},
        {text: 'Boat', path: '/boat', icon: IdentificationIcon},
        {text: 'Travel', path: '/travel', icon: GlobeIcon},
        {text: 'Blog', path: '/blog', icon: NewspaperIcon},
        {text: 'Contact', path: '/contact', icon: AtSymbolIcon},
    ];

    return (
        <Border sides={'b'}>
            <nav className={`py-3 px-5 shadow-lg bg-gradient-to-br from-cyan-300 to-cyan-200`}>

                {/* Small screen sizes */}
                <div className={`md:hidden`} >
                    <div className={'flex items-center justify-between'}>
                        <Image src={logoWithText} height={60} width={90}/>
                        <DropdownMenu links={links} />
                    </div>
                </div>

                {/*Medium and up screen sizes*/}
                <div className={`hidden md:flex items-center justify-between`}>
                    <div className={`flex items-center`}>
                        <Image src={logo} height={60} width={90}/>
                        <h1 className={`font-cooperBlack text-2xl ml-2`}>SV Hoptoad</h1>
                    </div>

                    <div className={'flex'}>
                        {links.map(({text, path, icon}, i) => (
                            <StyledLink text={text} path={path} key={i} icon={icon} />
                        ))}
                    </div>
                </div>

            </nav>
        </Border>
    );
}

export default Navbar;