import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './Pages/Home.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <App/>
    </StrictMode>,
)
