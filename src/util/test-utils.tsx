import type { RenderOptions } from '@testing-library/react'
import React, { FC, ReactElement } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { theme, IThemeProps } from 'theme'

interface IProviders {
  children: any;
  theme: IThemeProps;
}

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: { escapeValue: false },
    resources: { en: { translations: {} } },
  })

export const Providers: FC<IProviders> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {/* <I18nextProvider i18n={i18n}> */}
      {children}
    {/* </I18nextProvider> */}
  </ThemeProvider>
)

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {
  wrapper: Providers as React.FC,
  ...options,
})

// eslint-disable-next-line import/export
export * from '@testing-library/react'
export * from '@testing-library/jest-dom'

// eslint-disable-next-line import/export
export { customRender as render }
