import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import AuthInput from '../components/AuthInput'
import ButtonPrimary from '../components/AuthButton'
import fonts from '../utils/globals/fonts'


const Register = ({ navigation }) => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')

  const onSubmit = () => {
    console.log( email, password );
  }

  return (
    <View style={styles.container}>
      <Text style={ styles.title }>Register now!</Text>
        <AuthInput 
          action={ (t) => setEmail(t) } 
          value={ email } 
          placeholder="Email" 
          keyboardType={ 'email-address' } 
        />
        <AuthInput 
          action={ (t) => setPassword(t) } 
          value={ password } 
          placeholder="Password" 
          keyboardType={ 'default' } 
          otherProps={{ secureTextEntry: true }} 
          />
        <AuthInput 
          action={ (t) => setConfirmPassword(t) } 
          value={ confirmPassword } 
          placeholder="Confirm Password" 
          keyboardType={ 'default' } 
          otherProps={{ secureTextEntry: true }} 
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