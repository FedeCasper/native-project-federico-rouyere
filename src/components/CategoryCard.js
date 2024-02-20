import { Pressable, StyleSheet, Text, View } from 'react-native'
import BaseShadow from './wrappers/BaseShadow'

const CategoryCard = ( {item, setCategorySelectedState} ) => {
  return (
   <Pressable onPress={() => setCategorySelectedState(item)}>
      <BaseShadow style={styles.container}>
         <Text style={styles.text}>{item}</Text>
      </BaseShadow>
   </Pressable>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: '#4b4b4b',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 20,
    borderRadius: 5,
    borderBottomColor: '#c56cf0',
    borderBottomWidth: 3,
    marginHorizontal: "10%"
  },
  text: {
    color: 'white',
    fontSize: 16
  }
})