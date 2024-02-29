import { StyleSheet, FlatList } from 'react-native'
import orders from '../utils/data/order.json'
import OrderItem from '../components/OrderItem'

const Order = () => {
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({item}) => (
        <OrderItem order={item} />
      )}
    />
)}


export default Order

const styles = StyleSheet.create({
  list: {
    width: '100%',
    borderColor: 'red',
    borderWidth: 1,
    alignItems: 'center'
  }
})