import { FlatList, StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import MovieCard from '../components/MovieCard'
import { useGetMoviesByCategoryQuery } from '../app/services/shop'


const MoviesByCategory = ({ navigation, route }) => {

   const { categorySelected } = route.params
   
   const { data: movies } = useGetMoviesByCategoryQuery( categorySelected )

   const [ filteredMovies, setFilteredMovies ] = useState( [] )
   const [ keyword, setKeyword ] = useState('')


   const categoryFilter = ( ) => {
      setFilteredMovies( movies )
      if( keyword ){
         setFilteredMovies( movies.filter( movie => {
            const title = movie.title.toLowerCase()
            const searchWord = keyword.toLowerCase()
            return title.includes( searchWord )
         } ) )
      }
   }

   const handleKeyword = ( keyWord ) => {
      setKeyword( keyWord )
   }

   useEffect(() => {
      categoryFilter( )
   }, [ categorySelected, keyword, movies ])


  return (
    <View style={ styles.container }>
      <Search handleKeyword={ handleKeyword } />
      <FlatList
         data={ filteredMovies }
         keyExtractor={ ( item ) => item.id }
         renderItem={({ item }) => (
            <MovieCard item={ item } navigation={ navigation } />
         )}
      />
    </View>
  )
}

export default MoviesByCategory

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
})