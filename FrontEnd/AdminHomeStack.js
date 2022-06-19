import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/admin/HomeScreen';
import CompaniesAccess from './screens/admin/CompaniesAccess';
import AdminStack from './screens/admin/AdminStack';


const Stack = createNativeStackNavigator();  


const AdminHomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='CompanyHomeScreen'>
           <Stack.Screen name='AdminStack' component={AdminStack}/>
           <Stack.Screen name='HomeScreen' component={HomeScreen}/>
           <Stack.Screen name='CompanyAccess' component={CompaniesAccess}/>
           {/* <Stack.Screen name='BookingForm' component={VendorBookingForm}/> */}
         </Stack.Navigator> 
  )
}



export default AdminHomeStack;