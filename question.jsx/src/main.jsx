import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Pricing from './components/pricing.jsx'
import ProjectForm from './components/asking.jsx'
import MultiStepForm from './components/taking.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Pricing/> */}
    {/* <ProjectForm/> */}
    
    <App/> 
  </StrictMode>,
)
