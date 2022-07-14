import { renderHook } from '@testing-library/react-hooks'

import { Providers } from 'util/test-utils'
import { usePagination, IPagination, DOTS } from '../usePagination'

const defaultProps: IPagination = {
  currentPage: 1,
  totalPages: 20,
}

const buildHook = (props?: Partial<IPagination>) => {
  return renderHook(usePagination, { 
    wrapper: Providers as any,
    initialProps: { ...defaultProps, ...props }
  })
}

describe('usePagination  Hook', () => {
  it('should return the initial state', () => {
    const { result: { current }} = buildHook()
    expect(current).toStrictEqual([1, 2, 3, 4, 5, DOTS, 20])
  })

  it('should return array with 2 sibling', () => {
    const { result: { current }} = buildHook({ siblingCount: 2 })
    expect(current).toStrictEqual([1, 2, 3, 4, 5, 6, 7, DOTS, 20])
  })

  it('should return array with 2 sibling and on current page 6', () => {
    const { result: { current }} = buildHook({ currentPage: 6, siblingCount: 2 })
    expect(current).toStrictEqual([1, DOTS, 4, 5, 6, 7, 8, DOTS, 20])
  })
})
