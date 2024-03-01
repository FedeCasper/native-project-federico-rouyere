import { StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import { fontsCollection } from './src/utils/globals/fonts'
import MainNavigator from './src/navigation/MainNavigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'

const App = () => {

  const [ fontsLoaded ] = useFonts( fontsCollection )
  if(!fontsLoaded) return null

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})