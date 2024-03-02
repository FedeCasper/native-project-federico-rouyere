import { Pressable, StyleSheet, Text, View } from 'react-native'
import fonts from '../utils/globals/fonts'


const CategoryCard = ( {item, navigation} ) => {
  return (
   <Pressable onPress={ () => navigation.navigate( 'Category', { categorySelected: item } ) }>
      <View style={styles.card}>
        <Text style={styles.text}>{item.toUpperCase().replaceAll('_', ' ') }</Text>
      </View>
   </Pressable>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 20,
    borderRadius: 5,
    borderBottomColor: '#c56cf0',
    borderBottomWidth: 3,
    marginHorizontal: "10%"
  },
  card: {
    backgroundColor: 'indigo',
    height: 60,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    padding: 10,
    borderRadius: 5,

  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.PoppinsRegular,
    textAlign: 'center'
  }
})