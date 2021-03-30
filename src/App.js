import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import { QueryParamProvider } from 'use-query-params';
import RawgGames from './RawgGames';
import { ReactQueryDevtools } from 'react-query/devtools';

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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryParamProvider>
        <GlobalStyles>
          <HeaderWrapper>
            <h1>Learn React Table</h1>
          </HeaderWrapper>
          {/* <Movies /> */}
          <RawgGames />
        </GlobalStyles>
      </QueryParamProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
