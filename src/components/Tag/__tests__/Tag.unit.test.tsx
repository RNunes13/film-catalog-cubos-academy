import { render } from 'util/test-utils'

import { Tag, ITag } from '../Tag'

const defaultProps: ITag = {
  text: 'tag text',
}

const setupComponent = (props?: Partial<ITag>) => render(<Tag {...defaultProps} {...props} />)

describe('Tag', () => {
  describe('renders as expected', () => {
    it('renders the `Tag`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('tag')).toBeInTheDocument()
    })

    it('should render the given text', () => {
      const text = 'Test text'
      const { getByText } = setupComponent({ text })
      expect(getByText(text)).toBeInTheDocument()
    })

    it('should render the endAdornment', () => {
      const endAdornment = <span data-testid='endAdornment'>endAdornment</span>
      const { getByTestId } = setupComponent({ endAdornment })
      expect(getByTestId('endAdornment')).toBeInTheDocument()
    })
  })
})
