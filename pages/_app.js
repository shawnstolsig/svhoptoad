import '../styles/index.css'

// import Layout from '../components/layout'
// function MyApp({Component, pageProps}) {
//     return (
//         <Layout>
//             <Component {...pageProps} />
//         </Layout>
//     )
// }

import ComingSoon from './comingSoon'                // uncomment below for 'Coming Soon' screen
function MyApp({Component, pageProps}) {
    return (
        <ComingSoon />
    )
}

export default MyApp;