import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import MyOrders from './screens/MyOrders';
import Location from './screens/Location';
import Message from './screens/Message';
import HelpCentre from './screens/HelpCentre';
import PaymentMethod from './screens/PaymentMethod';

import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './components/CustomDrawer';


const Drawer = createDrawerNavigator();


const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={props=><CustomDrawer {...props} /> } useLegacyImplementation>
        <Drawer.Screen name='HomeScreen' component={HomeScreen}/>
    <Drawer.Screen name='profile' component={Profile} />
     <Drawer.Screen name='MyOrders' component={MyOrders} /> 
     <Drawer.Screen name='Location' component={Location} />
     <Drawer.Screen name='Message' component={Message} />
     <Drawer.Screen name='HelpCentre' component={HelpCentre} />
     <Drawer.Screen name='PaymentMethod' component={PaymentMethod} />
</Drawer.Navigator>
  )
}



export default AppStack