import Head from 'next/head'
import { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { appWithTranslation } from 'next-i18next'

import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

import { theme } from 'theme'
import { GlobalStyle } from 'theme/GlobalStyle'
import Layout from 'components/Layout/Layout'

interface IAppContext {
}

const initState: IAppContext = {
}

export const AppCtx = createContext<IAppContext>(initState)

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{ page }</Layout>)

  return (
    <>
      <Head>
        <meta name="description" content="Your biggest movie catalog" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=5.0"/>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        { getLayout(<Component {...pageProps} />) }
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
