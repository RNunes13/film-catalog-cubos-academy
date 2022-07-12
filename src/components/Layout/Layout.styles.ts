import styled from 'styled-components'
import { mixins } from 'theme'

import HeaderComp from 'components/Header/Header'
import FooterComp from 'components/Footer/Footer'

import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE } from 'components/Header/Header.styles'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Header = styled(HeaderComp)``
export const Footer = styled(FooterComp)``

export const Main = styled.main<{ grid: 'grid940' | 'grid1290' | 'defaultGrid' }>`
  ${({ grid }) => mixins[grid]()}
  flex: 1 0 auto;
  margin-top: ${HEADER_HEIGHT_DESKTOP}px;
  padding-top: ${({ theme }) => theme.spaces.space2};
  padding-bottom: ${({ theme }) => theme.spaces.space3};

  ${mixins.isMobile()} {
    padding: 0 15px;
    margin-top: ${HEADER_HEIGHT_MOBILE}px;
    padding-top: ${({ theme }) => theme.spaces.space2};
    padding-bottom: ${({ theme }) => theme.spaces.space2};
  }
`
