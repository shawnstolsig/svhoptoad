import clsx from 'clsx';

import Navbar from './navbar';
import Footer from './footer';

const Layout = ({children}) => {
    return (
        <body className={clsx(
        `flex flex-col min-h-screen`,
        `bg-blue-900`   //`bg-themeDarkBlue`
        )}>
            <Navbar/>
            <main className={clsx(
                'mx-4',
                `bg-blue-200`,   // `bg-themeLightBlue`,
                'flex-grow text-center h-auto',
                'rounded-xl shadow-xl',
            )}>
            {children}
            </main>
            <Footer/>
        </body>
    );
}

export default Layout;