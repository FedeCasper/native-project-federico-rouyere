import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import MoviesByCategory from './src/screens/MoviesByCategory'
import { useFonts } from 'expo-font'
import { fontsCollection } from './src/utils/globals/fonts'


const App = () => {

  const [ categotySelected, setCategorySelected ] = useState("")

  const setCategorySelectedState = (category) => {
    setCategorySelected(category)
  }

  useEffect(() => {
    console.log(categotySelected)
  }, [categotySelected])

  const [ fontsLoaded ] = useFonts( fontsCollection )
  if(!fontsLoaded) return null

  return (
    <View style={styles.appContainer}>
      {
        categotySelected ?
          <MoviesByCategory categorySelected={categotySelected} />
          :
          <Home setCategorySelectedState={setCategorySelectedState} />
      }
    </View>
  )
}

export default App

const styles = StyleSheet.create({
   appContainer: {
      flex: 1,
      borderColor: 'red',
      borderWidth: 3
   }
})