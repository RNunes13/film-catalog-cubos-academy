import styled from 'styled-components'

import TagComp from '../Tag/Tag'

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spaces.space1};
  margin-top: ${({ theme }) => theme.spaces.space2};
`

export const Tag = styled(TagComp)`
`

export const ClearAll = styled.a``
