import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'


const Cart = () => {

  const cart = useSelector( state => state.cart )

  return (
    <View style={ styles.container }>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        style={ styles.list }
        renderItem={({item}) => (
          <CartItem item={item} />
        )}
      />
      <View style={ styles.confirmContainer }>
        <Text>Total: $20</Text>
        <Pressable>
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
  confirmContainer: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
  },
  buttonConfirm: {
    padding: 10,
    backgroundColor: 'indigo',
    color: 'white',
    borderRadius: 5
  }
})