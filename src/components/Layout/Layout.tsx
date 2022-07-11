import React from 'react'
import Head from 'next/head'

import * as Styled from './Layout.styles'

export interface ILayout {
  pageTitle?: string;
  children: any;
}

const Layout = ({ children, pageTitle = 'Movies' }: ILayout) => (
  <Styled.Layout data-testid='page'>
    <Head>
      <title>{ pageTitle }</title>
    </Head>
    <Styled.Header />
    <Styled.Main data-testid='page-main'>
      {children}
    </Styled.Main>
  </Styled.Layout>
)

export default Layout
