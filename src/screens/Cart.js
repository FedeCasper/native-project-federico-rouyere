import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'


const Cart = ({ navigation }) => {

  const cart = useSelector( state => state.cart )

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
        <Pressable style={ styles.buttonConfirmContainer }>
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