import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ElevzProvider } from '@lib/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ElevzProvider>
      <App />
    </ElevzProvider>
  </React.StrictMode>,
)
