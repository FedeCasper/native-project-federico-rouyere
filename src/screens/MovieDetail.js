import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import movies from '../utils/data/movies.json'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { WebView } from 'react-native-webview';


const MovieDetail = ({ movieId }) => {

  const [selectedMovie, setSelectedMovie] = useState({})

  const findMovieById = (id) => {
    const movie = movies.find( movie => movie.id === id )
    setSelectedMovie(movie)
  }

  useEffect(() => {
    findMovieById(movieId)
  }, [movieId])

  console.log(selectedMovie?.trailer);

  return (
    <ScrollView style={ styles.container }>
      <Header title={selectedMovie.title} />
      <View>
        <WebView source={{ uri: selectedMovie.trailer ? selectedMovie?.trailer : "" }} style={{ height: 250 }} />
        <Image source={{uri: selectedMovie.cover}} style={ styles.cover } />
      </View>
      <View style={ styles.info }>
       <Text style={ styles.title }>{ selectedMovie.title }</Text>
       <Text style={ styles.optionalTitle }>{ selectedMovie.optional_title }</Text>
       <Text style={ styles.year }>-{ selectedMovie.year }-</Text>
       <Text style={ styles.sinopsis }>{ selectedMovie.sinopsis }</Text>
      </View>
    </ScrollView>
  )
}

export default MovieDetail

const styles = StyleSheet.create({
  container: {

    overflow: 'scroll',
    borderColor: 'green',
    borderWidth: 6,
  },
  cover: {
    width: '90%',
    height: 500,
    marginHorizontal: '5%',
    marginTop: 20,
    objectFit: 'contain'
  },
  info: {
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 10,
    color: 'indigo',
  },
  optionalTitle: {
    fontSize: 14,
    fontStyle: 'italic',
    marginHorizontal: 10,
    color: 'gray',
  },
  year: {
    fontSize: 12,
    margin: 10,
  },
  sinopsis: {
    fontSize: 14,
    margin: 10,
    color: 'gray',
  }
})