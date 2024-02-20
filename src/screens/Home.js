import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories';


const Home = ({ setCategorySelectedState }) => {
   
  return (
    <>
      <Header title="Home" />
         <Text style={styles.text}>Choose a category</Text>
         <View style={styles.categoriesContainer}>
            <Categories setCategorySelectedState={setCategorySelectedState} />
         </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: 'gray',
    textAlign: 'center'
  }
})