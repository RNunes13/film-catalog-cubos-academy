import styled from 'styled-components'
import YouTubeComp from 'react-youtube'
import { mixins } from 'theme'

import TagComp, { COLORS } from 'components/Tag/Tag'
import PosterComp from 'components/Poster/Poster'
import SubtitleComp from 'components/Subtitle/Subtitle'
import AverageBarComp from 'components/AverageBar/AverageBar'

export const IMAGE_HEIGHT = 600
export const IMAGE_WIDTH = 440

const BoxShadow = `
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
`

export const Movie = styled.div`
  margin: ${({ theme }) => theme.spaces.space4} 0;

  ${mixins.medium()} {
    margin: ${({ theme }) => theme.spaces.space2} 0;
  }
`

export const ContentWrap = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.spaces.space4};
`

export const Content = styled.div`
  ${BoxShadow}
  padding: 50px 50px 30px 50px;
  border-radius: ${({ theme }) => theme.spaces.space2};
  color: ${({ theme }) => theme.colors.base_0};
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.base_80} 2%,
    rgba(44, 44, 44, 0.8) 100%
  );
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spaces.space2};
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 45px;
`

export const AverageBar = styled(AverageBarComp)`
  transform: translateX(5px);
`

export const Subtitle = styled(SubtitleComp)`
`

export const Overview = styled.p`
  margin-bottom: ${({ theme }) => theme.spaces.space3};
  font-size: 15px;
  line-height: 18px;
`

export const Information = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${mixins.medium()} {
    flex-flow: column wrap;
  }
`

export const Infos = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${({ theme }) => theme.spaces.space2};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spaces.space3};
`

export const InfoItem = styled.li`
  display: flex;
  flex-flow: column wrap;
`

export const InfoLabel = styled.span`
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.base_0};
`

export const InfoText = styled.span`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
`

export const Genres = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 1 0 auto;
  column-gap: ${({ theme }) => theme.spaces.space1};
  margin-top: ${({ theme }) => theme.spaces.space1};
`

export const Tag = styled(TagComp).attrs({
  color: COLORS.white
})`
`

export const Poster = styled(PosterComp).attrs({
  height: IMAGE_HEIGHT,
  width: IMAGE_WIDTH
})`
  ${BoxShadow}
  max-height: ${IMAGE_HEIGHT}px;
  border-radius: ${({ theme }) => theme.spaces.space2};
  overflow: hidden;

  ${mixins.medium()} {
    display: none;
  }
`

export const VideoWrap = styled.div`
  ${BoxShadow}
  margin-top: ${({ theme }) => theme.spaces.space4};
  border-radius: ${({ theme }) => theme.spaces.space2};
  overflow: hidden;
`

export const YouTube = styled(YouTubeComp)`
`
