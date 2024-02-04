import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { ElevzProvider } from "elevz-ui"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ElevzProvider>
      <App />
    </ElevzProvider>
  </React.StrictMode>,
)
