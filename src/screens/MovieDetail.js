import { StyleSheet, Text, View, Image, ScrollView, FlatList, Button } from 'react-native'
import movies from '../utils/data/movies.json'
import { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview'
import { FontAwesome5 } from '@expo/vector-icons'
import fonts  from '../utils/globals/fonts'
import HorizontalFlatList from '../components/HorizontalFlatList'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'


const MovieDetail = ({ navigation, route }) => {

  const dispatch = useDispatch()
  const { movieId } = route.params
  const [ selectedMovie, setSelectedMovie ] = useState({})
  const [ moviesUniverse, setMoviesUniverse ] = useState([])

  const findMovieById = ( id ) => {
    const movie = movies.find( movie => movie.id === id )
    setSelectedMovie( movie )
  }

  const getMovieUniverse = (selectedMovie) => {
    if ( selectedMovie?.universe !== 'None' ){
      const universe = movies.filter( movie => ( movie.universe === selectedMovie.universe ) && ( movie.id !== selectedMovie.id )  ) 
      setMoviesUniverse( universe )
    }
  }

  useEffect(() => {
    findMovieById( movieId )
  }, [ movieId ])

  useEffect(() => {
    getMovieUniverse( selectedMovie )
  }, [ selectedMovie ])


  return (
    <ScrollView>

      <View style={ styles.header }>
        <Text style={ styles.title }>{ selectedMovie.title }</Text>
        <Text style={ styles.year }>- { selectedMovie.year } -</Text>
      </View>

      <View style={ styles.trailerContainer }>
        <WebView source={{ uri: selectedMovie.trailer ? selectedMovie?.trailer : "" }} style={{ height: 250 }} />
      </View>

      <Button title="Add to Cart" onPress={ () => dispatch( addCartItem( selectedMovie ) ) }/>

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

      {
        moviesUniverse.length > 0 &&
          <HorizontalFlatList arrayData={ moviesUniverse } sectionTitle={ "Movie Universe" }  />
      }

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
    fontSize: 28,
    color: 'indigo',
    fontFamily: fonts.PoppinsRegular
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
    fontSize: 14,
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
    paddingRight: 10,
    lineHeight: 20
  },
  horizontalRule: {
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
    width: '90%', 
    marginVertical: 10, 
  },

})