import React from 'react'
import { CartItem } from './CartItem'
import { useSelector } from 'react-redux'

export const Cart = () => {
  // Fetch products from the cart store
  const products = useSelector((store) => store.cart.items)

  // Calculate total from the sum of all products in the cart.
  // reduce() - total is assigned the value of 0. 
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <div className="cart">
      <div className="total">
        <span className="emoji" role="img" aria-label="cart">🛒</span>
        <div className="amount">Total: {totalPrice}:-</div>
      </div>

      <ul className="items">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
