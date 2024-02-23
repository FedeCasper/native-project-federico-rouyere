import { StyleSheet, FlatList } from 'react-native'
import movies from '../utils/data/movies.json'
import CategoryCard from './CategoryCard'

const Categories = ({ navigation,  }) => {

   const categoriesArray = [...new Set(movies.map( movie => movie.gender ))].filter( category => category ).sort();

  return (
   <FlatList
      horizontal
      data={categoriesArray}
      keyExtractor={( item ) => item}
      // contentContainerStyle={styles.list}
      renderItem={({ item }) => (
         <CategoryCard item={item} navigation={navigation} />
      )}
   />
  )
}

export default Categories

const styles = StyleSheet.create({
   list: {
      justifyContent: 'center',
      marginVertical: 20
   }
})