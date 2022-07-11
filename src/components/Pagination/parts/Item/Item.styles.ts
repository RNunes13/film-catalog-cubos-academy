import styled from 'styled-components'

export const Dots = styled.li`
`

export const Item = styled.li<{ selected: boolean }>`
  padding: ${({ theme }) => theme.spaces.space1} 15px;
  color: ${({ theme }) => theme.colors.base_60};
  background-color: ${({ theme }) => theme.colors.base_0};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spaces.space3};
  box-shadow: 0 0 25px -8px #000;
  font-weight: 700;

  ${({ selected, theme }) => selected && `
    color: ${theme.colors.base_0};
    background-color: ${theme.colors.base_80};
  `}
`
