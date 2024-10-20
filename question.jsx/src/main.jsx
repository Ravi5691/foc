import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuestionAsking from './components/questionAsking.jsx'
import Pricing from './components/pricing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuestionAsking/>
    {/* <Pricing/> */}
  </StrictMode>,
)
