import { StyleSheet, Text, Image, ScrollView, View  } from 'react-native'
import movies from '../utils/data/movies.json'
import { useEffect, useState } from 'react'
import fonts from '../utils/globals/fonts'

const CartDetails = ({ route }) => {

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
      <View style={ styles.imageContainer }>
         <Image source={{uri: selectedMovie?.cover}} style={ styles.image } />   
      </View>
      <Text style={ styles.price }> $ { selectedMovie?.price?.toFixed(2) }</Text>
      <Text style={ styles.title }>{ selectedMovie?.title }</Text>
      <Text style={ styles.sinopsis }>{ selectedMovie?.sinopsis }</Text>
    </ScrollView>
  )
}

export default CartDetails

const styles = StyleSheet.create({
  imageContainer: {
     backgroundColor: 'darkgray',
     paddingVertical: 20
  },
  image: {
     width: 'auto',
     height: 300,
     resizeMode: 'contain'
  },
  price: {
     fontSize: 20,
     backgroundColor: 'indigo',
     color: 'lightgray',
     padding: 10,
     textAlign: 'center'
  },
  title: {
     fontSize: 22,
     fontFamily: fonts.PoppinsRegular,
     marginVertical: 10,
     width: '90%',
     alignSelf: 'center',
     color: 'indigo'
  },
  sinopsis: {
     fontSize: 12,
     fontFamily: fonts.PoppinsItalic,
     width: '90%',
     alignSelf: 'center'
  }
})