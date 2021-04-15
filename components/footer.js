const Footer = () => {
    return (
        <footer className={'flex justify-center'}>
            <div className={'text-gray-500'}>
                Copyright © {new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer;