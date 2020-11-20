// cart slice goes here

import { createSlice } from '@reduxjs/toolkit'

// Set up cart reducer. An object responsible for listening to actions in order to modify store
// Here two arguments are passed in - both objects: createSlice({},{})  
// Object 1: Slice name (cart), initial state (starts as empty array - nothing in cart)
// Object 2: reducers to be passed in.
export const cart = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id)

            if (existingProduct) {
              existingProduct.quantity += 1

            } else {
              state.items.push({ ...action.payload, quantity:1 })        
            }
        },
        removeItem: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id)

            if (existingProduct && existingProduct.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== action.payload.id)
            } else if (existingProduct) {
                existingProduct.quantity -= 1
            }
        }
    }
})

// .find() In the cart array find item with same id as action.payload (items already in cart), to increment
// or decrement. First find it.
// action.payload is the object that has an id. Then if so, increment, if not, push to store.
// Actions have a key of current state and action. And contains a function. The function is invoked in
// Products.js on onClick. The payload passed in is the whole product object as an argument - all data about a 
// product. 

// Take the payload and add it to items: state.items.push(action.payload)
// Items is a key in the cart object.

// .filter() Will filter out and return a new array without this item. If only one item we want to remove it from 
// cart altogether. If several of the same item, we want to decrement by 1.