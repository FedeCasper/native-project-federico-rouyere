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
         const { email, idToken } = action.payload;
         state.email = email;
         state.idToken = idToken;
         console.log( "Este es el state --->", state);
      },
      clearUser: ( state ) => {
         state.email = '';
         state.idToken = '';
      }
   }
})

export const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer