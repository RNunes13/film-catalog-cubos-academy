const path = require('path')

const LOCALES = ['pt-BR', 'en']
const DEFAULT_LOCALE = 'pt-BR'

module.exports = {
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  i18n: {
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    localeDetection: false,
    localePath: path.resolve('./public/static/locales')
  }
}
