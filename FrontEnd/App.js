import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RoutNavigator from './RoutNavigator';
const Drawer = createDrawerNavigator();
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
export default function App() {

 return (
<>
{/* <SplashScreen/> */}
     {/* <NavigationContainer>    */}
          {/* <RoutNavigator/> */}
    {/* </NavigationContainer>  */}
    <LoginScreen/>
  
</>
 );
 }
