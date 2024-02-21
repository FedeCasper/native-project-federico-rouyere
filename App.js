import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import { fontsCollection } from './src/utils/globals/fonts'
import Home from './src/screens/Home'
import MoviesByCategory from './src/screens/MoviesByCategory'
import MovieDetail from './src/screens/MovieDetail'



const App = () => {

  const [ categotySelected, setCategorySelected ] = useState("")
  const [movieId, setMovieId] = useState(0)

  const setCategorySelectedState = (category) => {
    setCategorySelected(category)
  }

  const setMovieIdState = (id) => {
    setMovieId(id)
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
          movieId ?
            <MovieDetail movieId={movieId} /> 
            :
            <MoviesByCategory categorySelected={categotySelected} setMovieIdState={setMovieIdState}  />
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
      borderWidth: 3,
   }
})