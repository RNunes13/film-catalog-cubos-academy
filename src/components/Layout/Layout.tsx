import React from 'react'
import Head from 'next/head'

import * as Styled from './Layout.styles'

export interface ILayout {
  children: any;
  pageTitle?: string;
  grid?: 'grid940' | 'grid1290' | 'defaultGrid'
}

const Layout = ({ children, pageTitle = 'Movies', grid = 'defaultGrid' }: ILayout) => (
  <Styled.Layout data-testid='page'>
    <Head>
      <title>{ pageTitle }</title>
    </Head>
    <Styled.Header />
    <Styled.Main grid={grid} data-testid='page-main'>
      {children}
    </Styled.Main>
    <Styled.Footer />
  </Styled.Layout>
)

export default Layout
