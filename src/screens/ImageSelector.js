import { StyleSheet, Text, View, Image } from 'react-native'
import AddButton from '../components/AddButton';
import { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { useGetImageQuery, usePutImageMutation } from '../app/services/profile';
import { useSelector } from 'react-redux'

const ImageSelector = ( { navigation } ) => {

   const [ image, setImage ] = useState('')
   const [ triggerPutImage ] = usePutImageMutation()
   const localId = useSelector( state => state.auth.localId )
   const { data, isSuccess } = useGetImageQuery( localId )

   useEffect( () => {
      if( isSuccess && data ) setImage( data.image )
   }, [ isSuccess, data ] )

   const pickImage = async () => {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if ( granted ) {
         let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.3,
            base64: true
         })

         if ( !result.canceled ) {
            setImage( 'data:image/jpg;base64,' + result.assets[0].base64 )
         }
      }
   } 

   const confirmImage = () => {
      triggerPutImage( { image, localId } )
      navigation.navigate( 'Profile' )
   }

   return (
      <View style={ styles.container }>
         <Image 
            source={ image ? { uri: image } : require('../../assets/user.png') } 
            style={ styles.image }
            resizeMode="cover"
         />
         <AddButton title={ 'Add Avatar'} onPress={ pickImage } />
         <AddButton title={ 'Confirm'} onPress={ confirmImage } />
      </View>
   )
}

export default ImageSelector

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20
   },
   image: {
      width: 200,
      height: 200,
      borderRadius: 100
   }
})