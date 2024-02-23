import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light" />
        {
            title !== 'Home' ? 
            <Pressable onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="white" /> 
            </Pressable>
            : 
            null
        }
        <Text style={[styles.text , { marginRight: title === 'Home' ? 0 : "auto" } ]}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    height: 50,
    width: '100%',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#8e22bb',
    borderBottomWidth: 3,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 20,
    color: 'indigo',
  }
})