import { StyleSheet, TextInput } from 'react-native'
import fonts from '../utils/globals/fonts'

const AuthInput = ({ action, value, placeholder, keyboardType, otherProps }) => {
  return (
   <TextInput 
      onChangeText={ action } 
      value={ value } 
      placeholder={ placeholder }
      keyboardType={ keyboardType }
      autoCapitalize="none"
      placeholderTextColor={'gray'}
      {...otherProps}
      style={styles.input} 
   />
  )
}

export default AuthInput

const styles = StyleSheet.create({
   input: {
      borderBottomColor: 'darkviolet',
      borderBottomWidth: 1,
      width: '80%',
      color: 'lightgray',
      fontSize: 18,
      fontFamily: fonts.PoppinsRegular,
      paddingVertical: 5
   }
})