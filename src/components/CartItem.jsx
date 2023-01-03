import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';

import {AppContext} from '../context/AppContext'

const CartItems = ({index, id, name, price}) => {
  const {theme, removeFromCart, currency} = React.useContext(AppContext)
  
  return (
    <div className={`cartItem cartItem-${theme}`}>
      <div>
      <span>{index}.&nbsp;&nbsp;</span>
      <span className="itemName">{name}</span>
      </div>
      <div>
        <span className="itemPrice">
          {
            parseFloat(price)
            .toLocaleString("en-US", { style: "currency", currency: currency })
          }
          &nbsp;
          &nbsp;
        </span>
        <DeleteIcon className="icon" onClick={() => removeFromCart(id)}/>
      </div>
    </div>
  )
}

export default CartItems;