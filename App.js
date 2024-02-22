import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import { fontsCollection } from './src/utils/globals/fonts'
import Header from './src/components/Header'
import Home from './src/screens/Home'
import MoviesByCategory from './src/screens/MoviesByCategory'
import MovieDetail from './src/screens/MovieDetail'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = () => {

  const [ fontsLoaded ] = useFonts( fontsCollection )
  if(!fontsLoaded) return null

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={({route, navigation}) => {
          return {
            header: () => <Header route={route} title={route.name} navigation={navigation} />
          }
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MoviesByCategory" component={MoviesByCategory} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})