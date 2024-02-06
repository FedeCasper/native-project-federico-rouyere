import { StyleSheet, Text, View, FlatList } from 'react-native'
import CardLoremList from './CardLoremList'

const ListLorems = ({ lorems, screenWidth, addExampleCard, isKeyboardVisible }) => {
  return (
   <View>
      <FlatList
         horizontal
         pagingEnabled={true}
         data={lorems}
         keyExtractor={ (item) => item.id }
         style={styles.loremContainer}
         renderItem={ ({item}) => (
            <CardLoremList item={item} screenWidth={screenWidth} addExampleCard={addExampleCard} />
         )}
      />
   </View>
  )
}

export default ListLorems

const styles = StyleSheet.create({
   loremContainer: {
      backgroundColor: '#E1E1E1',
      gap: 10,
      borderTopColor: 'blueviolet',
      borderTopWidth: 1,
   }
})