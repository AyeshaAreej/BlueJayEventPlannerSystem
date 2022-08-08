import React from 'react'
import VendorStack from './VendorStack';
import CompanyVendorOrders from './screens/CompanyVendorOrders';
import EditCompanyVendorProfile from './screens/EditCompanyVendorProfile';
import ChangePassword from './screens/ChangePassword';
// Help Screens
import MyAccount from './screens/help/MyAccount';
import SafetyConcerns from './screens/help/SafetyConcerns';
import PaymentsandRefunds from './screens/help/PaymentsandRefunds';
import ForgotPassword from './screens/help/ForgotPassword';
import OrderDetails from './screens/OrderDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();  


const VendorHomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='VendorStack'>
           <Stack.Screen name='VendorStack' component={VendorStack}/>
           {/* <Stack.Screen name='HomeScreen' component={CompanyHome}/> */}
           <Stack.Screen name='CompanyVendorOrders' component={CompanyVendorOrders}/>
           <Stack.Screen name='EditCompanyVendorProfile' component={EditCompanyVendorProfile}/>
           <Stack.Screen name="ChangePassword" component={ChangePassword} />
           <Stack.Screen name="MyAccount" component={MyAccount} />
           <Stack.Screen name="SafetyConcerns" component={SafetyConcerns} />
           <Stack.Screen name="PaymentsandRefunds" component={PaymentsandRefunds} />
           <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
           <Stack.Screen name="OrderDetails" component={OrderDetails} />
         </Stack.Navigator> 
  )
}



export default VendorHomeStack;