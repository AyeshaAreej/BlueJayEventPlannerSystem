import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStack from './AuthStack';
import AppStack from './AppStack'


const Drawer = createDrawerNavigator();


export default function App() {

 return (
<>

    <NavigationContainer>
          {/* <AuthStack/> */}
          <AppStack/>
    </NavigationContainer>

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