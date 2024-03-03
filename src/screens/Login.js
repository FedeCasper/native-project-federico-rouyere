import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthInput from '../components/AuthInput'
import ButtonPrimary from '../components/AuthButton'
import fonts from '../utils/globals/fonts'


const Login = ({ navigation }) => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const onSubmit = () => {
    console.log( email, password );
  }

  return (
    <View style={styles.container}>
      <Text style={ styles.title }>Sign in!</Text>
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
        <ButtonPrimary title="Login" onPress={ onSubmit } />
        <View style={ styles.textContainer }>
          <Text style={ styles.text }>Don't have an account?</Text>
          <Pressable onPress={ () => navigation.navigate('Register') }>
            <Text style={ styles.signButton }>Register</Text>
          </Pressable>
        </View>
    </View>
  )
}

export default Login

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