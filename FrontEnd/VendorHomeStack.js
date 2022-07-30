import React from 'react'
import VendorStack from './VendorStack';
import CompanyVendorOrders from './screens/CompanyVendorOrders';
import EditCompanyVendorProfile from './screens/EditCompanyVendorProfile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();  


const VendorHomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='VendorStack'>
           <Stack.Screen name='VendorStack' component={VendorStack}/>
           {/* <Stack.Screen name='HomeScreen' component={CompanyHome}/> */}
           <Stack.Screen name='CompanyVendorOrders' component={CompanyVendorOrders}/>
           <Stack.Screen name='EditCompanyVendorProfile' component={EditCompanyVendorProfile}/>
         </Stack.Navigator> 
  )
}



export default VendorHomeStack;