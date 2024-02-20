import { StyleSheet, Text, View } from 'react-native'

const BaseShadow = ({ style, children }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

export default BaseShadow

const styles = StyleSheet.create({
   container: {
      /* Android */
      elevation: 5,
      /* iOS */
      shadowColor: 'black',
      shadowOffset: {
         width: 0,
         height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
   }
})