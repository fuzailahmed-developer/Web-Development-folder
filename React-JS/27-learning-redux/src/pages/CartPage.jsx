import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../redux/features/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { clearItem, removeToCart } from '../redux/features/CartSlice'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const CartPage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const CartItems = useSelector(state => state.cart.availableItem)
  const [quantity, SetQuantity] = useState({})
  const [total, setTotal] = useState(0)

  const handleQuantify = (id, value) => {
    SetQuantity(prev => (
      { ...prev, [id]: parseInt(value) || 0 }
    ))
    localStorage.setItem('qty', JSON.stringify(quantity))
  }

  const placeOrder = () => {
    if (parseInt(total) > 0) {
      dispatch(clearItem())
      navigate('/')
      toast.success("Order Placed Successfully..!",{autoClose : 1000})
    } else toast.error("Please Add Quantity..!",{autoClose : 1000})
  }

  useEffect(() => {

    const calculateTotal = CartItems.reduce((total, item) => {
      const qty = quantity[item.id] || 0
      return total + (item.price * qty)
    }, 0)

    setTotal(calculateTotal)

  }, [quantity, CartItems])

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className='max-w-[1000px] mx-auto bg-gray-50 mt-22 rounded px-10 pb-2'>
      <div className='flex justify-between items-center py-4 border-b border-gray-300'>
        <h2 className='lg:text-xl text-lg font-semibold'>Your Carts Items</h2>
        <p>items {CartItems.length}</p>
      </div>
      {
        CartItems?.map((item) => (
          <div className='flex justify-between items-center flex-wrap py-5 border-b border-gray-300' key={item.id}>
            <div className='flex gap-3'>
              <div>
                <img src={item?.images[0]} alt="" className='w-20 h-20' />
              </div>
              <div className='flex flex-col justify-center'>
                <span className='font-semibold lg:text-lg'>
                  {item?.title}
                </span>
                <span className='text-sm'>
                  {item?.brand}
                </span>
              </div>
            </div>
            <div className='flex gap-5 items-end'>
              <div>
                <input type="number" placeholder='Quantity..!' autoComplete='off' className='outline-none h-10 pl-2 rounded-lg bg-white text-gray-500' defaultValue={0} onChange={(e) => handleQuantify(item.id, e.target.value)} />
              </div>
              <div className='flex flex-col justify-between gap-y-2'>
                <span className='font-semibold text-blue-500 ml-auto'>${item?.price}</span>
                <button className={`bg-red-300 hover:bg-red-300/80  transition-colors text-white py-3 px-6 rounded-xl font-semibold `} onClick={() => {
                  dispatch(removeToCart(item.id))
                  toast.error("Remove From Cart..!",{autoClose : 1000})
                }} >Remove Item</button>
              </div>
            </div>
          </div>
        ))
      }
      <div className='my-2 flex justify-between items-center'>
        <button className='py-4 px-10 transition cursor-pointer hover:bg-blue-500/90 rounded-lg bg-blue-500 text-white' onClick={placeOrder}>Place Order</button>
        <div className='text-blue-500 '>
          <span className='font-bold text-lg'>Total </span>
          <span className='font-bold text-lg'> ${total.toFixed(2)} /-</span>
        </div>
      </div>
    </div>
  )
}

export default CartPage