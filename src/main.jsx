// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { ChakraProvider } from '@chakra-ui/react'
// import { ChakraProvider, theme } from '@chakra-ui/react'
createRoot(document.getElementById('root')).render(

  // <StrictMode>
  <BrowserRouter>
  
  {/* <ChakraProvider theme={theme} > */}
  <App />
  {/* </ChakraProvider> */}
    
  </BrowserRouter>


  // </StrictMode>,
)