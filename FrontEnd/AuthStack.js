import { View, Text } from 'react-native'
import React from 'react'
import WelcomeScreen from './screens/WelcomeScreen';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUp from './screens/SignUp';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();  


const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
     <Stack.Screen name='SplashScreen' component={SplashScreen}/>
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
           <Stack.Screen name='LoginScreen' component={LoginScreen}/>
           <Stack.Screen name='SignUp' component={SignUp}/>
          
         </Stack.Navigator> 
  )
}



export default AuthStack