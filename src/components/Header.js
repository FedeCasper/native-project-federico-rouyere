import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import fonts from '../utils/globals/fonts'
import { deleteSession } from '../utils/db'
import { clearUser } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'


const Header = ({ title, navigation }) => {

  const dispatch = useDispatch()
  const idToken = useSelector( state => state.auth.idToken )

  const onLogout = () => {
    dispatch( clearUser() )
    deleteSession()
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light" />
        {
            title !== 'ScaryApp' ? 
            <Pressable onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="lightgray" /> 
            </Pressable>
            : 
            null
        }
        <Text style={[styles.text , { marginRight: title === 'ScaryApp' ? 0 : "auto" } ]}>{title}</Text>
        { idToken && (
          <Pressable onPress={ onLogout } style={{ position: title === 'ScaryApp' ? 'absolute' : 'relative', right: title === 'ScaryApp' ? 20 : "" }}>
            <FontAwesome name="sign-out" size={24} color="lightgray"  />
          </Pressable>
        )}
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
    backgroundColor: 'indigo',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#8e22bb',
    borderBottomWidth: 3,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.PoppinsRegular,
    color: 'lightgray',
  }
})