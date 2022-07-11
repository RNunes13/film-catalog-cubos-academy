import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import * as Styled from 'styles/Home.styles'

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation('home')

  return (
    <>
      <Head>
        <title>Movie catalog</title>
      </Head>
      <Styled.Container>
        <Styled.Title>
          { t('title') }
        </Styled.Title>
      </Styled.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale as string, ['common', 'home']),
    }
  }
}

export default Home
