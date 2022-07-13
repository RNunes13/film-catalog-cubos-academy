import type { NextPageWithLayout } from '../_app'
import { useState } from 'react'
import { GetServerSideProps } from 'next'

import { GET_MOVIE } from 'api/queries/Movies'
import { initializeApollo } from 'apollo/client'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { useMovieInformation } from 'hooks/useMovieInformation'
import { Movie as MovieEntity, IMovie } from 'entities/Movie/Movie'

import Layout from 'components/Layout/Layout'
import { SEO } from 'components/Seo/Seo'
import { COLORS } from 'theme/Theme'
import * as Styled from 'styles/Movie.styles'

export interface IMovieProps {
  movie: IMovie;
}

const client = initializeApollo()

const Movie: NextPageWithLayout<IMovieProps> = ({ movie: movieProps }) => {
  const { t } = useTranslation('movie')
  const [hasImageError, setImageError] = useState<boolean>(false)
  
  const movie = new MovieEntity(movieProps)
  const information = useMovieInformation(movie)

  const movieInformation = Object
    .values(information)
    .filter(value => !!value)
    .map(({ label, text, fallbackText }) => {
      const infoText = t(text)

      return {
        label: t(label),
        text: infoText === text && !!fallbackText
          ? fallbackText()
          : infoText 
      }
    })

  const {
    title,
    genres,
    overview,
    posterPath,
    voteAverage = 0,
    videos: { trailer },
  } = movie

  return (
    <Styled.Movie>
      <Styled.ContentWrap>
        <Styled.Content>
          <Styled.Header>
            <Styled.Title>{ title }</Styled.Title>
            <Styled.AverageBar value={voteAverage} color={COLORS.base_0} />
          </Styled.Header>

          <Styled.Subtitle>{ t('synopsis') }</Styled.Subtitle>
          <Styled.Overview>{ overview }</Styled.Overview>

          <Styled.Subtitle>{ t('information') }</Styled.Subtitle>
          <Styled.Information>
            <Styled.Infos>
              {movieInformation.map(({ label, text }) => (
                <Styled.InfoItem key={label}>
                  <Styled.InfoLabel>{ t(label) }</Styled.InfoLabel>
                  <Styled.InfoText>{ t(text) }</Styled.InfoText>
                </Styled.InfoItem>
              ))}
            </Styled.Infos>
          </Styled.Information>

          <Styled.Genres>
            {genres!.map(({ id, name }: any) =>
              <Styled.Tag key={id} text={name} />
            )}
          </Styled.Genres>
        </Styled.Content>

        {!hasImageError && (
          <Styled.Poster
            title={title as string}
            path={posterPath as string}
            onImageError={() => setImageError(true)}
          />
        )}
      </Styled.ContentWrap>

      {!!trailer && (
        <Styled.VideoWrap>
          <Styled.YouTube
            videoId={trailer.key}
            opts={{
              width: '100%',
              height: '600px'
            }}
          />
        </Styled.VideoWrap>
      )}
    </Styled.Movie>
  )
}

Movie.getLayout = (page) => {
  const { movie = {} } = page?.props || {}

  return (
    <Layout grid='grid1290'>
      <SEO
        title={movie.title}
        description={movie.overview}
      />
      { page }
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
  const { id } = params || {}

  const { data: { movie = {} } = {} } = await client.query({
    query: GET_MOVIE,
    variables: { id, lng: locale },
  })

  return {
    props: {
      movie,
      ...await serverSideTranslations(locale as string, ['common', 'movie']),
    }
  }
}

export default Movie
