import { StyleSheet, Text, View } from 'react-native'
import Home from '../screens/Home'
import MoviesByCategory from '../screens/MoviesByCategory'
import MovieDetail from '../screens/MovieDetail'
import Header from '../components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
      <Stack.Navigator
         initialRouteName='Home'
         screenOptions={({route, navigation}) => {
            return {
               header: () => <Header route={route} title={route.name} navigation={navigation} />
            }
         }}
      >
         <Stack.Screen name="Home" component={Home}  />
         <Stack.Screen name="MoviesByCategory" component={MoviesByCategory} />
         <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})