import styled from 'styled-components'

import CloseSvg from 'images/close.svg'
import TagComp from 'components/Tag/Tag'

export const Tag = styled(TagComp)`
  padding-right: ${({ theme }) => theme.spaces.space2};
`

export const TagRemove = styled(CloseSvg)`
  cursor: pointer;
  width: 15px;
  height: 15px;
  fill: ${({ theme }) => theme.colors.base_0};
`
