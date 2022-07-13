import styled from 'styled-components'
import { mixins } from 'theme'

import SearchSvg from 'images/search.svg'
import AutoCompleteComp from './components/AutoComplete/AutoComplete'
import TagsComp from './components/Tags/Tags'

export const Form = styled.form`
`

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: ${({ theme: { spaces: { space2, space3 }}}) => `${space2} ${space3}`};
  background-color: ${({ theme }) => theme.colors.base_0};
  box-shadow: 0px 4px 50px ${({ theme }) => theme.colors.base_100}1a;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spaces.space3};
  z-index: ${({ theme }) => theme.index.base + 2};

  ${mixins.isMobile()} {
    padding: ${({ theme: { spaces: { space1, space2 }}}) => `${space1} ${space2}`};
  }
`

export const Fieldset = styled.fieldset`
  position: relative;
  border: none;
  padding: 0;
`

export const SearchIcon = styled(SearchSvg)`
  margin-right: ${({ theme }) => theme.spaces.space2};
  width: ${({ theme }) => theme.spaces.space3};
  height: ${({ theme }) => theme.spaces.space3};
  fill: ${({ theme }) => theme.colors.base_60};
  fill-opacity: 0.5;

  ${mixins.isMobile()} {
    margin-right: ${({ theme }) => theme.spaces.space1};
    width: ${({ theme }) => theme.spaces.space2};
    height: ${({ theme }) => theme.spaces.space2};
  }
`

export const Input = styled.input`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  transition: border 250ms ease-in-out;
  background-color: transparent;
  outline: none;
  border: none;

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.base_60}80;
  }
`

export const AutoComplete = styled(AutoCompleteComp)``
export const Tags = styled(TagsComp)``
