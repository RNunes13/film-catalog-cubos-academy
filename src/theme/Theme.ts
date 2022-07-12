enum COLORS {
  primary = 'primary',
  secondary = 'secondary',

  redOrange = 'redOrange',
  pacificBlue = 'pacificBlue',

  /** Base */
  base_100 = 'base_100',
  base_80 = 'base_80',
  base_60 = 'base_60',
  base_40 = 'base_40',
  base_20 = 'base_20',
  base_10 = 'base_10',
  base_0 = 'base_0',
}

interface IColorsProps {
  primary: string
  secondary: string

  base_100: string
  base_80: string
  base_60: string
  base_40: string
  base_20: string
  base_10: string
  base_0: string
}

interface IZindexProps {
  base: number
  top: number
  modal: number
}

interface ISpacingProps {
  space1: string
  space2: string
  space3: string
  space4: string
  space5: string
}

interface IBreakpointsProps {
  xsmall: string
  small: string
  medium: string
  large: string
  xlarge: string
}

interface IFontsProps {
  baseFontFamily: string
  secondaryFontFamily: string
}

interface IThemeProps {
  colors: IColorsProps
  index: IZindexProps
  spaces: ISpacingProps
  breakpoints: IBreakpointsProps
  fonts: IFontsProps
}

const theme: IThemeProps = {
  colors: {
    primary: '#25252f',
    secondary: '#ff007b',

    base_100: '#000000',
    base_80: '#2c2c2c',
    base_60: '#858585',
    base_40: '#b3b3b3',
    base_20: '#ebebeb',
    base_10: '#f4f4f4',
    base_0: '#FFFFFF',
  },
  index: {
    base: 0,
    top: 10,
    modal: 100,
  },
  spaces: {
    space1: '10px',
    space2: '20px',
    space3: '30px',
    space4: '60px',
    space5: '90px',
  },
  breakpoints: {
    xsmall: '576px',
    small: '768px',
    medium: '992px',
    large: '1200px',
    xlarge: '1350px',
  },
  fonts: {
    secondaryFontFamily: 'Roboto',
    baseFontFamily:
      '"Roboto", BlinkMacSystemFont, -apple-system, sans-serif',
  },
}

export default theme

export {
  theme,
  COLORS,
}

export type {
  IThemeProps,
  IColorsProps,
  ISpacingProps,
  IBreakpointsProps,
  IFontsProps,
}
