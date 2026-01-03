import { useEffect } from 'react'
import { useMyContext } from '../context/MyContext'
import Loader from './Loader'


const Card = () => {

    const { filterData , loader} = useMyContext()

    if (loader) {
        return <Loader />
    }

    return (
        <div className='flex flex-wrap gap-4 b700:justify-between justify-center px-6 b700:py-5'>
            {
                filterData.map((data,id) => (
                    <CardItem item={data} key={id}/>
                ))
            }
        </div>
    )
}

export default Card


const CardItem = ({ item }) => {
    return (
        <div className="card bg-base-100 w-76 shadow-sm shadow-white/10">
            <figure>
                <img
                    src={item.urlToImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body pb-3">
                <h2 className="card-title line-clamp-1">{item.author}</h2>
                <p className='text-green-400 text-sm line-clamp-1'>{item.publishedAt}</p>
                <p className='line-clamp-2'>{item.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-soft mt-2">Read More</button>
                </div>
            </div>
        </div>
    )
}

// 2d4172c5c91141c28019e7a937402683