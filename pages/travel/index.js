import Head from "next/head";
import Image from "next/image";

import {
    ExternalLinkIcon,
} from '@heroicons/react/outline';

import {
    aboardHoptoadArticles
} from "../../content/travel";

const Travel = () => {
    return (
        <>
            <Head>
                <title>SV Hoptoad | Travel</title>
            </Head>

            {/*Aboard Hoptoad Section*/}
            <section className={`card m-4 md:w-10/12 md:m-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-center`}>

                <div className={`col-span-2 m-2`}>
                    <h1 className={`text-3xl font-cooperBlack`}>
                        {aboardHoptoadArticles.title}
                    </h1>

                    <p>
                        {aboardHoptoadArticles.description}
                    </p>

                    <div className={`flex flex-wrap justify-center`}>
                        {aboardHoptoadArticles.articles.map(({title, path}, index) => (
                            <a href={path} target={`_blank`} className={`m-2 w-full md:w-60`} key={index}>
                                <button className={`button w-full`}>
                                    <p>{title}</p>
                                    <ExternalLinkIcon className={'w-5 h-5 text-gray-500 ml-2'}/>
                                </button>
                            </a>
                        ))}
                    </div>

                </div>

                <div className={`relative hidden md:block`}>
                    <Image src={aboardHoptoadArticles.previewImage} layout={'fill'} objectFit={`cover`}/>
                </div>

            </section>


        </>
    );
};

export default Travel;