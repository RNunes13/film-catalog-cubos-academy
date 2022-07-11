import React from 'react'
import { useTranslation } from 'next-i18next'

import * as Styled from './Header.styles'

export const Header = () => {
  const { t } = useTranslation('common')

  return (
    <Styled.Header data-testid='header'>
      <Styled.Container data-testid='header-container'>
        <Styled.Title data-testid='header-title'>
          { t('header') }
        </Styled.Title>
      </Styled.Container>
    </Styled.Header>
  )
}

export default Header
