import Head from 'next/head'
import BaseLayout from '../constants/styles/base-layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>W.WANG CODE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BaseLayout />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
