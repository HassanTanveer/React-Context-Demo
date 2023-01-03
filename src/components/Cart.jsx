import React, {useContext} from 'react'

import CartItem from './CartItem'

import { AppContext } from '../context/AppContext'

const Cart = () => {
  const {cart} = useContext(AppContext)
  console.log(cart)
  return (
    <div className="cart">
      {
        cart.map((item, index) => (
          <CartItem 
            index={index+1}
            id={item.id}
            name={item.name} 
            price={item.price}
          />
        ))
      }
    </div>
  )
}

export default Cart;