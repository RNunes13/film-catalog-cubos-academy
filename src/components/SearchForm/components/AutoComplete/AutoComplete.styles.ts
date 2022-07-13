import styled from 'styled-components'

export const AutoComplete = styled.ul`
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  padding: ${({ theme: { spaces: { space2, space5 }}}) => `${space5} ${space2} ${space2}`};
  background-color: ${({ theme }) => theme.colors.base_0};
  z-index: ${({ theme }) => theme.index.base + 1};
  border-radius: ${({ theme }) => theme.spaces.space2};
  box-shadow: 0px 4px 50px ${({ theme }) => theme.colors.base_100}1a;
`

export const Item = styled.li`
  margin-bottom: ${({ theme }) => theme.spaces.space1};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`
