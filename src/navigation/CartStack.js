import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../screens/Cart'
import Header from '../components/Header'
import CartDetails from '../screens/CartDetails'

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Cart'
      screenOptions={ ( { route, navigation } ) => {
         return {
            header: () => <Header route={ route } title={ route.name } navigation={ navigation } />
         }
      }}>
      <Stack.Screen name="Cart" component={ Cart } />
      <Stack.Screen name="CartDetails" component={ CartDetails } />
    </Stack.Navigator>
  )
}

export default CartStack