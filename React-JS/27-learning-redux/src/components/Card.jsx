import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart } from '../redux/features/CartSlice'
import { toast } from 'react-toastify'


const Card = ({ item }) => {

    const ItemVal = useSelector((state) => state.cart.availableItem)
    const dispatch = useDispatch()

    // UI Functionality
    const isInCart = ItemVal.some((i) => i.id == item.id)

    // Add to Cart and Remove
    const handleAddItem = (item) => {
        const isExist = ItemVal.some((i) => i.id == item.id)
        if (!isExist) {
            toast.success("Add to Cart..!",{autoClose : 1000})
            dispatch(addToCart(item))
        }
        else {
            toast.error("Remove From Cart..!",{autoClose : 1000})
            dispatch(removeToCart(item.id))
        }
    }

    return (
        <div className="max-w-84 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <img
                src={item.images[0]}
                alt="Card Image"
                className="w-full h-50 object-cover"
            />

            <div className="p-4 flex flex-col  h-70">
                <h2 className="text-lg font-semibold text-gray-800">
                    {item.title.slice(0, 25)}...
                </h2>

                <p className="text-sm text-gray-600 mt-2">
                    {item.description}
                </p>
                <div className='flex justify-center mt-auto flex-wrap'>
                    <button className={`${isInCart ? 'bg-red-300 hover:bg-red-300/80' : 'bg-blue-600 hover:bg-blue-600/80'}  transition-colors text-white py-4 rounded-xl font-semibold w-[80%]`} onClick={() => handleAddItem(item)}>{`${isInCart ? "Remove From Cart" : "Add Cart"}`}</button>
                    <button className='bg-white/55 border-black/5 py-4 hover:bg-blue-600/90 font-semibold w-[80%] rounded-xl mt-2 transition-colors hover:text-white hover:line-through shadow-xl'>${item.price}</button>
                </div>
            </div>
        </div>

    )
}

export default Card