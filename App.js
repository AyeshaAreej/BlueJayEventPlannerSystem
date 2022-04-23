import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignUp from './screens/SignUp';
import WelcomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();  

  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName='WelcomeScreen'>
              <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
              <Stack.Screen name='LoginScreen' component={LoginScreen}/>
              <Stack.Screen name='SignUp' component={SignUp}/>
            </Stack.Navigator>
    </NavigationContainer>
   
  
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
