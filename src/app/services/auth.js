import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
   reducerPath: 'auth',
   baseQuery: fetchBaseQuery( { baseUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]' } ),

   endpoints: ( builder ) => ({

 

   })

})

export const { 
   useGetMoviesByCategoryQuery, 
   useGetMovieByIdQuery, 
   useGetMovieUniverseQuery, 
   useGetMoviesCategoriesQuery 
} = shopApi