import React from 'react'
import { DOTS } from 'src/hooks/usePagination'

import * as Styled from './Item.styles'

export interface IItem {
  selected?: boolean;
  content: string | number;
  onClick: () => void;
}

const Dots = () => (
  <Styled.Dots data-testid='pagination-dots'>
    { DOTS }
  </Styled.Dots>
)

export const Item: React.FC<IItem> = ({ content, selected, onClick }) => {
  if (content === DOTS) return <Dots />

  return (
    <Styled.Item
      selected={!!selected}
      onClick={!selected ? onClick : undefined}
      data-testid={!selected ? 'pagination-item' : 'pagination-active'}
    >
      {content}
    </Styled.Item>
  )
}

export default Item
