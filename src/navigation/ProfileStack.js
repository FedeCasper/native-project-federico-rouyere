import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Profile from '../screens/Profile'
import ImageSelector from '../screens/ImageSelector'
import LocationSelector from '../screens/LocationSelector'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={ ( { route, navigation } ) => {
         return {
            header: () => <Header route={ route } title={ route.name } navigation={ navigation } />
         }
      }}>
      <Stack.Screen name="Profile" component={ Profile } />
      <Stack.Screen name="ImageSelector" component={ ImageSelector } />
      <Stack.Screen name="LocationSelector" component={ LocationSelector } />
    </Stack.Navigator>
  )
}

export default ProfileStack