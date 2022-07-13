import styled from 'styled-components'
import { mixins } from 'theme'

import AverageBarComp from 'components/AverageBar/AverageBar'
import TagComp from 'components/Tag/Tag'

export const IMAGE_HEIGHT = 450
export const IMAGE_WIDTH = 300

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;

  ${mixins.medium()} {
    display: none;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-bottom: ${({ theme }) => theme.spaces.space2};
  gap: 5px;
`

export const AverageBar = styled(AverageBarComp)`
  transform: translateX(-5px);
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.primary};
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
`

export const ReleaseDate = styled.p`
  flex: 1 0 auto;
  margin-bottom: ${({ theme }) => theme.spaces.space2};
  color: ${({ theme }) => theme.colors.base_60};
  font-size: 17px;
`

export const Overview = styled.p`
  display: -webkit-box;
  font-size: 18px;
  line-height: 22px;
  overflow: hidden;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;  
  color: ${({ theme }) => theme.colors.base_60};
  margin-bottom: ${({ theme }) => theme.spaces.space2};
`

export const Genres = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`

export const Tag = styled(TagComp)`
  display: flex;
  align-items: center;
`
