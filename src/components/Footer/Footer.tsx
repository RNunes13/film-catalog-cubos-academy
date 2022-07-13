import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import * as Styled from './Footer.styles'
import { useRouter } from 'next/router'

export const AUTHOR = {
  name: 'RNunes',
  link: 'https://rodrigonunes.dev/'
}

const LOCALES_ICON: { [key: string]: React.ReactElement } = {
  'pt-BR': <Styled.Brazil />,
  'en': <Styled.Usa />,
}

export const Footer = () => {
  const { t, i18n: { language }} = useTranslation('common')
  const { pathname } = useRouter()

  const year = new Date().getFullYear()

  const localeKeys = Object.keys(LOCALES_ICON).filter(k => k !== language)

  return (
    <Styled.Footer data-testid='footer'>
      <Styled.Container data-testid='footer-container'>
        <Styled.Copyright>
          {`© ${year} | ${t('footer.copyright')}`}

          <Link href={AUTHOR.link} passHref>
            <Styled.DevelopedBy data-testid='footer-link' target='_blank'>
              {AUTHOR.name}
            </Styled.DevelopedBy>
          </Link>
        </Styled.Copyright>

        <Styled.Locales>
          <Styled.LocaleInfo>{ t('footer.locale') }</Styled.LocaleInfo>
          {localeKeys.map(locale => (
            <Link key={locale} href={{ pathname }} locale={locale} passHref>
              <Styled.LocaleAnchor>{ LOCALES_ICON[locale] }</Styled.LocaleAnchor>
            </Link>
          ))}
        </Styled.Locales>
      </Styled.Container>
    </Styled.Footer>
  )
}

export default Footer
