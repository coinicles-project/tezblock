export interface TableState<T> {
  data: T[]
  pagination: {
    currentPage: number
    selectedSize: number
    pageSizes: [number, number, number, number]
    total?: number
  }
  loading: boolean
  sortingDirection: string
  sortingValue: string
}

export const getInitialTableState = (): TableState<any> => ({
  data: [],
  pagination: {
    currentPage: 1,
    selectedSize: 10,
    pageSizes: [5, 10, 20, 50],
    total: undefined
  },
  loading: false,
  sortingDirection: undefined || 'asc' || 'desc',
  sortingValue: undefined
})
