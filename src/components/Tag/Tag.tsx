import React from 'react'

import * as Styled from './Tag.styles'

export enum COLORS {
  primary = 'primary',
  white = 'white',
}

export interface ITag {
  text?: string;
  color?: COLORS;
  className?: string;
  endAdornment?: JSX.Element;
}

export const Tag: React.FC<ITag> = ({
  text,
  className,
  endAdornment,
  color = COLORS.primary
}) => {
  if (!text) return null

  return (
    <Styled.Tag data-testid='tag' color={color} className={className}>
      { text }
      { endAdornment }
    </Styled.Tag>
  )
}

export default Tag
