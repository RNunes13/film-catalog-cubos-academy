import merge from 'deepmerge'
import isEqual from 'lodash.isequal'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import type { InMemoryCacheConfig, NormalizedCacheObject } from '@apollo/client'

interface IMergeAndRestoreCache {
  client: ApolloClient<NormalizedCacheObject>;
  state?: NormalizedCacheObject | undefined;
}

const cacheOptions: InMemoryCacheConfig = { }

export const createCache = () => (
  new InMemoryCache(cacheOptions)
)

const mergeCache = (
  existingCache: NormalizedCacheObject,
  initialState: NormalizedCacheObject
) => (
  merge(existingCache, initialState, {
    // Combine arrays using object equality (like in sets)
    arrayMerge: (destinationArray, sourceArray) => [
      ...sourceArray,
      ...destinationArray.filter((d) =>
        sourceArray.every((s) => !isEqual(d, s))
      ),
    ],
  })
)

export const mergeAndRestoreCache = ({ client, state }: IMergeAndRestoreCache ) => {
  if (!state) return

  // Get existing cache, loaded during client side data fetching
  const existingCache = client.extract()
  // Merge the existing cache into data passed from getStaticProps/getServerSideProps
  const data = mergeCache(state, existingCache)
  // Restore the cache with the merged data
  client.cache.restore(data)
}
