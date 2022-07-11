import { render } from 'src/util/test-utils'

import Layout, { ILayout } from '../Layout'

const defaultProps: ILayout = {
  children: <></>
}

const setupComponent = (props = {}) => (
  render(<Layout {...defaultProps} { ...props } />)
)

describe('Layout', () => {
  describe('renders as expected', () => {
    it('renders the `Layout`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('page')).toBeInTheDocument()
    })

    it('renders the `Main`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('page-main')).toBeInTheDocument()
    })

    it('renders the `children`', () => {
      const children = <div data-testid='page-children'>children</div>
      const { getByTestId } = setupComponent({ children })
      expect(getByTestId('page-children')).toBeInTheDocument()
    })
  })
})
