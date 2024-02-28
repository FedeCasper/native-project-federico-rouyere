import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   items: [],
   total: 0
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addCartItem: (state, action) => {
         state.items.push(action.payload)
         state.total += action.payload.price
      },
      deleteCartItem: (state, action) => {
         state.items = state.items.filter(item => item.id !== action.payload)
      }
   }
})

export const { addCartItem, deleteCartItem } = cartSlice.actions
export default cartSlice.reducer 
