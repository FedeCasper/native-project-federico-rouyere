import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories';


const Home = ({ setCategorySelectedState }) => {
   
  return (
    <View>
      <Header title="Home" />
         <Text style={styles.text}>Choose a category</Text>
         <View>
            <Categories setCategorySelectedState={setCategorySelectedState} />
         </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: 'gray',
    textAlign: 'center'
  }
})