import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import CompanyDetails from './screens/CompanyDetails';
import BookingForm from './screens/BookingForm';
import EditProfile from  './screens/EditProfile';
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
           <Stack.Screen name="EditProfile" component={EditProfile}/>
         </Stack.Navigator> 
  )
}



export default UserHomeStack