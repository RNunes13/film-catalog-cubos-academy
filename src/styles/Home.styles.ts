import styled from 'styled-components'
import { mixins } from 'src/theme'

import MovieCardComp from 'components/MovieCard/MovieCard'
import PaginationComp from 'components/Pagination/Pagination'
import SearchComp from 'src/components/SearchForm/Search'

export const Container = styled.div`
`

export const Movies = styled.div`
  ${mixins.grid12()}
  grid-row-gap: ${({ theme }) => theme.spaces.space3};
  justify-items: center;
  padding: ${({ theme }) => `${theme.spaces.space3} 0`};

  ${mixins.isDesktop()} {
    grid-row-gap: ${({ theme }) => theme.spaces.space4};
  }
`

export const MovieCard = styled(MovieCardComp)`
`

export const Search = styled(SearchComp)`
  margin: ${({ theme: { spaces: { space3, space4 }}}) => `${space4} 0 ${space3}`};

  ${mixins.medium()} {
    margin: ${({ theme: { spaces: { space1 }}}) => `${space1} 0 0`};
  }
`

export const Pagination = styled(PaginationComp)`
  margin-top: ${({ theme }) => theme.spaces.space4};
  margin-bottom: ${({ theme }) => theme.spaces.space3};

  ${mixins.medium()} {
    margin: ${({ theme }) => theme.spaces.space4} 0 ${({ theme }) => theme.spaces.space2};
  }
`
