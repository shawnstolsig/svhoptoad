import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>SV Hoptoad</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={'w-screen h-screen flex justify-center flex-col'}>
                <div className="flex justify-center items-center">
                    <h1>SV Hoptoad</h1>
                </div>
                <div className="flex justify-center items-center">
                    <h5>(under construction)</h5>
                </div>
            </main>
            <footer>

            </footer>
        </>
    );
}