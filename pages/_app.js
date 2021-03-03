import Head from 'next/head'
import { useState, useEffect } from 'react'
import * as gtag from '../components/utils/gtag'
import Router from 'next/router'

import BaseLayout from '../constants/styles/base-layout'
import '../styles/globals.css'

// triggers pageview event on route change
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function MyApp({ Component, pageProps }) {
  const [ isMobile, setIsMobile ] = useState(false)
  const [ isClient, setIsClient ] = useState(false)

  useEffect(() => {
    _handleIsClient()
  }, [])

// checks if this is the server or client - if client, _handleIsMobile()
  useEffect(() => {
      if (isClient) {
          window.addEventListener('resize', _handleIsMobile)
          _handleIsMobile()
          return () => { window.removeEventListener('resize', _handleIsMobile) }
      }
      }, [ isClient ? 
          ( (document.documentElement.clientWidth || 0, window.innerWidth || 0), 
          (document.documentElement.clientHeight || 0, window.innerHeight || 0) )
          : null]
  )

  const _handleIsMobile = () => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

      if ((vh > 1.2 * vw) || (vh < 600) || (vw < 1000)) {
          setIsMobile(true)
      }
      else setIsMobile(false)
  }

  const _handleIsClient = () => {
    if (typeof window !== 'undefined' || process.browser) {
        setIsClient(true)
    }
    else setIsClient(false)
  }
  return (
    <>
      <Head>
        <title>W.WANG CODE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout />
      <Component {...pageProps} isMobile={isMobile} />
    </>
  )
}

export default MyApp
