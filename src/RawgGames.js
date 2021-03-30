import React from 'react'
import Table from './components/Table'
import columnasTablaRawgGames from './config/columnasTablaRawgGames'
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
      columns={columnasTablaRawgGames}
      isLoading={isLoading}
      pageCount={pageCount}
      handleOnFetch={handleOnFetch}
    />
  )
}

export default RawgGames
