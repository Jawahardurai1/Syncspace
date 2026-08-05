
import { RouterProvider } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider'
import router from './Routes/Router'

function App() {
  

  return (
    <ContextProvider>
      <RouterProvider router={router} />
      </ContextProvider>
    
  )
}

export default App

