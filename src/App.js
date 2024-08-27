import React from 'react';
import './App.css';
import { AuthProvider } from './context/auth-context';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <ConfigProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </QueryClientProvider>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;