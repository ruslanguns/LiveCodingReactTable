import { useEffect } from 'react'
import { usePagination, useSortBy, useTable } from 'react-table'
import { NumberParam, StringParam, withDefault } from 'serialize-query-params'
import { useQueryParams } from 'use-query-params'
import sortToString from '../helpers/sortToString'

export default function useReactTable({ defaultPageSize = 10, data, columns, pageCount }) {
  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    size: withDefault(NumberParam, defaultPageSize),
    sort: withDefault(StringParam, ''),
  })

  const table = useTable(
    {
      initialState: {
        pageSize: isNaN(query.size) ? defaultPageSize : query.size,
        pageIndex: isNaN(query.page) ? 0 : query.page - 1,
        sortBy: [
          {
            id:
              query.sort.charAt(0) === '-'
                ? query.sort.substring(1)
                : query.sort,
            desc: query.sort.charAt(0) === '-',
          },
        ],
      },
      columns,
      data,
      manualSortBy: true,
      manualPagination: true,
      autoResetPage: false,
      autoResetSortBy: false,
      pageCount,
    },
    useSortBy,
    usePagination
  )

  const { pageSize, pageIndex, sortBy } = table.state

  // Set query pageSize
  useEffect(() => {
    setQuery({ size: pageSize })
  }, [pageSize, setQuery])

  // Set query page
  useEffect(() => {
    setQuery({ page: pageIndex + 1 })
  }, [setQuery, pageIndex])

  // Set query sortBy
  useEffect(() => {
    setQuery({ sort: sortToString(sortBy) })
  }, [query.sort, setQuery, sortBy])

  return table
}
