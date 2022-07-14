import React from 'react'
import { COLORS } from 'theme/Theme'

import * as Styled from './AverageBar.styles'

export interface IAverageBar {
  color?: COLORS
  value: number;
  className?: string;
}

export const AverageBar: React.FC<IAverageBar> = ({
  value = 0,
  className,
  color = COLORS.primary,
}) => {
  const [ cx, cy, r ] = Array(3).fill(20) as number[]

  const percent = value * 10

  return (
    <Styled.AverageBar className={className} data-testid='averageBar'>
      <Styled.Wrapper>
        <Styled.CircularBar color={color} value={percent} />
        <Styled.Percent data-testid='averageBar-percent'>
          <Styled.Number data-testid='averageBar-number'>
            { percent }
          </Styled.Number>
        </Styled.Percent>
      </Styled.Wrapper>
    </Styled.AverageBar>
  )
}

export default AverageBar
