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
            <div className={`grid grid-cols-5 gap-4`}>
                {aboardHoptoads.map(({title, path}, index) => (
                    <Card key={index}>
                        <Card.Title>
                            {title}
                        </Card.Title>
                        <Card.Content>
                            <a
                                href={path}
                            >
                                Read now...
                            </a>
                        </Card.Content>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Travel;