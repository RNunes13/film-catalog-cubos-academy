import { useMemo } from 'react'
import { ApolloClient, from } from '@apollo/client'
import type { AppProps } from 'next/app'
import type { NormalizedCacheObject } from '@apollo/client'

import { error, rest } from './links'
import { createCache, mergeAndRestoreCache } from './cache'

export const isServer = typeof window === 'undefined'

const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const createApolloClient = () => (
  new ApolloClient({
    cache: createCache(),
    ssrMode: isServer,
    link: from([(error as any), rest])
  })
)

export const initializeApollo = (
  { initialState }: { initialState?: NormalizedCacheObject | undefined } = {}
) => {
  const _apolloClient = apolloClient ?? createApolloClient()
  
  // If your page has Next.js data fetching Rehydrate the initial state
  mergeAndRestoreCache({ client: _apolloClient, state: initialState })

  // Creating a new Apollo Client for SSG and SSR
  if (isServer) return _apolloClient

  // Creating the Apollo Client once in the client side
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export const getApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps['pageProps']
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
    return pageProps
  }

  return {
    [APOLLO_STATE_PROP_NAME]: client.cache.extract()
  }
}

export const useApollo = (pageProps: AppProps['pageProps']) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo({ initialState: state }), [
    state,
  ])

  return store

}
