import type { NextPage } from 'next'
import Head from 'next/head'

import * as Styled from 'styles/Home.styles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Movie catalog</title>
      </Head>
      <Styled.Container>
        <Styled.Title>
          Movie catalog
        </Styled.Title>
      </Styled.Container>
    </>
  )
}

export default Home
