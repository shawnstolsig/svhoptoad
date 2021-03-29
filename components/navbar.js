import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

import logo from '../public/pippi.svg'

const StyledLink = ({text, path}) => {
    const router = useRouter();

    const color = router.pathname === path ? 'text-red-800' : 'text-blue-800';

    return (
        <Link href={path}>
            <a className={`ml-2 ${color}`}>{text}</a>
        </Link>
    );
}

const Navbar = () => {
    const links = [
        { text: 'Home', path: '/'},
        { text: 'Boat', path: '/boat'},
        { text: 'Travel', path: '/travel'},
        { text: 'Blog', path: '/blog'},
    ];

    return (
        <nav className={'flex justify-between items-center m-3'}>
            <div className={'flex items-center'}>
                <Image src={logo} height={60} width={90}/>
                <h1 className={'cooper-black text-4xl ml-2 invisible md:visible'}>SV Hoptoad</h1>
            </div>
            <div>
                {links.map(({text, path},i) => (
                    <StyledLink text={text} path={path} key={i}/>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;