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
  color = COLORS.primary,
}) => {
  const [ cx, cy, r ] = Array(3).fill(20) as number[]

  const percent = value * 10

  return (
    <Styled.AverageBar data-testid='averageBar'>
      <Styled.Wrapper>
        <Styled.Svg>
          <Styled.Circle
            r={r}
            cx={cx}
            cy={cy}
            data-testid='averageBar-circle1'
          />
          <Styled.Circle
            r={r}
            cx={cx}
            cy={cy}
            color={color}
            value={percent}
            data-testid='averageBar-circle2'
          />
        </Styled.Svg>
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
