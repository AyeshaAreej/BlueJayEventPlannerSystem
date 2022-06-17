import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import COLORS from './components/colors';
import CompanyStack from './CompanyStack';
import AdminStack from './screens/admin/AdminStack';
import VendorStack from './VendorStack';
import CompanyDetails from './screens/CompanyDetails';
import BookingForm from './screens/BookingForm';
import SignUp from './screens/SignUp';
import LoginScreen from './screens/LoginScreen';
import VendorBookingForm from './screens/company/VendorBookingForm';



const Drawer = createDrawerNavigator();

export default function App() {

 return (
<>

{/* <LoginScreen/> */}
{/* <BookingForm/> */}
{/* <SignUp/> */}
{/* <CompanyDetails/>   */}
{/* <Card hotel={hotels}/> */}
<VendorBookingForm/>
     {/* <NavigationContainer>    */}

          {/* <AdminStack/> */}
          {/* <AuthStack/> */}
          {/* <UserStack/> */}
          {/* <CompanyStack/>  */}
          {/* <VendorStack/>   */}
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