import React from 'react'
import { Subtitle as SubtitleStyled } from './Subtitle.styles'

interface ISubtitle {
  text?: string;
  className?: string;
  children?: React.ReactElement
}

export const Subtitle: React.FC<ISubtitle> = ({ text, className, children }) => (
  <SubtitleStyled
    data-testid='subtitle'
    className={className}
  >
    { children || text }
  </SubtitleStyled>
)

export default Subtitle
