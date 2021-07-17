import Head from "next/head";
import Card from "../../components/card";

const Travel = () => {
    const aboardHoptoads = [
        {title: 'September 5, 1997', path: 'https://storage.cloud.google.com/svhoptoad-media/aboard-hoptoad/5-sep-1997.pdf'},
        {title: 'November 30, 1997', path: 'https://storage.cloud.google.com/svhoptoad-media/aboard-hoptoad/30-nov-1997.pdf'},
        {title: 'December 8, 1998', path: 'https://storage.cloud.google.com/svhoptoad-media/aboard-hoptoad/8-dec-1998.pdf'},
        {title: 'July 15, 1999', path: 'https://storage.cloud.google.com/svhoptoad-media/aboard-hoptoad/15-jul-1999.pdf'},
        {title: 'December 6, 1999', path: 'https://storage.cloud.google.com/svhoptoad-media/aboard-hoptoad/6-dec-1999.pdf'},
    ]
    return (
        <>
            <Head>
                <title>SV Hoptoad | Travel</title>
            </Head>

            {/*Aboard Hoptoad Section*/}
            <section className={`flex flex-col items-center border-2 p-2 w-10/12 rounded m-auto`}>
                <h1 className={`text-3xl font-cooperBlack`}>
                    Aboard Hoptoad
                </h1>

                <p className={``}>
                    A series of newsletters written by our kids (Jeff and Shawn) during our circumnavigation, between ages 10 and 15.
                </p>

                <div className={`flex flex-wrap justify-center`}>
                    {aboardHoptoads.map(({title, path}, index) => (
                        <Card key={index} classes={`w-full md:w-60`}>
                            <Card.Title>
                                {title}
                            </Card.Title>
                            <Card.Content>
                                <a
                                    href={path}
                                    target={`_blank`}
                                >
                                    Read...
                                </a>
                            </Card.Content>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Travel;