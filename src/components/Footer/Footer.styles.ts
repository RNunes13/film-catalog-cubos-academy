import styled from 'styled-components'
import { mixins } from 'theme'

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
  flex-wrap: wrap;
  gap: 5px;
`

export const DevelopedBy = styled.a`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.pacificBlue};
`
