import styled from 'styled-components'
import { mixins } from 'src/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`

export const Title = styled.h1`
  ${mixins.h0()}
`
