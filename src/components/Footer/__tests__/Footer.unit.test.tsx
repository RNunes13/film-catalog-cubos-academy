import { render } from 'util/test-utils'

import { Footer, AUTHOR } from '../Footer'

const setupComponent = () => render(<Footer />)

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn(k => k),
    i18n: { language: 'pt-BR' }
  }),
}))

describe('Footer', () => {
  const year = new Date().getFullYear()

  describe('renders as expected', () => {
    it('renders the `Footer`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('footer')).toBeInTheDocument()
    })

    it('renders the `Copyright`', () => {
      const { getByTestId } = setupComponent()
      const container = getByTestId('footer-copyright')
      expect(container).toBeInTheDocument()
      expect(container.textContent).toBe(`© ${year} | footer.copyright${AUTHOR.name}`)
    })

    it('should render the link correctly', () => {
      const { getByTestId } = setupComponent()
      const link = getByTestId('footer-link')
      expect(link).toBeInTheDocument()
      expect(link.getAttribute('href')).toBe(AUTHOR.link)
      expect(link.getAttribute('target')).toBe('_blank')
    })

    it('should render the locales correctly', () => {
      const { getByTestId } = setupComponent()
      const locales = getByTestId('footer-locales')
      expect(locales).toBeInTheDocument()
      expect(locales.textContent).toBe('footer.locale')
    })
  })
})
