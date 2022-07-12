import Head from 'next/head'
import { createContext, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { appWithTranslation } from 'next-i18next'

import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

import { theme } from 'theme'
import { Genre } from 'entities/Genres/Genres'
import { GlobalStyle } from 'theme/GlobalStyle'
import Layout from 'components/Layout/Layout'

interface IAppContext {
  genres: Genre[],
  setGenres?: (genres: any[]) => void
}

const initState: IAppContext = {
  genres: [],
}

export const AppCtx = createContext<IAppContext>(initState)

export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout<P = {}> = AppProps & {
  Component: NextPageWithLayout<P>
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{ page }</Layout>)

  const [state, setState] = useState<IAppContext>(initState)

  const setGenres = (genres: any[]) => setState(prevState => ({ ...prevState, genres }))

  useEffect(() => {
    const { withGenres = '', query = '' } = pageProps

    setState(prevState => ({
      ...prevState,
      appliedSearchTitle: query, 
      appliedGenres: withGenres.split(',').filter(Boolean).map(Number)
    }))
  }, [pageProps])

  return (
    <>
      <Head>
        <meta name="description" content="Your biggest movie catalog" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=5.0"/>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppCtx.Provider value={{ ...state, setGenres }}>
          { getLayout(<Component {...pageProps} />) }
        </AppCtx.Provider>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
