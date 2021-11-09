import '../styles/index.css'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import * as ga from '../lib/google-analytics'
import Layout from '../components/layout'
import VisitedContext from '../context/visted'
import BlogPostContext from "../context/blog";

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

    // pull stored data from local storage
    const [visited, setVisited] = useState()
    const [blogPosts, setBlogPosts] = useState([])

    // load info from local storage upon initial render
    useEffect(() => {
        if (typeof window !== "undefined") {  // this is needed to use localStorage with Next.js

            // check to see if site has been visited before (for home page map)
            setVisited(window.localStorage.getItem('visited'))
            window.localStorage.setItem('visited', '1')

            // pull info about seen/favorited blog posts
            setBlogPosts(JSON.parse(window.localStorage.getItem('blogPosts')))
        }
    },[])

    // some helper functions for managing context
    function hideMap(){
        setVisited(null)
    }
    function showMap(){
        setVisited(true)
    }

    // PICKUP HERE....GET READ/UNREAD POSTS STORING CORRECTLY TO LOCAL STORAGE
    function togglePostsRead(postIds){

        // update state for blog post status
        postIds.forEach(post => {
            // something here....add unread blog posts to lists, remove read blog posts
        })

        // update localstorage
        if (typeof window !== "undefined") {
            window.localStorage.setItem('blogPosts', [])
        }
    }

    return (
        <BlogPostContext.Provider value={{blogPosts, togglePostsRead }}>
            <VisitedContext.Provider value={{visited,hideMap,showMap}}>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </VisitedContext.Provider>
        </BlogPostContext.Provider>
    )
}

export default MyApp;