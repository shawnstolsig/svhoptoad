import clsx from "clsx";

import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/pippi.svg'

export default function Home() {
    return (
        <>

            <Head>
                <title>SV Hoptoad | Home</title>
            </Head>

            <div className={clsx(
                'flex w-screen h-screen justify-center items-center flex-col',
                'bg-gradient-to-bl from-gray-300 via-blue-300 to-gray-400',
            )}>
                <Image src={logo} height={100} width={200} />
                <h3 className={'text-3xl font-cooperBlack'}>svhoptoad.com</h3>
                <h5 className={'text-gray-500 text-lg'}>coming soon</h5>
            </div>

        </>
    );
}