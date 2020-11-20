import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'

// Import the two slices/reducer files
import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

// Combine reducers 
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

// Configure store by passing the combined reducers (which is an object - const reducer) as argument,
// into the store variable 
const store = configureStore({ reducer }) // short for reducer: reducer - an object.

// Make store accessible to all components wrapped by Provider
export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)

// Import slices/reducer files
// Combine reducers
// Configure store
