import React from 'react'
import { usePagination, useSortBy, useTable } from 'react-table';
import styled from 'styled-components'
import { ColumnasPeliculas } from '../config/columns';
import MOVIES from '../data/MOVIES.json';
import { TableSize } from './TableSize';

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-left: 20px;
  display: flex;
  justify-content: center;

  table {
    border-collapse: collapse;
    background-color: #34495E;
    color: white;
    border-radius: 0.7em;
    width: 90%;
    

    th, td {
      padding: .5em 1em;
    }

    td {
      white-space: nowrap;
      overflow: hidden; 
      text-overflow: ellipsis;
    }
    
    th, td:before {
      color: #dd5;
      text-align: left
    }

    tr:hover {
      background-color: rgba(0,0,0,0.5);
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`
const Paginador = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 20px;
  flex-wrap: wrap-reverse;
  font-size: 2rem;
  
  .page-info, button {
    padding: 10px; 
  }

  button {
    background-color: orange;
    color: #34495E;
    border: none;
    outline: none;
    transition: all .3s; 
    margin: 0 10px;
    width: 70px;
    border-radius: 20px;
    font-size: 2rem;

    &:hover { 
      background-color: #34495E;
      color: #dd5;
      cursor: pointer;
    }

    &:disabled {
      background-color: grey;
      color: lightgray;
      cursor: default;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.2rem;

    button {
      justify-content: center;
      margin: 0 2px;
      width: 2rem;
      font-size: 1rem;
    }
  }
`
const TableHeader = styled.div`
  display: flex;
  justify-content: center;
`

export const Table = () => {
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
    state: { pageIndex, pageSize },

  } = useTable({
    initialState: {
      pageSize: 3,
    },
    columns: ColumnasPeliculas,
    data: MOVIES
  }, useSortBy, usePagination)
  
  const handlePageSizeOnChange = (e) => {
    setPageSize(+e.target.value)
  }

  return (
    <>
      <TableHeader>
        <TableSize
          value={pageSize}
          options={[3,6,10,20]}
          handleOnChange={handlePageSizeOnChange}
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
                        <span dangerouslySetInnerHTML={{
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
              page.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map(({ getCellProps, render }) => (
                        <td {...getCellProps()}>{ render('Cell') }</td>
                      ))
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </TableWrapper>
      <Paginador>
        <div className="page-info">Pagina {pageIndex+1} de { pageOptions.length }</div>
        <div>
          <button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>&laquo;</button>
          <button disabled={!canPreviousPage} onClick={previousPage}>&lsaquo;</button>
          <button disabled={!canNextPage} onClick={nextPage}>&rsaquo;</button>
          <button disabled={!canNextPage} onClick={() => gotoPage(pageOptions.length -1)}>&raquo;</button>
        </div>
      </Paginador>
    </>
    
  )
}
