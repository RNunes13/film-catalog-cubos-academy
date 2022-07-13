import { render } from 'util/test-utils'

import { Footer, AUTHOR } from '../Footer'

const setupComponent = () => render(<Footer />)

describe('Footer', () => {
  const year = new Date().getFullYear()
  
  describe('renders as expected', () => {
    it('renders the `Footer`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('footer')).toBeInTheDocument()
    })

    it('renders the `Container`', () => {
      const { getByTestId } = setupComponent()
      const container = getByTestId('footer-container')
      expect(container).toBeInTheDocument()
      expect(container.textContent).toBe(`© ${year} | footer.copyright${AUTHOR.name}footer.locale`)
    })

    it('should render the link correctly', () => {
      const { getByTestId } = setupComponent()
      const link = getByTestId('footer-link')
      expect(link).toBeInTheDocument()
      expect(link.getAttribute('href')).toBe(AUTHOR.link)
      expect(link.getAttribute('target')).toBe('_blank')
    })
  })
})
