import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
   reducerPath: 'shopApi',
   baseQuery: fetchBaseQuery( { baseUrl: 'https://scaryapp-native-default-rtdb.firebaseio.com' } ),

   endpoints: ( builder ) => ({

      getMoviesByCategory: builder.query({
         query: ( category ) => `/movies.json?orderBy="gender"&equalTo="${ category }"`, // Get movies by category
         transformResponse: ( res ) => { return Object.values( res ) }, // Transform the response to an array
      }),

      getMovieById: builder.query({
         query: ( id ) => `/movies/${ id }.json`
      }),

      getMovieUniverse: builder.query({
         query: ( universe ) => `/movies.json?orderBy="universe"&equalTo="${ universe }"`,
         transformResponse: ( res ) => { return Object.values( res ) },
      }),

      getMoviesCategories: builder.query({
         query: () => '/movies.json',
         transformResponse: ( response ) => {
           const movies = Object.values( response )
           const categories = [...new Set( movies.map( ( movie ) => movie.gender ) )].filter( ( category ) => category !== undefined );
           const sortedCategories = categories.sort()
           return sortedCategories; 
         },
       }),
       

   })

})

export const { 
   useGetMoviesByCategoryQuery, 
   useGetMovieByIdQuery, 
   useGetMovieUniverseQuery, 
   useGetMoviesCategoriesQuery 
} = shopApi