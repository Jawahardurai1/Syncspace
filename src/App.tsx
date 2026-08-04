
import { RouterProvider } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider'
import router from './Routes/Router'
import { UserContext } from './Context/Context'
function App() {
  

  return (
    <ContextProvider>
      <RouterProvider router={router} />
      </ContextProvider>
    
  )
}

export default App

