import styled from 'styled-components'

import { Item } from './parts/Item/Item'

export const Pagination = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.space2};
`

export const PaginationItem = styled(Item)`
`
