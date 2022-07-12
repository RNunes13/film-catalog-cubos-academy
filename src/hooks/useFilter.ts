export const ITEMS_PER_PAGE = 5
export const API_PAGES_LIMIT = 500
export const LOCAL_PAGE_KEY = 'localPage'

export interface IFilterProps {
  page: number;
  results: any[];
  localPage: string;
  totalPages: number;
}

export interface IFilter<Resource> {
  results: Resource[];
  currentPage: number;
  totalPages: number;
  handleLocalPage(page: number): void;
}

export function useFilter<R = {}>(props: IFilterProps): IFilter<R> {
  const quotient = props.results.length / ITEMS_PER_PAGE
  const localPage = parseInt(props.localPage) || null
  const currentPage = localPage || ((props.page - 1) * quotient) + 1
  const remainder = currentPage % quotient
  const totalPages = props.totalPages * quotient

  const from = (remainder || quotient) * ITEMS_PER_PAGE
  const to = from - ITEMS_PER_PAGE

  const results = props.results.slice(to, from)

  const handleLocalPage = (page: number) => {
    const url = new URL(window.location.href)
    const expectedApiPage = Math.trunc(page / quotient) + (page % quotient === 0 ? -1 : 0) + 1

    url.searchParams.set(LOCAL_PAGE_KEY, page.toString())

    if (props.page !== expectedApiPage) {
      url.searchParams.set('page', expectedApiPage.toString())
    }

    window.location.href = url.href
  }

  return {
    results,
    currentPage,
    totalPages,
    handleLocalPage,
  }
}
