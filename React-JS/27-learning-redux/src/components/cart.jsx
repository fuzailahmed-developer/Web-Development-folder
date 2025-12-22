import React from 'react'
import { BiCart } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'


const Cart = () => {
    
  const ItemCount = useSelector((state => state.cart.availableItem.length))
  const navigate = useNavigate()
  return (
 <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg" onClick={() => navigate('/cart')}>
  <BiCart size={22} className="text-white" />
  <span className="absolute -top-1 -right-1 bg-white text-pink-600 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
    {ItemCount}
  </span>
</div>

  )
}

export default Cart