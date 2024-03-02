import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native' 
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrderStack from './OrderStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon'

const Tab = createBottomTabNavigator();


const MainNavigator = () => {
  return (
   <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar
        }}
         >
         <Tab.Screen 
          name="ShopStack"
          component={ ShopStack } 
          options={{
            tabBarIcon: ( { focused } ) => <TabBarIcon title="Shop" iconName="home" focused={ focused }/>
          }}
          />
         <Tab.Screen 
          name="CartStack"
          component={ CartStack }
          options={{
            tabBarIcon: ( { focused } ) => <TabBarIcon title="Cart" iconName="shopping-cart" focused={ focused }/>
          }}
         />
         <Tab.Screen
         name="OrderStack"
         component={ OrderStack }
         options={{
          tabBarIcon: ( { focused } ) => <TabBarIcon title="Order" iconName="list" focused={ focused }/>
        }}
         />
      </Tab.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({
   tabBar: {
      backgroundColor: 'indigo',
      height: 70,
      elevation: 5,
   }
})