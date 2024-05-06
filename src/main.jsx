import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Layout/App/App.jsx'
import './index.scss'
import {ThemeProvider} from './ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
