import React from 'react'
import Button from 'react-bootstrap/Button'

import {AppContext} from '../context/AppContext'

const Total = () => {
  const {cart, currency, theme, emptyCart} = React.useContext(AppContext)

  const total = cart.reduce((a, b) => a + parseFloat(b.price), 0)
  return (
    <div className={`total total-${theme}`}>
      Total:&nbsp;
      {
        total
        .toLocaleString("en-US", { style: "currency", currency: currency })
      }
      <span>
        <Button 
          onClick={emptyCart}
          variant={theme === 'light' ? 'primary' : 'secondary'}
        >
          Place Order
        </Button>
      </span>
    </div>
  )
}

export default Total