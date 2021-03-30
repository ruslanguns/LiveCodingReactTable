import React from 'react'
import Table from './components/Table'
import columnsRawgGames from './config/columnsRawgGames'
import useRawGames from './hooks/useRawgGames'

const RawgGames = () => {

  const {
    data,
    isLoading,
    pageCount,
    handleOnFetch,
  } = useRawGames()

  return (
    <Table
      data={data?.results || []}
      columns={columnsRawgGames}
      isLoading={isLoading}
      pageCount={pageCount}
      handleOnFetch={handleOnFetch}
    />
  )
}

export default RawgGames
