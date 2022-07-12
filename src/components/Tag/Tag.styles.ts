import styled from 'styled-components'
import { COLORS } from './Tag'

export const Tag = styled.span<{ color?: COLORS }>`
  padding: 7px ${({ theme }) => theme.spaces.space3};
  border-radius: 30px;
  font-weight: 600;

  ${({ color, theme }) => color === COLORS.primary && `
    background-color: ${theme.colors.base_80};
    color: ${theme.colors.base_0};
  `}

  ${({ color, theme }) => color === COLORS.white && `
      background-color: ${theme.colors.base_0};
      color: ${theme.colors.base_80};
  `}
`
