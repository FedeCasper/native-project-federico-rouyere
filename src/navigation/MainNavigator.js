import { StyleSheet } from 'react-native'
import { useState } from 'react'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const MainNavigator = () => {


  const [ idToken, setIdToken ] = useState( "" )

  return (
   <NavigationContainer>
      {
         idToken ? <TabNavigator /> : <AuthStack />
      }
   </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})