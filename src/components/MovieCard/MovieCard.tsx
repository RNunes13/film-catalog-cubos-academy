import React from 'react'

import { IMovie } from 'entities/Movie/Movie.interface'

import * as Styled from './MovieCard.styles'


export interface IMovieCard {
  movie: IMovie;
}

export const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  const { id, title, posterPath } = movie

  return (
    <Styled.Link href={`/movies/${id}`} passHref>
      <Styled.Card>
        <Styled.Poster
          title={title as string}
          path={posterPath as string}
          width={Styled.IMAGE_WIDTH}
          height={Styled.IMAGE_HEIGHT}
        />
        <Styled.DesktopContent movie={movie} />
        <Styled.MobileContent movie={movie} />
      </Styled.Card>
    </Styled.Link>
  )
}

export default MovieCard
