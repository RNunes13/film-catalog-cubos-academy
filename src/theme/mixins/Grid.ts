import { IThemeProps } from 'theme'

interface IMixinProps {
  theme: IThemeProps;
}

const gridBase = () => (props: IMixinProps): string => `
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding-right: ${props.theme.spaces.space3};
  padding-left: ${props.theme.spaces.space3};
  margin-right: auto;
  margin-left: auto;
`

export const grid940 = () => (props: IMixinProps): string => `
  ${gridBase()(props)}
  max-width: 1000px;
`

export const grid1290 = () => (props: IMixinProps): string => `
  ${gridBase()(props)}
  max-width: 1350px;
`

export const grid12 = () => (props: IMixinProps): string => `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: ${props.theme.spaces.space2};
  grid-row-gap: ${props.theme.spaces.space2};
  justify-items: stretch;
`

export const defaultGrid = () => (props: IMixinProps): string => `
  ${grid940()(props)}
`
