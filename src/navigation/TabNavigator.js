import { StyleSheet } from 'react-native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrderStack from './OrderStack'
import TabBarIcon from '../components/TabBarIcon'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
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
  )
}

export default TabNavigator

const styles = StyleSheet.create({
   tabBar: {
      backgroundColor: 'indigo',
      height: 70,
      elevation: 5,
   }
})