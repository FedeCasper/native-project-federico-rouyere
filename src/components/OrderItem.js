import { StyleSheet, Text, View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const OrderItem = ({order}) => {
  return (
    <View style={styles.card}>
      <View style={styles.textInfo}>
        <Text>{new Date( order.createAt ).toLocaleDateString()}</Text>
        <Text>${order.total}</Text>
      </View>
      <FontAwesome5 name="search" size={20} color="lightgray" />
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
     padding: 10,
     gap: 10
  },
  textInfo: {
     color: 'white',
  }
})