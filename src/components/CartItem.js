import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'

const CartItem = ({item, navigation}) => {

   const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Pressable style={styles.dataContainer} onPress={ () => navigation.navigate('CartDetails', { movieId: item.id }) } >
        <Image source={{uri: item.cover}} style={ styles.image }/>
        <View style={ styles.info }>
          <Text style={ styles.text }>{item.title}</Text>
          <Text>{new Date().toLocaleDateString()}</Text>
          <Text style={ styles.price }>$ {item.price.toFixed(2) }</Text>
        </View>
      </Pressable>
        <Pressable
          style={ styles.iconContainer } 
          onPress={ () => dispatch( deleteCartItem(item.id) ) }>
          <FontAwesome5 name="trash-alt" size={20} color="lightgray" style={ styles.icon } />
        </Pressable>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  container: {
     flexDirection: 'row',
     gap: 10,
     borderColor: 'cyan',
     borderWidth: 1
  },
  dataContainer: {
     backgroundColor: 'gray',
     flexDirection: 'row',
     padding: 10,
     borderRadius: 5,
     marginBottom: 10,
     alignItems: 'center',
     justifyContent: 'flex-start',
     height: "100%",
     width: '80%',
     gap: 10
  },
  info: {
    flex: 1,
    alignItems: 'flex-start',
    gap: 5,
  },
  image: {
    width: 80,
    height: "100%",
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  iconContainer: {
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
})