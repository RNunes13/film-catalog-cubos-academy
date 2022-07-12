import styled from 'styled-components'
import { mixins } from 'theme'

import Star from 'images/star.svg'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${({ theme }) => theme.spaces.space1} 0;

  ${mixins.isDesktop()} {
    display: none;
  }
`

export const Title = styled.h2`
  ${mixins.h3()}
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const Genres = styled.p`
  color: ${({ theme }) => theme.colors.base_60};
  margin-bottom: ${({ theme }) => theme.spaces.space1};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const StarIcon = styled(Star)`
  width: 16px;
  height: 16px;
`

export const VoteAverage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const Number = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.base_80};
`
