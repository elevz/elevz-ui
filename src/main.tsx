import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastProvider } from '@lib/index.ts'
import { ComponentProvider } from '@lib/provider/ComponentProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ComponentProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ComponentProvider>
  </React.StrictMode>,
)
