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


const Stack = createNativeStackNavigator();  


const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='WelcomeScreen'>
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
           <Stack.Screen name='LoginScreen' component={LoginScreen}/>
           <Stack.Screen name='SignUp' component={SignUp}/>
           <Stack.Screen name='HomeScreen' component={HomeScreen}/>
           <Stack.Screen name='CompanyDetails' component={CompanyDetails}/>
           <Stack.Screen name='BookingForm' component={BookingForm}/>
           <Stack.Screen name='VendorBookingForm' component={VendorBookingForm}/>
         </Stack.Navigator> 
  )
}



export default AuthStack