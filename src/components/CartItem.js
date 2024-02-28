import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'

const CartItem = ({item}) => {

   const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Image source={{uri: item.cover}} style={ styles.image }/>
      <View style={ styles.info }>
         <Text style={ styles.text }>{item.title}</Text>
         <Text>{item.add_date}</Text>
         <Text>$ {item.price}</Text>
      </View>
      <Pressable onPress={ () => dispatch( deleteCartItem(item.id) ) }>
         <FontAwesome5 name="trash-alt" size={20} color="lightgray" style={ styles.icon } />
      </Pressable>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  container: {
     backgroundColor: 'gray',
     flexDirection: 'row',
     padding: 10,
     borderRadius: 5,
     marginBottom: 10,
     alignItems: 'center',
     justifyContent: 'flex-start',
     height: 100,
     width: '100%',
     gap: 10
  },
  info: {
    flex: 1
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 20
  }
})