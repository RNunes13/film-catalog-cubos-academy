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

    it('should render the first circle', () => {
      const { getByTestId } = setupComponent()
      const circleSize = '20'
      const circle = getByTestId('averageBar-circle1')
      expect(circle).toBeInTheDocument()
      expect(circle.getAttribute('r')).toBe(circleSize)
      expect(circle.getAttribute('cx')).toBe(circleSize)
      expect(circle.getAttribute('cy')).toBe(circleSize)
    })

    it('should render the second circle', () => {
      const props: IAverageBar = { value: 5.5, color: COLORS.secondary }
      const { getByTestId } = setupComponent(props)

      const circleSize = '20'
      const circle = getByTestId('averageBar-circle2')

      expect(circle).toBeInTheDocument()
      expect(circle.getAttribute('r')).toBe(circleSize)
      expect(circle.getAttribute('cx')).toBe(circleSize)
      expect(circle.getAttribute('cy')).toBe(circleSize)
      expect(circle.getAttribute('color')).toBe(COLORS.secondary)
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
