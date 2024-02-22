import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import movies from '../utils/data/movies.json'
import { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview';
import { FontAwesome5 } from '@expo/vector-icons';


const MovieDetail = ({ navigation, route }) => {

  const { movieId } = route.params

  const [ selectedMovie, setSelectedMovie ] = useState({})

  const findMovieById = ( id ) => {
    const movie = movies.find( movie => movie.id === id )
    setSelectedMovie( movie )
  }

  useEffect(() => {
    findMovieById( movieId )
  }, [ movieId ])

  return (
    <ScrollView>

      <View style={ styles.header }>
        <Text style={ styles.title }>{ selectedMovie.title }</Text>
        <Text style={ styles.year }>- { selectedMovie.year } -</Text>
      </View>

      <View style={ styles.trailerContainer }>
        <WebView source={{ uri: selectedMovie.trailer ? selectedMovie?.trailer : "" }} style={{ height: 250 }} />
      </View>

      <View style={ styles.infoContainer }>

        <View style={ styles.coverContainer }>
          <Image source={{uri: selectedMovie.cover}} style={ styles.cover } />
          <View style={ styles.ratingContainer }>
            <FontAwesome5 name="star-half-alt" size={24} color="orange" />
            <Text style={ styles.rating }>{ selectedMovie.web_calification } pts.</Text>
          </View>
        </View>

        <View style={ styles.info }>
          <Text style={ styles.gender }>{ selectedMovie.gender }</Text>
          <Text style={ styles.sinopsis }>{ selectedMovie.sinopsis }</Text>
          <View style={ styles.optionalTitleContainer }>
            <Text style={ styles.optionalTitleHeader }>Also known as...</Text>
            <Text style={ styles.optionalTitle }> { selectedMovie.optional_title }</Text>
          </View>
          <View style={ styles.horizontalRule } />
          <Text style={ styles.text }>Director: { selectedMovie.director ? selectedMovie.director : "Unknown director" }</Text>
        </View>

      </View>

    </ScrollView>
  )
}

export default MovieDetail

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: 'indigo',
  },
  trailerContainer: {
    backgroundColor: 'black',
    paddingVertical: 40,
  },
  year: {
    fontSize: 14,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
  },

  coverContainer: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cover: {
    width: 200,
    height: 300,
    objectFit: 'contain'
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  rating: {
    fontSize: 18,
    fontWeight: '600',
  },

  info: {
    flex: 1,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '50%',
    paddingHorizontal: 10
  },
  optionalTitleContainer: {
    borderColor: 'indigo',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10
  },
  optionalTitleHeader: {
    backgroundColor: 'indigo',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'lightgray'
  },
  optionalTitle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
    padding: 5
  },
  gender: {
    backgroundColor: 'indigo',
    borderRadius: 10,
    padding: 10,
    color: 'lightgray',
    marginBottom: 10
  },
  sinopsis: {
    flex: 1,
    fontSize: 14,
    color: 'gray',
    paddingRight: 10
  },
  horizontalRule: {
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
    width: '90%', 
    marginVertical: 10, 
  }
})