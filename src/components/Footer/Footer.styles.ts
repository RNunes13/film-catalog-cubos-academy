import styled from 'styled-components'
import { mixins } from 'theme'

import BrazilFlag from 'images/brazil.svg'
import UsaFlag from 'images/usa.svg'

export const Footer = styled.footer`
  padding-top: ${({ theme }) => theme.spaces.space2};
  padding-bottom: ${({ theme }) => theme.spaces.space2};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.base_20};

  ${mixins.isMobile()} {
    padding: ${({ theme }) => theme.spaces.space1};
  }
`

export const Container = styled.div`
  ${mixins.defaultGrid()}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap column;
  gap: ${({ theme }) => theme.spaces.space1};
`

export const Copyright = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
`

export const DevelopedBy = styled.a`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.pacificBlue};
`

export const Locales = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.space1};
`

export const LocaleInfo = styled.span`
`

export const LocaleAnchor = styled.a`
  width: ${({ theme }) => theme.spaces.space3};
`

export const Brazil = styled(BrazilFlag)`
`

export const Usa = styled(UsaFlag)`
`
