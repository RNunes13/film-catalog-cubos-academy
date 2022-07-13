import React from 'react'

import { Movie } from 'entities/Movie/Movie'

import * as Styled from './MovieCard.styles'


export interface IMovieCard {
  movie: Movie;
  prioritizeImage?: boolean;
}

export const MovieCard: React.FC<IMovieCard> = ({ movie, prioritizeImage }) => {
  const { id, title, posterPath } = movie

  return (
    <Styled.Link href={`/movies/${id}`} passHref>
      <Styled.Card>
        <Styled.Poster
          title={title as string}
          path={posterPath as string}
          width={Styled.IMAGE_WIDTH}
          height={Styled.IMAGE_HEIGHT}
          priority={prioritizeImage}
        />
        <Styled.DesktopContent movie={movie} />
        <Styled.MobileContent movie={movie} />
      </Styled.Card>
    </Styled.Link>
  )
}

export default MovieCard
