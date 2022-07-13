import React, { useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'

import { Genre } from 'entities/Genres/Genres'

import * as Styled from './Search.styles'

interface ISearch {
  className?: string;
  genres: Genre[];
  appliedGenres: number[];
  appliedSearchTitle: string;
}

const SEARCH_OPTIONS = {
  genre: 'genre',
  title: 'title'
}

const SEARCH_QUERY_KEY = {
  [SEARCH_OPTIONS.title]: 'query',
  [SEARCH_OPTIONS.genre]: 'withGenres',
}

export const Search: React.FC<ISearch> = ({
  className,
  genres = [],
  appliedGenres = [],
  appliedSearchTitle,
}) => {
  const { t } = useTranslation('home')

  const [term, setTerm] = useState<string>('')

  const formRef = useRef<any>();
  const inputTermRef = useRef<any>();
  const inputGenreRef = useRef<any>();

  const onChange = ({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(value);
  }

  const handleClickOnAutoComplete = (id: number) => {
    inputTermRef.current.value = appliedSearchTitle
    inputGenreRef.current.value = [...appliedGenres, id].join(',')
    formRef.current.submit()
  }

  const removeGenre = (id: number) => {
    inputTermRef.current.value = ''
    inputGenreRef.current.value = appliedGenres.filter(g => g !== id).join(',')
    formRef.current.submit()
  }

  const removeSearchTitle = () => {
    const url = new URL(window.location.href)
    url.searchParams.set(SEARCH_QUERY_KEY[SEARCH_OPTIONS.title], '')
    window.location.href = url.href
  }

  return (
    <>
      <Styled.Form ref={formRef} className={className}>
        <Styled.Fieldset>
          <Styled.InputGroup>
            <Styled.SearchIcon />
            <Styled.Input
              ref={inputTermRef}
              name={SEARCH_QUERY_KEY[SEARCH_OPTIONS.title]}
              value={term}
              placeholder={t('search.placeholder')}
              onChange={onChange}
            />
          </Styled.InputGroup>

          {!!term && (
            <Styled.AutoComplete
              term={term}
              items={genres}
              appliedItems={appliedGenres}
              onClick={handleClickOnAutoComplete}
            />
          )}
        </Styled.Fieldset>

        <Styled.Input
          ref={inputGenreRef}
          name={SEARCH_QUERY_KEY[SEARCH_OPTIONS.genre]}
          value={appliedGenres.join(',')}
          onChange={() => {}}
          hidden
        />
        <Styled.Input
          type='submit'
          hidden
        />
      </Styled.Form>

      <Styled.Tags
        genres={genres}
        appliedGenres={appliedGenres}
        appliedSearchTitle={appliedSearchTitle}
        onRemoveGenre={removeGenre}
        onRemoveTitle={removeSearchTitle}
      />
    </>
  )
}

export default Search
