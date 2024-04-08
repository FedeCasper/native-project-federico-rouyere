import { StyleSheet, TextInput, Text, View } from 'react-native'
import fonts from '../utils/globals/fonts'

const AuthInput = ({ action, value, placeholder, inputMode, otherProps, error }) => {
  return (
   <View style={styles.container}>
      <TextInput 
         onChangeText={ action } 
         value={ value } 
         placeholder={ placeholder }
         inputMode={ inputMode }
         autoCapitalize="none"
         placeholderTextColor={'gray'}
         {...otherProps}
         style={styles.input} 
         />
         { error ? <View><Text style={styles.error}>{error}</Text></View> : null }
   </View>
  )
}

export default AuthInput

const styles = StyleSheet.create({
   container: {
      width: '80%',
   },
   input: {
      borderBottomColor: 'darkviolet',
      borderBottomWidth: 1,
      color: 'lightgray',
      fontSize: 18,
      fontFamily: fonts.PoppinsRegular,
      paddingVertical: 5
   }, 
   error: {
      color: 'red',
      fontSize: 12,
      fontStyle: 'italic',
      marginTop: 5
   }
})