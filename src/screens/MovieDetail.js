import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview'
import { FontAwesome5 } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import { useGetMovieByIdQuery, useGetMovieUniverseQuery } from '../app/services/shop'
import fonts  from '../utils/globals/fonts'
import HorizontalFlatList from '../components/HorizontalFlatList'


const MovieDetail = ({ navigation, route }) => {

  const cart = useSelector( state => state.cart )

  const dispatch = useDispatch()

  const { movieId } = route.params

  const { data: selectedMovie, isLoading } = useGetMovieByIdQuery( movieId )
  const { data: movieUniverse } = useGetMovieUniverseQuery( selectedMovie?.universe )
  const [ inCart, setInCart ] = useState( false )


  const isInCart = ( id ) => {
    setInCart( cart.items.some( item => item.id === id ) )
  }

  useEffect(() => {
    isInCart( selectedMovie?.id )
  }, [ selectedMovie ] )

  if ( isLoading ){
    return <Text>Loading...</Text>
  }

  return (
    <ScrollView>

      <View style={ styles.header }>
        <Text style={ styles.title }>{ selectedMovie?.title }</Text>
        <Text style={ styles.year }>- { selectedMovie?.year } -</Text>
      </View>

      <View style={ styles.trailerContainer }>
        <WebView source={{ uri: selectedMovie.trailer ? selectedMovie?.trailer : "" }} style={{ height: 250 }} />
      </View>

      <Pressable 
        style={ styles.cartButton }
        onPress={ () => dispatch( addCartItem( selectedMovie ) ) 
        }>
        <Text style={ styles.buttonText }>{ inCart ? "Already in your cart" : "Add to cart" }</Text>
      </Pressable>

      <View style={ styles.infoContainer }>

        <View style={ styles.coverContainer }>
          <Image source={{uri: selectedMovie?.cover}} style={ styles.cover } />
          <View style={ styles.ratingContainer }>
            <FontAwesome5 name="star-half-alt" size={24} color="orange" />
            <Text style={ styles.rating }>{ selectedMovie.web_calification } pts.</Text>
          </View>
        </View>

        <View style={ styles.info }>
          <Text style={ styles.gender }>{ selectedMovie?.gender }</Text>
          <Text style={ styles.sinopsis }>{ selectedMovie?.sinopsis }</Text>
          <View style={ styles.optionalTitleContainer }>
            <Text style={ styles.optionalTitleHeader }>Also known as...</Text>
            <Text style={ styles.optionalTitle }> { selectedMovie?.optional_title }</Text>
          </View>
          <View style={ styles.horizontalRule } />
          <Text style={ styles.text }>Director: { selectedMovie.director ? selectedMovie.director : "Unknown director" }</Text>
        </View>

      </View>

      {
        selectedMovie.universe &&
          <HorizontalFlatList arrayData={ movieUniverse } sectionTitle={ "Movie Universe" }  />
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

  cartButton: {
    backgroundColor: 'indigo',
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'lightgray',
    textAlign: 'center',
    fontWeight: 'bold',
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