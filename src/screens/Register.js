import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import AuthInput from '../components/AuthInput'
import ButtonPrimary from '../components/AuthButton'
import fonts from '../utils/globals/fonts'
import { useRegisterMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { registerSchema } from '../utils/validations/authSchema'
import { deleteSession, insertSession } from '../utils/db'



const Register = ({ navigation }) => {

  const dispatch = useDispatch()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const [ errorEmailMsg, setErrorEmailMsge ] = useState('')
  const [ errorPasswordMsge, setErrorPasswordMsge ] = useState('')
  const [ errorConfirmPasswordMsge, setErrorConfirmPasswordMsge ] = useState('')
  const [ triggerRegister ] = useRegisterMutation()


  const onSubmit = async () => {
    try {
      registerSchema.validateSync( { email, password, confirmPassword } )
      const { data } = await triggerRegister( { email, password } )
      deleteSession()
      insertSession( data )
      dispatch( setUser( { email: data.email, idToken: data.idToken, localId: data.localId } ) )
    } catch (error) {
      setErrorEmailMsge( '' )
      setErrorPasswordMsge( '' )
      setErrorConfirmPasswordMsge( '' )
      switch (error.path) {
        case 'email':
          setErrorEmailMsge( error.message )
          break
        case 'password':
          setErrorPasswordMsge( error.message )
          break
        case 'confirmPassword':
          setErrorConfirmPasswordMsge( error.message )
          break
        default:
          break
      }
    }
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Register now!</Text>
        <AuthInput 
          action={ (t) => setEmail(t) } 
          value={ email } 
          inputMode={ 'email' }
          keyboardType={ 'email-address' }
          error={ errorEmailMsg }
        />
        <AuthInput 
          action={ (t) => setPassword(t) } 
          value={ password } 
          placeholder="Password" 
          inputMode={ 'none' } 
          otherProps={ { secureTextEntry: true } }
          error={ errorPasswordMsge }
          />
        <AuthInput 
          action={ (t) => setConfirmPassword(t) } 
          value={ confirmPassword } 
          placeholder="Confirm Password" 
          inputMode={ 'none' } 
          otherProps={ { secureTextEntry: true } } 
          error={ errorConfirmPasswordMsge }
          />
        <ButtonPrimary title="Register" onPress={ onSubmit } />
        <View style={ styles.textContainer }>
          <Text style={ styles.text }>Already have an account?</Text>
          <Pressable onPress={ () => navigation.navigate('Login') }>
            <Text style={ styles.signButton }>Login</Text>
          </Pressable>
        </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'indigo',
      gap: 20
   },
   title: {
      color: 'lightgray',
      fontSize: 30,
      fontFamily: fonts.PoppinsBlack,
      marginBottom: 20,
   },
   textContainer: {
      gap: 10
   },
   text: {
      textAlign: 'center',
      color: 'lightgray',
   },
   signButton: {
      textAlign: 'center',
      color: 'aquamarine',
      fontWeight: 'bold',
   }
})