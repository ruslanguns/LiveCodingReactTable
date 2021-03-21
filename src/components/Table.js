import React from 'react'
import styled from 'styled-components'
import MOVIES from '../data/MOVIES.json';

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-left: 20px;

  table {
    background-color: #34495E;
    color: white;
    border: 1px solid #ddd;
    border-radius: 0.7em;
    

    th, td {
      padding: .5em 1em;
    }
    
    th, td:before {
      color: #dd5;
      text-align: left
    }
  }
`

export const Table = () => {



  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Género</th>
            <th>Estreno</th>
            <th>Director</th>
            <th>Duración</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {
            MOVIES.map(({ id, cost, director, genre, movie_title, duration, year }) => (
              <tr key={id}>
                <td>{ movie_title }</td>
                <td>{ genre }</td>
                <td>{ year }</td>
                <td>{ director }</td>
                <td>{ duration }</td>
                <td>{ cost }</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </TableWrapper>
  )
}
