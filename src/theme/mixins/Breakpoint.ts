import { IThemeProps } from 'theme/Theme'

interface IMixinProps {
  theme: IThemeProps;
}

export const xSmall = () => (props: IMixinProps): string => (
  `@media (max-width: ${props.theme.breakpoints.xsmall})`
)

export const small = () => (props: IMixinProps): string => (
  `@media (max-width: ${props.theme.breakpoints.small})`
)

export const medium = () => (props: IMixinProps): string => (
  `@media (max-width: ${props.theme.breakpoints.medium})`
)

export const large = () => (props: IMixinProps): string => (
  `@media (max-width: ${props.theme.breakpoints.large})`
)

export const xLarge = () => (props: IMixinProps): string => (
  `@media (min-width: ${props.theme.breakpoints.xlarge})`
)

export const isMobile = () => (props: IMixinProps): string => (
  `@media only screen and (max-width: ${props.theme.breakpoints.small})`
)

export const isTablet = () => (props: IMixinProps): string => (
  `@media only screen and (min-width: ${props.theme.breakpoints.small}) and (max-width: ${props.theme.breakpoints.medium})`
)

export const isDesktop = () => (props: IMixinProps): string => (
  `@media only screen and (min-width: ${props.theme.breakpoints.medium})`
)
