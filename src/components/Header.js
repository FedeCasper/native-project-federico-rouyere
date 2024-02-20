import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        {
            title !== 'Home' ? <AntDesign name="arrowleft" size={24} color="white" /> : null
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
    backgroundColor: '#474747',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#8e22bb',
    borderBottomWidth: 3,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 20,
    color: 'white',
  }
})