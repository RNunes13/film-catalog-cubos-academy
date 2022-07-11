import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'apollo/client'

const withApollo = <P extends object>(
  Component: React.ComponentType<P>
// eslint-disable-next-line react/display-name
): React.FC<P> => ((props) => {
    const apolloClient = useApollo(props)

    return (
      <ApolloProvider client={apolloClient}>
        <Component {...props} />
      </ApolloProvider>
    )
  }
)

export default withApollo
