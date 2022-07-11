import { IThemeProps } from 'theme/Theme'

interface IMixinProps {
  theme: IThemeProps;
}

export const h0 = () => (props: IMixinProps): string => `
  font-family: ${props.theme.fonts.secondaryFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
`

export const h1 = () => (props: IMixinProps): string => `
  font-family: ${props.theme.fonts.secondaryFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
`

export const h2 = () => (props: IMixinProps): string => `
  font-family: ${props.theme.fonts.secondaryFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`

export const h3 = () => (props: IMixinProps): string => `
  font-family: ${props.theme.fonts.secondaryFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
`

export const h4 = () => (props: IMixinProps): string => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`

export const h5 = () => (props: IMixinProps): string => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`
