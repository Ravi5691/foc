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
import Footer from './components/footer.jsx'
import Dashboard from './components/dashboard.jsx'
import SemiCircleProgressBar from './components/taskbar.jsx'
import Gauge from './components/taskbar.jsx'
import TodoStatus from './components/todoStatus.jsx'
import ToDoList from './components/todoStatus.jsx'
import EditorInfo from './components/editorinfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    <Dashboard/>
  </StrictMode>,
)
