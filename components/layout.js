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
        <main className={clsx(
            'mx-4',
            `bg-gradient-to-br from-themeLightBlue to-themeLightGreen`,
            'flex-grow text-center h-auto',
            'rounded-xl',
        )}>
            {children}
        </main>
        <Footer/>
        </body>
    );
}

export default Layout;