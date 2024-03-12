import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './Routes/index.jsx'
import Counter from './Components/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRoutes>
      </MyRoutes>
    </BrowserRouter>
  </React.StrictMode>,
)
