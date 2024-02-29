import { StyleSheet, Text, View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const OrderItem = ({order}) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={ styles.text }>{new Date( order.createAt ).toLocaleDateString()}</Text>
        <Text style={ styles.text }>${order.total}</Text>
      </View>
      <FontAwesome5 name="search" size={20} color="lightgray" style={ styles.icon } />
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  card: {
     flexDirection: 'row',
     backgroundColor: 'indigo',
     height: 80,
     marginBottom: 10,
     borderRadius: 5,
     width: '90%',
     alignItems: 'center',
     justifyContent: 'space-between',
     padding: 10,
     gap: 10
  },
  text: {
    color: 'white',
  },
  icon: {
    marginRight: 10
  }
})