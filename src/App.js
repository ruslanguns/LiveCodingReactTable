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

  h1  {
    font-weight: normal;
    font-size: 2em;
  }
`

const HeaderWrapper = styled.header`
  h1 {
    text-align: center;
    font-weight: 600px;
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
