import '../styles/index.css'
import { useEffect} from "react";
import { useRouter} from "next/router";

import * as ga from '../lib/google-analytics'
import Layout from '../components/layout'

function MyApp({Component, pageProps}) {

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}

// import ComingSoon from './comingSoon'                // uncomment below for 'Coming Soon' screen
// function MyApp({Component, pageProps}) {
//     return (
//         <ComingSoon />
//     )
// }

export default MyApp;