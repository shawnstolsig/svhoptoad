import clsx from 'clsx';

import Navbar from './navbar';
import Footer from './footer';

const Layout = ({children}) => {
    return (
        <body className={clsx(
            `flex flex-col min-h-screen`,
            `bg-themeDarkBlue`
        )}>
        <Navbar/>
        <main className={'flex-grow text-center'}>
            {children}
        </main>
        <Footer/>
        </body>
    );
}

export default Layout;