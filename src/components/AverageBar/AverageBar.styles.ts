import styled from 'styled-components'
import { COLORS } from 'theme/Theme'

import CircularBarSvg from 'images/circularBar.svg'

export const AverageBar = styled.div`
`

export const Wrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`

export const CircularBar = styled(CircularBarSvg)`
  position: relative;
  transform: rotate(270deg);

  circle {
    width: 100%;
    height: 100%;
    fill: transparent;
    stroke-width: 8px;
    stroke: transparent;
    transform: translate(10px, 10px);
    stroke-linecap: round;

    &:nth-child(2) {
      stroke: ${({ theme, color }) => theme.colors[color as COLORS]};
      stroke-dasharray: 125px;
      stroke-dashoffset: ${({ value }) => `calc(125px - (125px * ${value}) / 100)`};
    }
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
