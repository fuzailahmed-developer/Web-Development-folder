import React from 'react'
import MyPages from './utils/router'
import { BrowserRouter } from 'react-router'
import Layout from './components/Layout'
import "./style.css"
const App = () => {

  return (
    <BrowserRouter>
      <Layout />
      <MyPages />
    </BrowserRouter>
  )
}

export default App