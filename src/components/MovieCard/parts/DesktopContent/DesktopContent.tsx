import React from 'react'
import { useTranslation, Trans } from 'next-i18next'

import { Movie } from 'entities/Movie/Movie'

import * as Styled from './DesktopContent.styles'

interface IDesktopContent {
  movie: Movie
}

export const DesktopContent: React.FC<IDesktopContent> = ({ movie }) => {
  const { t } = useTranslation('home')
  const { title, voteAverage = 0, overview, genres, formattedReleaseDate } = movie

  return (
    <Styled.Content>
      <Styled.Header>
        <Styled.AverageBar value={voteAverage} />
        <Styled.Title>{ title }</Styled.Title>
      </Styled.Header>
      <Styled.Overview>
        {overview}
      </Styled.Overview>
      <Styled.ReleaseDate>
        <Trans
          t={t}
          i18nKey='releaseDate'
          values={{ date: formattedReleaseDate }}
        />
      </Styled.ReleaseDate>
      {!!genres?.length && (
        <Styled.Genres>
          {genres.map(({ id, name }) =>
            <Styled.Tag key={id} text={name as string} />
          )}
        </Styled.Genres>
      )}
    </Styled.Content>
  )
}

export default DesktopContent
