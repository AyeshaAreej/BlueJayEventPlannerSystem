import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './screens/LoginScreen';
import SignUp from './screens/SignUp';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import CompanyDetails from './screens/CompanyDetails';
import BookingForm from './screens/BookingForm';
import VendorBookingForm from './screens/company/VendorBookingForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserStack from './UserStack';

const Stack = createNativeStackNavigator();  


const UserHomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='UserStack'>
          <Stack.Screen name='UserStack' component={UserStack}/>
           <Stack.Screen name='HomeScreen' component={HomeScreen}/>
           <Stack.Screen name='CompanyDetails' component={CompanyDetails}/>
           <Stack.Screen name='BookingForm' component={BookingForm}/>
         </Stack.Navigator> 
  )
}



export default UserHomeStack