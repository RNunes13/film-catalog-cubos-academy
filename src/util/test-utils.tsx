import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme, IThemeProps } from 'theme'

interface IProviders {
  children: any;
  theme: IThemeProps;
}

export const Providers: FC<IProviders> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {
  wrapper: Providers as React.FC,
  ...options,
})

export * from '@testing-library/react'
export * from '@testing-library/jest-dom'

export { customRender as render }
