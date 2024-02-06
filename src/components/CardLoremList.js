import { StyleSheet, Text, View } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const CardLoremList = ( { item, screenWidth, addExampleCard } ) => {
  return (
      <View style={[styles.loremCard, { width: screenWidth - 40}]}>
         <Text style={styles.loremTitle}>{item.title}</Text>
         <Text style={styles.loremBody}>{item.body}</Text>
         <ButtonPrimary title='Add example card' onPress={ () => addExampleCard(item) }/>
      </View>
  )
}

export default CardLoremList

const styles = StyleSheet.create({
   loremCard: {
      backgroundColor: 'gray',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginVertical: 20,
      gap: 10,
      marginHorizontal: 20,
   },
   loremTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: "lightgray",
   },
   loremBody: {
      fontSize: 12,
      fontStyle: 'italic',
      width: "90%",
      color: "lightgray",
      textAlign: 'center',
   }
})