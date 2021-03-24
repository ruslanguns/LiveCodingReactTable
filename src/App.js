import React from 'react'
import styled from 'styled-components';
import { Table } from './components/Table';

const GlobalStyles = styled.div`
  box-sizing: border-box;
  font-family: Montserrat, sans-serif;

  body, html {
    padding: 0;
    margin: 0;
  }
`

const HeaderWrapper = styled.header`
  h1 {
    font-size: 2em;
    text-align: center;
    font-weight: normal;
  }
`

function App() {
  return (
    <GlobalStyles>
      <HeaderWrapper>
        <h1>Learn React Table</h1>
      </HeaderWrapper>
      <Table />
    </GlobalStyles>
  );
}

export default App;
