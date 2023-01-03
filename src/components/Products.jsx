import React from 'react'

import ProductTile from './ProductTile'

const Products = () => {
  return(
    <div className="products">
      <ProductTile id={1} name="Product 1" price="10.0" />
      <ProductTile id={2} name="Product 2" price="20.0" />
      <ProductTile id={3}name="Product 3" price="30.0" />
    </div>
  )
}

export default Products