import React from 'react'
import { useSelector } from 'react-redux'

import { Product } from './Product'

// Fetch all products from the store.
export const Products = () => {
  // Pass a function to the useSelector. The function takes the store/state
  // object and we say what we want out of it. Open state in Redux dev tool
  // for tree: state.products. Then we can map.
  const allProducts = useSelector((store) => store.products)
  console.log('Testing')

  return (
    <div className="products"> 
      {allProducts.map((product) => (
        
        <Product key={product.id} product={product} />
        
      ))}
      

    </div>
  )
}


