import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StoreProvider from './context/StoreProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App /> 
        </BrowserRouter>
      </QueryClientProvider>
    </StoreProvider>
  </React.StrictMode>
);

