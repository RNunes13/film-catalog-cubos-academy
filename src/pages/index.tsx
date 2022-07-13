import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useCallback, useEffect, useContext } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useLazyQuery } from '@apollo/client'
import { useTranslation } from 'next-i18next'

import { initializeApollo } from 'apollo/client'
import withApollo from 'hoc/withApollo'

import { AppCtx } from './_app'
import { Movies, IMovie } from 'entities/Movie/Movie'
import { GET_POPULAR, GET_GENRES, SEARCH, DISCOVER } from 'api/queries/Movies'
import { useFilter, LOCAL_PAGE_KEY, API_PAGES_LIMIT } from 'hooks/useFilter'

import { MovieCard } from 'components/MovieCard/MovieCard'
import * as Styled from 'styles/Home.styles'
import { SEO } from 'src/components/Seo/Seo'

export interface IHomeProps {
  locale: string;
  movieData: any;
  locales: string[];
  defaultLocale: string;
  [LOCAL_PAGE_KEY]: string;
}

const client = initializeApollo()

const Home: NextPageWithLayout<IHomeProps> = ({ movieData , localPage }) => {
  const [getGenres, { loading }] = useLazyQuery(GET_GENRES)

  const { t } = useTranslation('home')
  const { setGenres, genres, appliedGenres, appliedSearchTitle } = useContext(AppCtx)
  const { currentPage, results, totalPages, handleLocalPage } = useFilter<IMovie>({ ...movieData, localPage })

  const { movies } = new Movies(results, genres)

  const onGetGenres = useCallback(async () => {
    if ((!genres || !genres.length) && !loading) {
      const { data: { genres: genresData = [] } = {}} = await getGenres()
      setGenres && setGenres(genresData?.genres)
    }
  }, [genres, loading, getGenres, setGenres])

  useEffect(() => {
    onGetGenres()
  }, [onGetGenres])

  return (
    <>
      <SEO
        title={t('meta.title')}
        description={t('meta.description')}
      />
      <Styled.Container>
        <Styled.Search
          genres={genres}
          appliedGenres={appliedGenres}
          appliedSearchTitle={appliedSearchTitle}
        />
        <Styled.Movies>
          {movies.map((movie: any) => <MovieCard key={movie.id} movie={movie} />)}
        </Styled.Movies>
        <Styled.Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handleLocalPage}
        />
      </Styled.Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale, query: qs }) => {
  const { query, withGenres, page } = qs

  const apolloQuery = !query && !withGenres
    ? GET_POPULAR
    : query ? SEARCH : DISCOVER

  const { data: { movies = {} } = {} } = await client.query({
    query: apolloQuery,
    variables: { withGenres, query, page, lng: locale }
  })

  return {
    props: {
      movieData: {
        ...movies,
        // There's a limit on the API pagination that allows us to provide up to page 500
        totalPages: movies.totalPages > API_PAGES_LIMIT ? API_PAGES_LIMIT : movies.totalPages,
      },
      ...qs,
      ...await serverSideTranslations(locale as string, ['common', 'home']),
    }
  }
}

export default withApollo(Home)
