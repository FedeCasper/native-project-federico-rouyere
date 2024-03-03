import { StyleSheet } from 'react-native'
import Home from '../screens/Home'
import MoviesByCategory from '../screens/MoviesByCategory'
import MovieDetail from '../screens/MovieDetail'
import Header from '../components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
      <Stack.Navigator
         initialRouteName='ScaryApp'
         screenOptions={({route, navigation}) => {
            return {
               header: () => <Header route={route} title={route.name} navigation={navigation} />
            }
         }}
      >
         <Stack.Screen name="ScaryApp" component={Home}  />
         <Stack.Screen name="Category" component={MoviesByCategory} />
         <Stack.Screen name="Movie Details" component={MovieDetail} />
      </Stack.Navigator>
  )
}

export default MainNavigator