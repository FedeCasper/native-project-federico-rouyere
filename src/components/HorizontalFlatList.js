import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import fonts  from '../utils/globals/fonts'

const HorizontalFlatList = ({ arrayData, sectionTitle }) => {

  return (
      <View style={ styles.container }>
         <Text style={ styles.title }>
            <Text style={ styles.initialSign }>| </Text>
            { sectionTitle }
            </Text>
         <FlatList
            horizontal
            data={ arrayData }
            keyExtractor={ ( item ) => item.id }
            style={ styles.list }
            renderItem={ ({ item }) => (
               
               <Image source={{uri: item.cover}} style={ styles.cover } /> 
            )}
         />
      </View>
  )
}

export default HorizontalFlatList

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
    },
    initialSign: {
      color: 'indigo',
      fontSize: 24,
      fontFamily: fonts.PoppinsRegular,
    },
    list: {
       gap: 10
    },
    cover: {
      width: 160,
      height: 250,
      marginHorizontal: 2,
    }
})