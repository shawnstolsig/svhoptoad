import Head from 'next/head';
import Image from "next/image";

import {
    intro
} from '../content/home'

export default function Home() {
    return (
        <>

            <Head>
                <title>SV Hoptoad | Home</title>
            </Head>

            <div className={`page flex flex-col items-center`}>
                <div className={`flex justify-center items-center`}>
                    <Image
                        src={intro.sonnyAndMargiePhoto}
                        layout={`intrinsic`}
                        width={430}
                        height={284}
                        className={`rounded text-center shadow-xl`}
                    />
                    <div className={`p-4 w-80`}>
                        <p>
                            {intro.para1}
                        </p>
                        <br/>
                        <p>
                            {intro.para2}
                        </p>
                    </div>
                </div>
                <blockquote className={`text-2xl italic font-light bg-cyan-100 rounded p-4 w-2/3 text-center shadow-lg`}>
                    {intro.title}
                </blockquote>
            </div>

        </>
    );
}