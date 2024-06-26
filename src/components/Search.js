import { Keyboard, Pressable, StyleSheet, TextInput, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'

const Search = ({ handleKeyword }) => {

   const [ input, setInput ] = useState('')
   const [ error, setError ] = useState( false )

   const handleInput = (t) => setInput(t)
   

   const handleSearch = () => {
      const expresionRegular = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
      if(expresionRegular.test(input)){
         setError( true )
         return
      }
      setError( false )
      handleKeyword(input)
      Keyboard.dismiss()
   }
   
   const handleClear = () => {
      setInput('')
      handleKeyword('')
      setError( false )
   }

   return (
      <View style={ styles.container } >
         <View style={ styles.inputContainer }>
            <TextInput
               placeholder='Search...'
               value={ input } 
               onChangeText={ handleInput }
               style={ styles.input }
            />
            <Pressable onPress={ handleSearch }>
               <AntDesign name="search1" size={24} color="black" />
            </Pressable>
            <Pressable onPress={ handleClear }>
               <AntDesign name="close" size={24} color="black" />
            </Pressable>
         </View>
         {
            error &&
            <View style={ styles.errorContainer }>
               <Text style={ { color: 'white' } }>No se puede ingresar caracteres especiales</Text> 
            </View>
         }
      </View>
   )
}

export default Search

const styles = StyleSheet.create({
   container: {
      flexDirection: 'column',
   },
   inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
      paddingHorizontal: 30
   },
   input: {
      flex: 1,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
   },
   errorContainer: {
      backgroundColor: 'red',
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center'
   }
})