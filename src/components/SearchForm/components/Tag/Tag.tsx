import React from 'react'

import * as Styled from './Tag.styles'

interface ITag {
  text: string;
  onClick(): void;
}

export const Tag: React.FC<ITag> = ({ text, onClick }) => (
  <Styled.Tag
    text={text}
    endAdornment={
      <Styled.TagRemove onClick={onClick} />
    }
  />
)

export default Tag
