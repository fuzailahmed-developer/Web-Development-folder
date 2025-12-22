import React from 'react'
import Theme from './utils/Theme'
import MyRoutes from './routes/MyRoutes'
import { ToastContainer } from 'react-toastify'

const App = () => {

  return (
    <>
      <MyRoutes />
      <ToastContainer autoClose={1000} />
    </>
  )
}

export default App