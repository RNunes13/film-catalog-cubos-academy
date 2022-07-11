import React from 'react'
import { usePagination } from 'hooks/usePagination'

import * as Styled from './Pagination.styles'

interface IPagination {
  className?: string;
  totalPages: number;
  siblingCount?: number;
  currentPage: number;
  onPageChange: (n: number) => void;
}

export const Pagination: React.FC<IPagination> = ({
  className,
  totalPages,
  currentPage,
  siblingCount = 1,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount,
  }) || []

  return (
    <Styled.Pagination className={className}>
      {paginationRange.map((page, idx) => (
        <Styled.PaginationItem
          key={idx}
          content={page}
          selected={page === currentPage}
          onClick={() => onPageChange(parseInt(page as string, 10))}
        />
      ))}
    </Styled.Pagination>
  )
}

export default Pagination
