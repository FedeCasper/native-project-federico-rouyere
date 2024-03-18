import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native' 
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const MainNavigator = () => {

  const user = useSelector( state => state.auth )

   console.log( "Este es el user token", user );

  return (
   <NavigationContainer>
      {
         user.idToken ? <TabNavigator /> : <AuthStack />
      }
   </NavigationContainer>
  )
}

export default MainNavigator