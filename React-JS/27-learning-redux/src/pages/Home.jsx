import React, { useEffect } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/features/ProductSlice'
import LoadingImg from '../assets/fade-stagger-circles.svg'

const Home = () => {
    const dispatch = useDispatch()
    const Products = useSelector(state => state.products.items)
    const loading = useSelector(state => state.products.status)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])



    return (
        <div className='pt-[90px]'>
            <div
                className='flex flex-wrap gap-10 justify-center lg:mt-15 mt-10 px-4 overflow-hidden'
            >   {
                    loading == "loading" ?
                        <div>
                            <img src={LoadingImg} alt="" className='absolute top-1/2 left-1/2 -transform-1/2 w-20 h-20'/>
                        </div> :
                        Products?.map((item) => (
                            <div key={item.id} className='hover:scale-105 transition cursor-pointer'>
                                <Card item={item} />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default Home