import { Pressable, StyleSheet, Text } from 'react-native'

const AuthButton = ({title, onPress}) => {
   return (
      <Pressable style={styles.button} onPress={onPress}>
         <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
   )
}

export default AuthButton

const styles = StyleSheet.create({
   button: {
      backgroundColor: 'lightgray',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: "80%",
      marginTop: 20
   },
   buttonText: {
      color: 'indigo',
      fontWeight: 'bold',
      fontSize: 16,
      fontStyle: 'italic',
   }
})