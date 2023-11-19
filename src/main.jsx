import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/Router'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-screen-2xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>

      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>,
)
