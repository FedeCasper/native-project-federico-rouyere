import { Pressable, StyleSheet, Text } from 'react-native'

const ButtonPrimary = ({title, onPress}) => {
   return (
      <Pressable style={styles.button} onPress={onPress}>
         <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
   )
}

export default ButtonPrimary

const styles = StyleSheet.create({
   button: {
      backgroundColor: '#36E0C6',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: "100%",
   },
   buttonText: {
      color: 'indigo',
      fontWeight: 'bold',
      fontSize: 16,
      fontStyle: 'italic',
   }
})