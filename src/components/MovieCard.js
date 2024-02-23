import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Image } from 'react-native'
import fonts  from '../utils/globals/fonts'


const MovieCard = ({item, navigation}) => {

  const { width } = useWindowDimensions();

  return (
    <Pressable onPress={ () => navigation.navigate('MovieDetail', { movieId: item.id }) } style={styles.container}>
        <Image source={ { uri: item.cover } } style={ styles.image } resizeMode="cover" />
        <View style={ styles.info }>
          <Text style={ styles.title }>{ item.title }</Text>
          <Text style={ [styles.sinopsis, width > 300 ? {fontSize: 10} : {fontSize: 8} ] }>{ item.sinopsis ? item.sinopsis.slice(0, 100) + "..." : "Synopsis not available"}</Text>
          <Text style={ styles.text }> - { item.year } -</Text>
        </View>
    </Pressable>
  )
}

export default MovieCard

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "80%",
    height: 200,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    padding: 20,
    borderRadius: 5,
    borderBottomColor: '#c56cf0',
    borderBottomWidth: 3,
    marginHorizontal: "10%",
    gap: 10
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.PoppinsBlack,
    width: 175
  },
  text: {
    color: 'white',
    fontSize: 10
  },
  image: {
    minWidth: 100,
    height: "100%",
    borderRadius: 10,
  },
  info: {
    padding: 10,
    flex: 1,
    height: "100%",
  },
  sinopsis: {
    width: "100%",
    fontSize: 12,
    color: "lightgray",
    fontFamily: fonts.PoppinsItalic,
  }
})