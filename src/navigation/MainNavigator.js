import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native' 
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchSession } from '../utils/db'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'


const MainNavigator = () => {

   const dispatch = useDispatch()
   const user = useSelector( state => state.auth )

   useEffect(() => {
      ( async () => {
         const session = await fetchSession()
         if ( session.rows.length ) {
            const user = session.rows._array[0]
            dispatch( setUser( user ) )
         }
      })()
   }, [])

  return (
   <NavigationContainer>
      {
         user.idToken ? <TabNavigator /> : <AuthStack />
      }
   </NavigationContainer>
  )
}

export default MainNavigator