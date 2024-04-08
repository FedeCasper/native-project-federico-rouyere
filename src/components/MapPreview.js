import { StyleSheet, Image } from 'react-native'

const MapPreview = ( { latitude, longitude } ) => {

   const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${ latitude },${ longitude }
   &zoom=13
   &size=600x300
   &maptype=roadmap
   &markers=color:blue%7Clabel:S%7C40.${ latitude },${ longitude }
   &key=AIzaSyCQDU07HYk99Ja1eR8xnlT-VAlfkEUu4ck`

  return (
     <Image 
      style={ styles.image } 
      source={ latitude ? { uri: mapPreviewUrl } : require( '../../assets/map.png' ) } 
     />
  )
}

export default MapPreview

const styles = StyleSheet.create({
   image: {
      width: 300,
      height: 300
   }
})