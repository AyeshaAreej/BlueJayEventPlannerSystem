import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import { Auth_Stack, Company_Booking,Admin_Company, User_Home,Company_Home, Vendor_Booking,Admin_Home, Vendor_Home } from './constants';
import AuthStack from './AuthStack';
import UserHomeStack from './UserHomeStack';
import CompanyHomeStack from './CompanyHomeStack';
import AdminHomeStack from './AdminHomeStack';
import VendorHomeStack from './VendorHomeStack';

const MainStack =createStackNavigator();

function RoutNavigator(){
    return (
     <NavigationContainer >
          <MainStack.Navigator initialRouteName={Auth_Stack}>
             <MainStack.Screen
             name={Auth_Stack}
             component={AuthStack}
             options={{headerShown:false}}
             />

   
             <MainStack.Screen
             name={User_Home}
             component={UserHomeStack}
             options={{headerShown:false}}
             />
             <MainStack.Screen
                name={Company_Booking}
                component={UserHomeStack}
                options={{headerShown:false}}
             />

             <MainStack.Screen
                name={Company_Home}
                component={CompanyHomeStack}
                options={{headerShown:false}}
             />

               <MainStack.Screen
                name={Vendor_Booking}
                component={CompanyHomeStack}
                options={{headerShown:false}}
             />
               <MainStack.Screen
                name={Admin_Home}
                component={AdminHomeStack}
                options={{headerShown:false}}
             />

            <MainStack.Screen
                name={Vendor_Home}
                component={VendorHomeStack}
                options={{headerShown:false}}
             />



            
          </MainStack.Navigator>
     </NavigationContainer>
    )
}

export default RoutNavigator;