import '../styles/index.css'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import * as ga from '../lib/google-analytics'
import Layout from '../components/layout'
import VisitedContext from '../context/visted'

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

    // check localStorage to see if user has visited before
    const [visited, setVisited] = useState()

    useEffect(() => {
        if (typeof window !== "undefined") {  // this is needed to use localStorage with Next.js
            setVisited(window.localStorage.getItem('visited'))
            window.localStorage.setItem('visited', '1')
        }
    },[])

    function hideMap(){
        setVisited(null)
    }
    function showMap(){
        setVisited(null)
    }

    return (
        <VisitedContext.Provider value={{visited,hideMap,showMap}}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </VisitedContext.Provider>
    )
}

export default MyApp;