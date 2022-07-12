import styled from 'styled-components'

export const Tag = styled.span`
  padding: 7px ${({ theme }) => theme.spaces.space3};
  background-color: ${({ theme }) => theme.colors.base_80};
  color: ${({ theme }) => theme.colors.base_0};
  border-radius: 30px;
  font-weight: 600;
`
