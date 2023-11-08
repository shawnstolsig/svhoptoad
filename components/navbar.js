import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import clsx from "clsx";
import {
    HomeIcon,
    GlobeIcon,
    IdentificationIcon,
    NewspaperIcon,
    FireIcon,
    PhotoIcon,
    AtSymbolIcon
} from '@heroicons/react/outline';

import Border from "./border";
import NavMenu from './navMenu';
import logo from '../public/world-logo.svg';
import logoWithText from '../public/world-with-text-logo.svg';

const StyledLink = ({text, path, icon: Icon}) => {
    const router = useRouter();

    return (
        <div className={clsx(
            'flex items-center mx-2.5 nav-hover',
            router.pathname === path && 'border-b-2 border-cyan-900 scale-110'
        )}>
            <Link href={path}>
                <Icon className={'h-4 w-4 cursor-pointer'}/>
            </Link>
            <Link href={path}>
                <a className={`ml-0.5 text-lg font-bold text-black`}>{text}</a>
            </Link>
        </div>
    );
}

const Navbar = () => {
    const links = [
        {text: 'Home', path: '/', icon: HomeIcon},
        {text: 'Blog', path: '/blog', icon: NewspaperIcon},
        // {text: 'Gallery', path: '/gallery', icon: PhotoIcon},
        {text: 'Recipes', path: '/recipes', icon: FireIcon},
        {text: 'Boat', path: '/boat', icon: IdentificationIcon},
        {text: 'Travel', path: '/travel', icon: GlobeIcon},
        {text: 'Contact', path: '/contact', icon: AtSymbolIcon},
    ];

    return (
        <Border sides={'b'} >
            <nav className={`py-3 px-2 shadow-lg bg-gradient-to-br from-cyan-200 to-cyan-100`}>

                {/* Small screen sizes */}
                <div className={`md:hidden`} >
                    <div className={'flex items-center justify-between'}>
                        <Image src={logoWithText} height={60} width={90}/>
                        <NavMenu links={links} />
                    </div>
                </div>

                {/*Medium and up screen sizes*/}
                <div className={`hidden md:flex items-center justify-between`}>
                    <div className={`flex items-center`}>
                        <Image src={logo} height={60} width={90}/>
                        <h1 className={`font-cooperBlack text-3xl`}>SV Hoptoad</h1>
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
