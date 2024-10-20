import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Faq from './components/faq.jsx'
import ImageSwitcher from './components/imageStw.jsx'
import Portfolio from './components/portfolio.jsx'
import BarAnimation from './components/barAnimation.jsx'
import MultiStepForm from './components/QuesAsking/multiStepForm.jsx'
import QuestionAsking from './components/QuesAsking/questionAsking.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ImageSwitcher/> */}
    {/* <Faq/> */}
    {/* <Portfolio/> */}
    {/* <App/> */}
    {/* <BarAnimation/> */}
    <QuestionAsking/>

  </StrictMode>,
)
