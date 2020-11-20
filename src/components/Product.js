import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'


export const Product = ({ product }) => {
  const dispatch = useDispatch()
  
  return (
    <article className="product">
      <span className="emoji" role="img" aria-label={product.title}>{product.emoji}</span>
      <p>{product.price}:-</p>

      <button
        type="button"
        disabled={product.inventory === 0}
        // Dispatch the action we created in cart - addItem. addItem is the action and when 
        // invoking, we pass the whole product object in as an argument. Pick the action up: go to cart, go to actions (which is a function), 
        // got to the action created (addItem = identifier/name) and pass in the whole product (item added),
        // as the payload. The value that will modify the store.
        onClick={() => { dispatch(cart.actions.addItem(product)) }}>
        Add to cart
      </button>
    </article>
  )
}
