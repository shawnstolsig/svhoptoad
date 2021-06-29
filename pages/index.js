import Head from 'next/head'
import Image from 'next/image'

import logo from '../public/world-with-text-logo.svg'
import instagramLogo from '../public/instagram.svg'

export default function Home() {
    return (
        <>

            <Head>
                <title>SV Hoptoad | Home</title>
            </Head>

            <div className={'flex w-screen h-screen justify-center items-center flex-col bg-gradient-to-bl from-gray-300 via-cyan-200 to-gray-400'}>
                <Image src={logo} height={200} width={200} />
                <h5 className={'text-gray-500 text-lg my-2'}>coming soon</h5>
                <a href={`https://www.instagram.com/svhoptoad/`}>
                    <Image src={instagramLogo} height={24} width={24} />
                </a>
            </div>

        </>
    );
}