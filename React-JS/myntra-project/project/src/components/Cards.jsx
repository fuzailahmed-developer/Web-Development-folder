import React from 'react'

const Cards = ({ items }) => {
    return (
        <div className='shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-lg overflow-hidden w-[270px]'>
            <img src={items.image} alt="" className='max-h-[250px] w-full'/>
            <div className='px-2 py-2'>
                <h3 className='text-sm font-semibold'>{items.rating.stars} ⭐ | {items.rating.count}</h3>
                <h2>{items.company}</h2>
                <p>{items.item_name}</p>
                <p className='flex gap-x-2 items-center'>
                    <span>Rs : {items.current_price}</span>
                    <span className='line-through text-sm text-zinc-700'>Rs : {items.original_price}</span>
                    <span className='text-sm font-medium text-red-500'>({Math.floor(items.current_price / items.original_price * 100)}% OFF)</span>
                </p>
            </div>
        </div>
    )
}

export default Cards