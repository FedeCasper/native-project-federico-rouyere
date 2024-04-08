import { StyleSheet, FlatList, Text } from 'react-native'
import CategoryCard from './CategoryCard'
import { useGetMoviesCategoriesQuery } from '../app/services/shop'

const Categories = ({ navigation }) => {

   const { data: categories, isLoading } = useGetMoviesCategoriesQuery();

   if ( isLoading ){
      return <Text>Loading...</Text>
    }

  return (
   <FlatList
      horizontal
      data={ categories }
      keyExtractor={( item ) => item}
      style={ styles.list }
      showsHorizontalScrollIndicator={ false }
      renderItem={({ item }) => (
         <CategoryCard item={ item } navigation={ navigation } />
      )}
   />
  )
}

export default Categories

const styles = StyleSheet.create({
   list: {
      paddingHorizontal: 20,
      paddingVertical: 10,
   }
})