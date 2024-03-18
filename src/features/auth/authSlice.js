import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   email: '',
   idToken: ''
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUser: ( state, action ) => {
         state = action.payload
         console.log( "Este es el state --->", state);
      }
   }
})

export const { setUser } = authSlice.actions

export default authSlice.reducer