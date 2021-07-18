import Navbar from './navbar';
import Footer from './footer';

const Layout = ({children}) => {
    return (
        <body className={`flex flex-col min-h-screen`}>
            <Navbar />
            <main className={'flex-grow'}>
                {children}
            </main>
            <Footer />
        </body>
    );
}

export default Layout;