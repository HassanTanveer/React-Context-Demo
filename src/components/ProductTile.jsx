import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'

import { AppContext } from '../context/AppContext'

const ProductTile = ({ id, name, price }) => {
  const { theme, cart, addToCart, removeFromCart, currency } = useContext(AppContext)

  const handleRemoveClick = () => {
    removeFromCart(id)
  }
  const handleAddClick = () => {
    addToCart({
      id, name, price
    })
  }

  return (
    <div className={`tile tile-${theme}`}>
      <h6>
        {name}
      </h6>
      <p>
        {
          parseFloat(price)
            .toLocaleString("en-US", { style: "currency", currency: currency })
        }
      </p>
      {
        cart.find(item => item.id === id)
          ? (
            <Button variant={theme} onClick={handleRemoveClick}>
              Remove from Cart
            </Button>
          ) : (
            <Button variant={theme} onClick={handleAddClick}>
              Add to Cart
            </Button>
          )
      }

    </div>
  )
}

export default ProductTile