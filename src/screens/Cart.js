import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import CartItem from '../components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { usePostOrderMutation } from '../app/services/orders'
import { deleteCart } from '../features/cart/cartSlice'


const Cart = ({ navigation }) => {

  const dispatch = useDispatch()
  const cart = useSelector( state => state.cart )
  const localId = useSelector( state => state.auth.localId )
  const [ triggerAddOrder ] = usePostOrderMutation()

  console.log( 'localId', localId );

  const handlerAddOrder = async () => {
    const createdAt = new Date().toLocaleString()
    const order = { createdAt, ...cart }
    await triggerAddOrder(  {localId, order}  )
    dispatch( deleteCart() )
    navigation.navigate( 'OrdersStack' )
  }

  return (
    <View style={ styles.container }>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        style={ styles.list }
        contentContainerStyle={{ gap: 10 }}
        renderItem={({item}) => (
          <CartItem item={item} navigation={navigation} />
        )}
      />
      <View style={ styles.confirmContainer }>
        <Text style={ styles.total }>Total: ${cart.total.toFixed(2) }</Text>
        <Pressable style={ styles.buttonConfirmContainer } onPress={ handlerAddOrder }>
          <Text style={ styles.buttonConfirm }>Confirm</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    backgroundColor: 'lightgray',
    alignItems: 'flex-start',
  },
  list: {
    width: '100%',
  },
  total: {
    color: 'indigo',
    backgroundColor: 'darkgray',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    elevation: 3,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  confirmContainer: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
  },
  buttonConfirmContainer: {
    padding: 10,
    backgroundColor: 'indigo',
    color: 'white',
    borderRadius: 5,
    width: "100%",
  },
  buttonConfirm: {
    color: 'white',
    textAlign: 'center',
  }
})