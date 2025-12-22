import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './Routes/MyRoutes'

const App = () => {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  )
}

export default App