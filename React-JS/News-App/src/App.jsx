import React from 'react'
import Navbar from './Components/Navbar'
import Wrapper from './Components/Wrapper'
import Category from './Components/Category'
import Card from './Components/Card'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Category />
        <Card />
      </Wrapper>
        <Footer />
    </>
  )
}

export default App