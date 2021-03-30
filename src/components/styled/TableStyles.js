import styled from 'styled-components'

export const TableHeader = styled.div`
  display: flex;
  justify-content: center;
`

export const SortIcon = styled.span`
  float: right;
`

export const TableWrapper = styled.div`
  overflow-x: auto;
  display: relative;
  
  table {
    margin: auto;
    border-collapse: collapse;
    background-color: #34495E;
    color: white;
    border-radius: 0.7em;
    

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

export const PaginatorWrapper = styled.div`
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

export const TableSelector = styled.div`
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