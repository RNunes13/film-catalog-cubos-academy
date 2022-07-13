import React from 'react'

import { removeSpecialCharacters } from '../../Search.utils'

import * as Styled from './AutoComplete.styles'

export interface IItem {
  id?: number;
  name?: string;
}

interface IAutoComplete {
  term: string;
  items: IItem[];
  appliedItems: number[];
  onClick(id: number | string): void;
}

export const AutoComplete: React.FC<IAutoComplete> = ({ term, items, appliedItems, onClick }) => {
  const itemsToShow = items
    .filter(({ id }) => !appliedItems.includes(id!))
    .filter(({ name }) => {
      const nameFormatted = removeSpecialCharacters(name!).toLocaleLowerCase()
      const termFormatted = removeSpecialCharacters(term).toLocaleLowerCase()
      
      return nameFormatted.match(termFormatted)
    })

  if (!itemsToShow.length) return null

  return (
    <Styled.AutoComplete>
      {itemsToShow.map(({ id, name }) => (
        <Styled.Item key={id} onClick={() => onClick(id!)} >
          {name}
        </Styled.Item>
      ))}
    </Styled.AutoComplete>
  )
}

export default AutoComplete
