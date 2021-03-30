import React from 'react'
import Table from './components/Table'
import ColumnasTablaPeliculas from './config/columnasTablaPeliculas'

import MOVIES from './data/MOVIES.json'


const Movies = () => {
  return (
    <Table data={MOVIES} columns={ColumnasTablaPeliculas} />
  )
}

export default Movies
