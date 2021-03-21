import React from 'react'
import styled from 'styled-components'

const Selector = styled.div`
  display: block;
  select {
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    box-sizing: border-box;
    margin: 10px;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    background-color: #fff;
  }
` 

export const TableSize = ({value, options=[10,25,50,100], handleOnChange}) => {
  return (
    <Selector>
      Elementos por página:
      <select value={value} onChange={handleOnChange}>
        {
          options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))
        }
      </select>
    </Selector>
  )
}
