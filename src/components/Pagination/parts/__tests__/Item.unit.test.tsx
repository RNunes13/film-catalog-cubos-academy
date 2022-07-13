import { render, fireEvent } from 'util/test-utils'
import { DOTS } from 'hooks/usePagination';

import { Item, IItem } from '../Item/Item'

const defaultProps = {
  content: 'content',
  onClick: jest.fn(),
}

const setupComponent = (props?: Partial<IItem>) => render(
  <Item {...defaultProps} {...props} />
)

describe('Item', () => {
  describe('renders as expected', () => {
    it('should render the `Dots` component', () => {
      const { getByTestId } = setupComponent({ content: DOTS })
      const dots = getByTestId('pagination-dots')
      expect(dots).toBeInTheDocument()
      expect(dots.textContent).toBe(DOTS)
    })

    it('should render the `Item` component', () => {
      const page = '5'
      const { getByTestId } = setupComponent({ content: page })
      const item = getByTestId('pagination-item')
      expect(item).toBeInTheDocument()
      expect(item.textContent).toBe(page)
    })

    it('should call the given function on the non-active item click', () => {
      const onClick = jest.fn()
      const { getByTestId } = setupComponent({ onClick })
      const item = getByTestId('pagination-item')

      fireEvent.click(item)

      expect(onClick).toHaveBeenCalled()
    })

    it('should render the `Item` component in active state', () => {
      const { getByTestId } = setupComponent({ selected: true })
      const item = getByTestId('pagination-active')
      expect(item).toBeInTheDocument()
    })

    it('should not call click function on active item', () => {
      const onClick = jest.fn()
      const { getByTestId } = setupComponent({ onClick, selected: true })
      const item = getByTestId('pagination-active')

      fireEvent.click(item)

      expect(onClick).not.toHaveBeenCalled()
    })
  })
})
