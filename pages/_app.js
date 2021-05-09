import '../styles/index.css'

// import Layout from '../components/layout'
//
// function MyApp({Component, pageProps}) {
//     return (
//         <Layout>
//             <Component {...pageProps} />
//         </Layout>
//     )
// }

function MyApp({Component, pageProps}) {
    return (
        <Component {...pageProps} />
    )
}

export default MyApp;