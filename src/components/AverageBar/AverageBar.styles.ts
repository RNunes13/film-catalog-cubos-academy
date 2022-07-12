import styled from 'styled-components'
import { COLORS } from 'theme/Theme'

export const AverageBar = styled.div`
`

export const Wrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`

export const Svg = styled.svg`
  position: relative;
  width: 60px;
  height: 60px;
  transform: rotate(270deg);
`

export const Circle = styled.circle<{
  value?: number;
  color?: COLORS;
}>`
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke-width: 8px;
  stroke: transparent;
  transform: translate(10px, 10px);
  stroke-linecap: round;

  &:nth-child(2) {
    stroke: ${({ theme, color }) => theme.colors[color as COLORS]};
    stroke-dasharray: 125;
    stroke-dashoffset: ${({ value }) => `calc(125 - (125 * ${value}) / 100)`};
  }
`

export const Percent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Number = styled.p`
  font-size: 14px;
  font-weight: 700;

  &::after {
    content: '%';
    font-size: 8px;
  }
`
