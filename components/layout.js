import clsx from 'clsx';

import Navbar from './navbar';
import Footer from './footer';

const Layout = ({children}) => {
    return (
        <body className={`flex flex-col min-h-screen`}>
            <Navbar />
            <main className={'flex-grow h-auto m-4'}>
                {children}
            </main>
            <Footer />
        </body>
    );
}

export default Layout;