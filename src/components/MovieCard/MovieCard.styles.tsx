import styled from 'styled-components'
import NextLink from 'next/link'

import { mixins } from 'theme'

import PosterComp from 'components/Poster/Poster'
import DesktopContentComp from './parts/DesktopContent/DesktopContent'
import MobileContentComp from './parts/MobileContent/MobileContent'

export const IMAGE_HEIGHT = 450
export const IMAGE_WIDTH = 300

export const Link = styled(NextLink)`
`

export const Card = styled.a`
  grid-column: 1 / 13;
  width: 100%;
  display: flex;
  border-radius: ${({ theme }) => theme.spaces.space2};

  &:hover { text-decoration: none; }

  ${mixins.isDesktop()} {
    overflow: hidden;
    max-height: ${IMAGE_HEIGHT}px;
    box-shadow: 0 0 40px -10px ${({ theme }) => theme.colors.base_40};
  }

  ${mixins.medium()} {
    flex-direction: column;
    align-items: center;
    max-width: ${IMAGE_WIDTH}px;
  }
`

export const Poster = styled(PosterComp)`
  ${mixins.medium()} {
    overflow: hidden;
    max-height: ${IMAGE_HEIGHT}px;
    border-radius: ${({ theme }) => theme.spaces.space1};
  }
`

export const DesktopContent = styled(DesktopContentComp)``
export const MobileContent = styled(MobileContentComp)``
