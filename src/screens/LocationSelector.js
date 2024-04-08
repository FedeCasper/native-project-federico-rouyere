import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import AddButton from '../components/AddButton'
import MapPreview from '../components/MapPreview'
import * as Location from 'expo-location'
import { useSelector } from 'react-redux'
import { usePutUserLocationMutation } from '../app/services/profile'

const LocationSelector = ( { navigation } ) => {
   
   const [ location, setLocation ] = useState( { latitude: "", longitude: "" } )
   const [ errorMessage, setErrorMessage ] = useState( null )
   const [ address, setAddress ] = useState( '' )
   const localId = useSelector( state => state.auth.localId )
   const [ triggerPutUserLocationMutation ] = usePutUserLocationMutation()

   useEffect( ( ) => {
      ( async ( )=>{
         let { status } = await Location.requestForegroundPermissionsAsync( )
         if ( status !== 'granted' ) {
            setErrorMessage( 'Permission to access location was denied' )
            return
         }
         let location = await Location.getCurrentPositionAsync( )
         setLocation( { latitude: location.coords.latitude, longitude: location.coords.longitude } )
      } )( )
   }, [] )

   useEffect( ( ) => {
      ( async () => {
         if ( location.latitude ){
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${ location.latitude },${ location.longitude }&key=AIzaSyCQDU07HYk99Ja1eR8xnlT-VAlfkEUu4ck`)
            const data = await response.json()
            setAddress( data.results[0].formatted_address )
         }
      })()
   }, [ location ] )

   const onConfirmAddres = async () => {
      const locationFormatted = {
         address,
         location
      }
      await triggerPutUserLocationMutation( { localId, locationFormatted } )
      navigation.goBack( )
   }

   return (
      <View style={styles.container}>
         <Text style={styles.text}>{ address }</Text>
         <MapPreview latitude={ location.latitude } longitude={ location.longitude } />
         <AddButton title={ 'Confirm Address' } onPress={ onConfirmAddres } />
      </View>
   )
}

export default LocationSelector

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
   },
   text: {
      color: 'indigo',
      fontSize: 16,
      width: '80%'
   }
})