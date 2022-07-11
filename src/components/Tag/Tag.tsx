import React from 'react'

import * as Styled from './Tag.styles'

export interface ITag {
  text: string;
  className?: string;
  endAdornment?: JSX.Element;
}

export const Tag: React.FC<ITag> = ({ text, className, endAdornment }) => (
  <Styled.Tag data-testid='tag' className={className}>
    { text }
    { endAdornment }
  </Styled.Tag>
)

export default Tag
