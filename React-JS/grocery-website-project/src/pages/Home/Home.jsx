import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import Values from '../../components/Values/Values'
import Products from '../../components/Products/Products'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Category />
            <Values />
            <Products />
        </>
    )
}

export default Home