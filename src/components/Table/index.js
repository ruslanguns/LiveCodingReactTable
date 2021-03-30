import React, { useEffect } from 'react'
import useReactTable from '../../hooks/useReactTable';
import { TableSize } from './TableSize';
import { TableWrapper, TableHeader, PaginatorWrapper, SortIcon } from './TableStyles'


export default function Table({
  data = [],
  columns = [],
  isLoading = false,
  defaultPageSize = 6,
  pageCount,
  handleOnFetch
}) {

  const {
    headerGroups,
    getTableProps,
    page,
    prepareRow,
    nextPage,
    previousPage,
    getTableBodyProps,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy }
  } = useReactTable({ data, columns, defaultPageSize, pageCount })

  useEffect(() => {
    handleOnFetch({sortBy, pageSize, pageIndex})
  }, [handleOnFetch, sortBy, pageSize, pageIndex])

  if (!columns.length) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>💬 No hay datos que mostrar</p>
      </div>
    )
  }

  return (
    <>
      <TableHeader>
        <TableSize
          value={pageSize}
          options={[3, 6, 10, 20]}
          handleOnChange={(e) => setPageSize(+e.target.value)}
        />
      </TableHeader>
      <TableWrapper>
        <table {...getTableProps()}>
          <thead>
            {
              headerGroups.map(({ getHeaderGroupProps, headers }) => (
                <tr {...getHeaderGroupProps()}>
                  {
                    headers.map(({
                      getHeaderProps,
                      getSortByToggleProps,
                      isSorted,
                      isSortedDesc,
                      render
                    }) => (
                      <th {...getHeaderProps(getSortByToggleProps())}>
                        { render('Header')}
                        <SortIcon dangerouslySetInnerHTML={{
                          __html: isSorted
                            ? isSortedDesc ? '&uarr;' : '&darr;'
                            : ''
                        }} />
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          <tbody {...getTableBodyProps()}>
            {
              !isLoading
                ? page.map(row => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {
                          row.cells.map(({ getCellProps, render }) => (
                            <td {...getCellProps()}>{render('Cell')}</td>
                          ))
                        }
                      </tr>
                    )
                  })
                : <tr>
                    <td
                      colSpan={columns.length}
                      style={{ textAlign: 'center'}}
                    >
                      Loading...
                    </td>
                  </tr>
            }
          </tbody>
        </table>
      </TableWrapper>
      {
        !isLoading && (
          <PaginatorWrapper>
            <div className="page-info">Pagina {pageIndex + 1} de {pageOptions.length}</div>
            <div>
              <button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>&laquo;</button>
              <button disabled={!canPreviousPage} onClick={previousPage}>&lsaquo;</button>
              <button disabled={!canNextPage} onClick={nextPage}>&rsaquo;</button>
              <button disabled={!canNextPage} onClick={() => gotoPage(pageOptions.length - 1)}>&raquo;</button>
            </div>
          </PaginatorWrapper>
        )
      }
    </>
  )
}
