import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import clsx from "clsx";

import Border from "./border";
import logo from '../public/pippi.svg'

const StyledLink = ({text, path}) => {
    const router = useRouter();

    return (
        <Link href={path}>
            <a className={clsx(
                `p-2 text-xl font-bold text-black`,
                router.pathname === path && 'border-b-2 border-themeOrange',
            )}>{text}</a>
        </Link>
    );
}

const Navbar = () => {
    const links = [
        {text: 'Home', path: '/'},
        {text: 'Boat', path: '/boat'},
        {text: 'Travel', path: '/travel'},
        {text: 'Blog', path: '/blog'},
        {text: 'Contact', path: '/contact'},
    ];

    return (
        <Border sides={'b'}>
            <nav className={`flex justify-between items-center py-3 px-5 shadow-lg bg-gradient-to-br from-cyan-300 to-cyan-200`}>
                <div className={`flex items-center`}>
                    <Image src={logo} height={60} width={90}/>
                    <h1 className={`font-cooperBlack text-4xl ml-2 invisible md:visible`}>SV Hoptoad</h1>
                </div>
                <div className={`flex justify-between items-center`}>
                    {links.map(({text, path}, i) => (
                        <StyledLink text={text} path={path} key={i}/>
                    ))}
                </div>
            </nav>
        </Border>
    );
}

export default Navbar;