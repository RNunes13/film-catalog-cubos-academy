import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import * as Styled from './Footer.styles'

export const AUTHOR = {
  name: 'RNunes',
  link: 'https://rodrigonunes.dev/'
}

export const Footer = () => {
  const { t } = useTranslation('common')

  const year = new Date().getFullYear()

  return (
    <Styled.Footer data-testid='footer'>
      <Styled.Container data-testid='footer-container'>
        {`© ${year} | ${t('footer')}`}

        <Link href={AUTHOR.link} passHref>
          <Styled.DevelopedBy data-testid='footer-link' target='_blank'>
            {AUTHOR.name}
          </Styled.DevelopedBy>
        </Link>
      </Styled.Container>
    </Styled.Footer>
  )
}

export default Footer
