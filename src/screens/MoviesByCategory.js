import { FlatList, StyleSheet } from 'react-native'
import movies from '../utils/data/movies.json'
import Search from '../components/Search'
import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'


const MoviesByCategory = ({ navigation, route }) => {

   const { categorySelected } = route.params
   const [filteredMovies, setFilteredMovies] = useState(movies)
   const [keyword, setKeyword] = useState('')

   const categoryFilter = ( categorySelected ) => {
      if( categorySelected ){
         setFilteredMovies( movies.filter( movie => movie.gender === categorySelected ) )
      }
      if(keyword){
         setFilteredMovies( filteredMovies.filter( movie => {
            const title = movie.title.toLowerCase()
            const searchWord = keyword.toLowerCase()
            return title.includes(searchWord)
         } ) )
      }
   }

   const handleKeyword = (keyWord) => {
      setKeyword( keyWord )
   }

   useEffect(() => {
      categoryFilter(categorySelected)
   }, [categorySelected, keyword])

  return (
    <>
      <Search handleKeyword={ handleKeyword } />
      <FlatList
        data={ filteredMovies }
        keyExtractor={ ( item ) => item.id }
        contentContainerStyle={ styles.list }
        renderItem={({ item }) => (
            <MovieCard item={ item } navigation={ navigation } />
        )}
      />
    </>
  )
}

export default MoviesByCategory

const styles = StyleSheet.create({})