import styled from 'styled-components'
import { mixins } from 'theme'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Main = styled.main`
  ${mixins.defaultGrid()}
  flex: 1 0 auto;
  margin-bottom: ${({ theme }) => theme.spaces.space3};

  ${mixins.isMobile()} {
    padding: 0 15px;
    margin-bottom: ${({ theme }) => theme.spaces.space2};
  }
`
