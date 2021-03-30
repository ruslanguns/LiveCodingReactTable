import { useCallback, useEffect, useState } from "react"
import { useQuery } from "react-query"
import sortToString from "../helpers/sortToString"
import fetchRawgGames from "../services/fetchRawgGames"


export default function useRawGames() {

  const [pageIndex, setPageIndex] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [sort, setSort] = useState('')
  const [pageCount, setPageCount] = useState(0)
  
  const handleOnFetch = useCallback(
    ({sortBy, pageSize, pageIndex}) => {
      setSort(sortToString(sortBy))
      setPageSize(pageSize)
      setPageIndex(pageIndex)
    },[]
  )

  const query = useQuery(
    ['rawgGames', pageIndex, pageSize, sort ],
    () => fetchRawgGames(pageIndex, pageSize, sort)
  )

  useEffect(() => {
    if(query.data) {
      const totalPages = Math.ceil((query.data?.count) / pageSize) + 1;
      setPageCount(totalPages)
    }
  }, [query.data, setPageCount, pageSize])

  return {
    pageCount,
    handleOnFetch,
    ...query,
  }

}