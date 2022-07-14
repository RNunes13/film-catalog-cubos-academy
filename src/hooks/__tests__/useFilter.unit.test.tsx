import { renderHook } from '@testing-library/react-hooks'

import { Providers } from 'util/test-utils'
import { useFilter, IFilterProps, ITEMS_PER_PAGE } from '../useFilter'

const defaultProps: IFilterProps = {
  localPage: '',
  page: 1,
  results: [],
  totalPages: 0,
}

const getMockResults = (n = 0) => [...Array(n).fill(null).keys()]
const getQuotient = (n = 0) => n / ITEMS_PER_PAGE

const buildHook = (props?: Partial<IFilterProps>) => {
  return renderHook(useFilter, { 
    wrapper: Providers as any,
    initialProps: { ...defaultProps, ...props }
  })
}

describe('useFilter  Hook', () => {
  it('should return empty initial values', () => {
    const { result: { current }} = buildHook()

    expect(current).toMatchObject({
      currentPage: 1,
      results: [],
      totalPages: 0,
      handleLocalPage: expect.any(Function),
    })
  })

  it('should return the results within the stipulated limit', () => {
    const results = getMockResults(20)
    const totalPages = 4

    const { result: { current }} = buildHook({ results, totalPages })

    expect(current).toMatchObject({
      currentPage: 1,
      results: results.slice(0, 5),
      handleLocalPage: expect.any(Function),
      totalPages: getQuotient(results.length) * totalPages,
    })
  })

  it('should return the results of the third segment of the array', () => {
    const results = getMockResults(20)
    const totalPages = 4

    const { result: { current }} = buildHook({ results, totalPages, localPage: '3' })

    expect(current).toMatchObject({
      currentPage: 3,
      handleLocalPage: expect.any(Function),
      results: results.slice(ITEMS_PER_PAGE * 2, ITEMS_PER_PAGE * 3),
      totalPages: getQuotient(results.length) * totalPages,
    })
  })
})
