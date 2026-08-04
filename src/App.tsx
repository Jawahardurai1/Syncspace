import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import { RouterProvider } from 'react-router-dom'
import { Route } from 'lucide-react'
import router from './Routes/Router'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
