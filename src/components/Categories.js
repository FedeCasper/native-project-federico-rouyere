import { StyleSheet, Text, View, FlatList } from 'react-native'
import movies from '../utils/data/movies.json'
import CategoryCard from './CategoryCard'

const Categories = ({ setCategorySelectedState }) => {

   const categoriesArray = [...new Set(movies.map( movie => movie.gender ))].filter( category => category );
   // const categories = categoriesArray.map( category => (category.replace(/_/g, ' ').charAt(0).toUpperCase() + category.replace(/_/g, ' ').slice(1).toLowerCase()) );

  return (
   <FlatList
      data={categoriesArray}
      keyExtractor={( item ) => item}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
         <CategoryCard item={item} setCategorySelectedState={setCategorySelectedState} />
      )}
   />
  )
}

export default Categories

const styles = StyleSheet.create({
   list: {
      justifyContent: 'center',
   }
})