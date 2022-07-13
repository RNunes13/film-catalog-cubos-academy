import React from 'react'
import { useTranslation } from 'next-i18next'

import * as Styled from './Header.styles'
import Link from 'next/link'

export const Header = () => {
  const { t } = useTranslation('common')

  return (
    <Styled.Header data-testid='header'>
      <Styled.Container data-testid='header-container'>
        <Link href='/' passHref>
          <Styled.Title data-testid='header-title'>
            { t('header') }
          </Styled.Title>
        </Link>
      </Styled.Container>
    </Styled.Header>
  )
}

export default Header
