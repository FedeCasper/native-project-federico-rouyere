import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const TabBarIcon = ({title, iconName, focused}) => {
  return (
    <View style={ [styles.container, focused && styles.focused] }>
      <FontAwesome5 name={iconName} size={focused ? 28 : 20} color={focused ? 'orange' : 'lightgray'} />
      <Text style={[styles.text, { display: focused ? 'none' : 'flex' } ]}>{title}</Text>
    </View>
  )
}
 
export default TabBarIcon

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
      height: "100%",
      width: "90%"
   },
   focused: {
      borderBottomColor: 'orange',
      borderBottomWidth: 1,
   },
   text: {
      color: 'lightgray',
      fontSize: 10
   }
})