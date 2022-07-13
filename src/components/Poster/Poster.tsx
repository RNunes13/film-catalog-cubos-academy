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
  width: number;
  height: number;
  className?: string;
  posterSize?: POSTER_SIZES;
  onImageError?(): void;
}

const PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/R8AAtsB7JKxzdUAAAAASUVORK5CYII='

export const Poster: React.FC<IPoster> = ({
  title,
  path,
  width,
  height,
  className,
  onImageError,
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
        placeholder='blur'
        blurDataURL={PLACEHOLDER}
        data-testid='poster-image'
        onError={onImageError}
      />
    </PosterStyled>
 )
}

export default Poster
