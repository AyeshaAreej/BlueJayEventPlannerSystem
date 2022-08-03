import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import CompanyDetails from './screens/CompanyDetails';
import BookingForm from './screens/BookingForm';
import EditProfile from  './screens/EditProfile';
import ChangePassword from './screens/ChangePassword';
import MyAccount from './screens/help/MyAccount';
import SafetyConcerns from './screens/help/SafetyConcerns';
import PaymentsandRefunds from './screens/help/PaymentsandRefunds';
import ForgotPassword from './screens/help/ForgotPassword';

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
           <Stack.Screen name="ChangePassword" component={ChangePassword} />
           <Stack.Screen name="MyAccount" component={MyAccount} />
           <Stack.Screen name="SafetyConcerns" component={SafetyConcerns} />
           <Stack.Screen name="PaymentsandRefunds" component={PaymentsandRefunds} />
           <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
         </Stack.Navigator> 
  )
}



export default UserHomeStack