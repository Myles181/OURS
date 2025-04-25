import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OursTokenApp from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,      // animation duration
  easing: 'ease-out', // easing function
  once: true,         // only animate once
  mirror: false,      // do not repeat while scrolling up
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OursTokenApp />
  </StrictMode>,
)
