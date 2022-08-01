import { View, Text } from 'react-native'
import React from 'react'
import CompanyDetails from './screens/CompanyDetails';
import CompanyHome from './screens/CompanyHome';
import VendorBookingForm from './screens/company/VendorBookingForm';
import CompanyStack from './screens/company/CompanyStack';
import EditCompanyVendorProfile from './screens/EditCompanyVendorProfile';
import ChangePassword from './screens/ChangePassword';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();  


const CompanyHomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='CompanyHomeScreen'>
           <Stack.Screen name='CompanyStack' component={CompanyStack}/>
           <Stack.Screen name='HomeScreen' component={CompanyHome}/>
           <Stack.Screen name='CompanyDetails' component={CompanyDetails}/>
           <Stack.Screen name='BookingForm' component={VendorBookingForm}/>
           <Stack.Screen name='EditCompanyVendorProfile' component={EditCompanyVendorProfile}/>
           <Stack.Screen name="ChangePassword" component={ChangePassword} />
          </Stack.Navigator> 
  )
}



export default CompanyHomeStack;