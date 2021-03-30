import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { QueryParamProvider } from 'use-query-params';
import RawgGames from './RawgGames';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalStyles from './components/GlobalStyles';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryParamProvider>
        <GlobalStyles>
          <header>
            <h1>React Fetched Datatable</h1>
          </header>
          <RawgGames />
        </GlobalStyles>
      </QueryParamProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
