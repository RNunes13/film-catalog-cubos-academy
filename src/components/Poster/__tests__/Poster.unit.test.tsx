import { render } from 'util/test-utils'

import { Poster, IPoster, POSTER_SIZES } from '../Poster'

const defaultProps: IPoster = {
  title: 'title',
  path: 'path',
}

const setupComponent = (props?: Partial<IPoster>) => render(<Poster {...defaultProps} {...props} />)

describe('Poster', () => {
  describe('renders as expected', () => {
    it('renders the `Poster`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('poster')).toBeInTheDocument()
    })

    it('should render the `Image` to the expected size', () => {
      const path = 'fake-path'
      const title = 'fake title'
      const posterSize = POSTER_SIZES.w342
      const { getByTestId } = setupComponent({ title, path, posterSize })
      const poster = getByTestId('poster-image')

      expect(poster).toBeInTheDocument()
      expect(poster.getAttribute('alt')).toBe(title)
      expect(poster.getAttribute('src')).toBe(`https://image.tmdb.org/t/p/${posterSize}${path}`)
    })
  })
})
