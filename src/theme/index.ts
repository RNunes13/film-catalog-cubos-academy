// Mixins
import * as gridMixins from './mixins/Grid';
import * as breakpointsMixins from './mixins/Breakpoint';
import * as typographyMixins from './mixins/Typography';

export const mixins:any = {
  ...gridMixins,
  ...breakpointsMixins,
  ...typographyMixins,
};

export * as gridMixins from './mixins/Grid';
export * as breakpointsMixins from './mixins/Breakpoint';
export * as typographyMixins from './mixins/Typography';

// Theme
export { theme } from 'theme/Theme';
export type { IThemeProps } from 'theme/Theme';
