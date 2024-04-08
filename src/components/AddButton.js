import { StyleSheet, Text, View, Pressable } from 'react-native'

const AddButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{ title }</Text>
    </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'indigo',
      width: '70%',
      paddingVertical: 10,
      margin: 10,
   },
   text: {
      color: 'lightgray',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16
   }
})