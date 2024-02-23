import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import { fontsCollection } from './src/utils/globals/fonts'
import MainNavigator from './src/navigation/MainNavigator'

const App = () => {

  const [ fontsLoaded ] = useFonts( fontsCollection )
  if(!fontsLoaded) return null

  return (
    <MainNavigator />
  )
}

export default App

const styles = StyleSheet.create({})