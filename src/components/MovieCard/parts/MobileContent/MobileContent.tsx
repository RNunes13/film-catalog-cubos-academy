import React from 'react'

import { IMovie } from 'entities/Movie/Movie.interface'

import * as Styled from './MobileContent.styles'

interface IMobileContent {
  movie: IMovie
}

export const MobileContent: React.FC<IMobileContent> = ({ movie }) => {
  const { title, genres, voteAverage = 0 } = movie

  const genresNames = genres?.map(({ name }) => name).join(', ') || ''
  
  return (
    <Styled.Content>
      <Styled.Title>{ title }</Styled.Title>
      {genresNames && (
        <Styled.Genres>
          {genresNames}
        </Styled.Genres>
      )}
      <Styled.VoteAverage>
        <Styled.StarIcon />
        <Styled.Number>{ voteAverage }</Styled.Number>
      </Styled.VoteAverage>
    </Styled.Content>
  )
}

export default MobileContent
