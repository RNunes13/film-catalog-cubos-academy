import React from 'react'
import Image from 'next/future/image'
import { Poster as PosterStyled } from './Poster.styles'

export enum POSTER_SIZES {
  w92 = 'w92',
  w154 = 'w154',
  w185 = 'w185',
  w342 = 'w342',
  w500 = 'w500',
  w780 = 'w780',
  original = 'original',
}

export interface IPoster {
  title: string;
  path: string;
  width?: number;
  height?: number;
  className?: string;
  posterSize?: POSTER_SIZES;
}

export const Poster: React.FC<IPoster> = ({
  title,
  path,
  width,
  height,
  className,
  posterSize = POSTER_SIZES.w500,
}) => {
  const image = `https://image.tmdb.org/t/p/${posterSize}${path}`

  return (
    <PosterStyled data-testid='poster' className={className}>
      <Image
        alt={title}
        src={image}
        width={width}
        height={height}
        data-testid='poster-image'
      />
    </PosterStyled>
 )
}
