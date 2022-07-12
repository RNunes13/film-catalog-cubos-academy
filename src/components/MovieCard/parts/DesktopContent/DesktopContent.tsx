import React from 'react'
import { useTranslation, Trans } from 'next-i18next'

import { IMovie } from 'entities/Movie/Movie.interface'

import * as Styled from './DesktopContent.styles'

interface IDesktopContent {
  movie: IMovie
}

export const DesktopContent: React.FC<IDesktopContent> = ({ movie }) => {
  const { t } = useTranslation('home')
  const { title, releaseDate, voteAverage = 0, overview, genres  } = movie

  const date = new Date(`${releaseDate}T00:00:00.00`).toLocaleDateString('pt-BR')
  
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
          values={{ date }}
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
