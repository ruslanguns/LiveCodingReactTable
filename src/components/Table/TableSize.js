import React from 'react'
import { TableSelector } from '../styled/TableStyles'

export const TableSize = ({value, options=[10,25,50,100], handleOnChange}) => {
  return (
    <TableSelector>
      Elementos por página:
      <select value={value} onChange={handleOnChange}>
        {
          options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))
        }
      </select>
    </TableSelector>
  )
}
