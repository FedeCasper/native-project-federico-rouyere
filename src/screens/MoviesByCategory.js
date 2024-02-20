import { FlatList, StyleSheet } from 'react-native'
import Header from '../components/Header'
import movies from '../utils/data/movies.json'
import Search from '../components/Search'
import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'


const MoviesByCategory = ({ categorySelected }) => {

   const [filteredMovies, setFilteredMovies] = useState(movies)
   const [keyword, setKeyword] = useState('')

   const categoryFilter = (categorySelected) => {
      if(categorySelected){
         setFilteredMovies( movies.filter( movie => movie.gender === categorySelected ) )
      }
      if(keyword){
         setFilteredMovies( filteredMovies.filter( movie => {
            const title = movie.title.toLowerCase()
            console.log(title);
            const searchWord = keyword.toLowerCase()
            console.log(searchWord);
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
      <Header title={categorySelected} />
      <Search handleKeyword={ handleKeyword } />
      <FlatList
        data={filteredMovies}
        keyExtractor={( item ) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
            <MovieCard item={item} />
        )}
      />
    </>
  )
}

export default MoviesByCategory

const styles = StyleSheet.create({
   list: {
      borderColor: '#8e22bb',
      borderWidth: 3,
      paddingBottom: 80
   }
})