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
         const index = state.items.findIndex(item => item.id === action.payload.id)
         if (index === -1) {
            state.items.push(action.payload)
         }
         state.total = state.items.reduce((acc, item) => acc + item.price, 0)
      },
      deleteCartItem: (state, action) => {
         state.items = state.items.filter(item => item.id !== action.payload)
         state.total = state.items.reduce((acc, item) => acc + item.price, 0)
      },
      deleteCart: ( state ) => {
         state.total = 0
         state.items = []
      }
   }
})

export const { addCartItem, deleteCartItem, deleteCart } = cartSlice.actions
export default cartSlice.reducer 
