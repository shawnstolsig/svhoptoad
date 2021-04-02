import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import clsx from "clsx";

import logo from '../public/pippi.svg'

const StyledLink = ({text, path}) => {
    const router = useRouter();

    return (
        <Link href={path}>
            <a className={clsx(
                `p-2`,
                `cooper-black text-xl`,
                router.pathname === path && 'text-themeOrange',
                router.pathname !== path && 'text-themeDarkBlue',
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
    ];

    return (
        <nav className={clsx(
            `py-3 px-5 m-3`,
            `flex justify-between items-center`,
            `shadow-xl rounded-full`,
            `bg-gradient-to-br from-themeLightBlue to-themeLightGreen`,
        )}>
            <div className={`flex items-center`}>
                <Image src={logo} height={60} width={90}/>
                <h1 className={clsx(
                    `ml-2`,
                    `cooper-black text-4xl`,
                    `invisible md:visible`
                )}>SV Hoptoad</h1>
            </div>
            <div className={clsx(
                `flex justify-between items-center`
            )}>
                {links.map(({text, path}, i) => (
                    <StyledLink text={text} path={path} key={i}/>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;