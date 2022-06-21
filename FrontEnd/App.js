import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import COLORS from './components/colors';
import VendorStack from './VendorStack';
import SignUp from './screens/SignUp';
import LoginScreen from './screens/LoginScreen';
import RoutNavigator from './RoutNavigator';
const Drawer = createDrawerNavigator();

export default function App() {

 return (
<>
     {/* <NavigationContainer>    */}
          <RoutNavigator/>
    {/* </NavigationContainer>  */}
  
</>
 );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});