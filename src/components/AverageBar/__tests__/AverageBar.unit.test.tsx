import { render } from 'util/test-utils'

import { COLORS } from 'theme/Theme';
import { AverageBar, IAverageBar } from '../AverageBar'

const defaultProps: IAverageBar = {
  value: 7.5
}

const setupComponent = (props?: Partial<IAverageBar>) => render(
  <AverageBar {...defaultProps} {...props} />
)

describe('AverageBar', () => {
  describe('renders as expected', () => {
    it('renders the `AverageBar`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('averageBar')).toBeInTheDocument()
    })

    it('renders the `CircularBar`', () => {
      const props: IAverageBar = { color: COLORS.secondary, value: 6.8 }
      const { getByTestId } = setupComponent(props)
      const circle = getByTestId('averageBar-circular')
      expect(circle).toBeInTheDocument()
      expect(circle.getAttribute('color')).toBe(props.color)
      expect(circle.getAttribute('value')).toBe(`${props.value * 10}`)
    })

    it('should render the percentage value', () => {
      const props: IAverageBar = { value: 6.5 }
      const { getByTestId } = setupComponent(props)
      const number = getByTestId('averageBar-number')

      expect(number).toBeInTheDocument()
      expect(number.textContent).toBe(`${props.value * 10}`)
    })
  })
})
