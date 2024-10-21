import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Dashboard from './components/Dashboard/dashboard.jsx'
import LightCursor from './components/cursorEffect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LightCursor/> */}
    <App/>
    {/* <Dashboard/> */}
  </StrictMode>,
)
