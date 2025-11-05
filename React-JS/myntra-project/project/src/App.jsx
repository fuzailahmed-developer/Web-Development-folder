import React from 'react'
import { items } from './data/items'
import Cards from './components/Cards'
import { useSelector } from 'react-redux'

const App = () => {

  const products = useSelector((state) => state.products.data)

  return (
    <section>
      <div className='max-w-[1200px] mx-auto flex gap-3 justify-between my-5 flex-wrap'>
        {
          products.map((items) => <Cards items={items} key={items.id}/>)
        }
      </div>
    </section>
  )
}

export default App