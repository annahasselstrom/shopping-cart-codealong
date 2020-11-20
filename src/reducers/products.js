// products slice goes here

import { createSlice } from '@reduxjs/toolkit';

// Set up productData variable. Stores the key values in an array. Hard coded.
const productData = [
    { id: 1, title: 'Socks', price: 100, emoji: '🧦 ' },
    { id: 2, title: 'T-shirt', price: 200, emoji: '👕 ' },
    { id: 3, title: 'Pants', price: 350, emoji: '👖 ' },
    { id: 4, title: 'Dress', price: 550, emoji: '👗 ' }
]

// Create products function that takes another function as argument (createSlice) and 
// returns an object with reducer functions. Here the slice name (products) and
// the intitial state of the function (referencing productData). 
export const products = createSlice({
    name: 'products',
    initialState: productData
})