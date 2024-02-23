import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Order from '../screens/Order'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const OrderStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Order'
    screenOptions={ ({route, navigation}) => {
      return {
         header: () => <Header route={route} title={route.name} navigation={navigation} />
      }
    }}>
      <Stack.Screen name="Orders" component={Order} />
    </Stack.Navigator>
  )
}

export default OrderStack