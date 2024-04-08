import { StyleSheet, FlatList } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'

const Order = () => {

  const localId = useSelector( state => state.auth.localId )
  const { data: orders } = useGetOrdersQuery( localId )

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={ ( { item } ) => <OrderItem order={ item } /> }
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