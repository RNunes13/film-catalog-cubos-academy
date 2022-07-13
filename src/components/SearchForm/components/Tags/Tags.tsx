import Link from 'next/link';
import React from 'react'
import { Genre } from 'src/entities/Genres/Genres';

import * as Styled from './Tags.styles'

interface ITags {
  genres: Genre[];
  appliedGenres: number[];
  appliedSearchTitle: string;
  onRemoveTitle(): void;
  onRemoveGenre(id: number): void;
}

export const Tags: React.FC<ITags> = ({
  genres,
  appliedGenres,
  appliedSearchTitle,
  onRemoveTitle,
  onRemoveGenre,
}) => {
  const hasTags = !!appliedSearchTitle || (!!appliedGenres.length && !!genres.length)

  return (
    <Styled.Tags>
      {!!appliedSearchTitle && (
        <Styled.Tag
          text={appliedSearchTitle}
          onClick={onRemoveTitle}
        />
      )}

      {!!genres.length && appliedGenres.map(genreId => {
        const genre = genres.find(({ id }) => id === genreId)

        if (!genre) return null

        return (
          <Styled.Tag
            key={genre.id}
            text={genre.name!}
            onClick={() => onRemoveGenre(genreId)}
          />
        )
      })}

      {hasTags && (
        <Link href='/' passHref>
          <Styled.ClearAll>Limpar</Styled.ClearAll>
        </Link>
      )}
    </Styled.Tags>
  )
}

export default Tags
