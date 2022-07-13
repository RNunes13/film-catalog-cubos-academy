import styled from 'styled-components'
import { mixins } from 'theme'

export const Subtitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spaces.space1};
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.base_0};
  border-bottom: 6px solid;
  border-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.base_0},
    transparent
  ) 1;
`
