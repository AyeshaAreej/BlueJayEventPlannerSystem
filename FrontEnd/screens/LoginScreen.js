import React from "react";;
import {useState, useEffect,useRef, useReducer}  from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { ImageBackground, Platform, Button,TextInput, TouchableOpacity, StyleSheet, View,Text, AsyncStorage } from "react-native";
import { Company_Home, User_Home, Admin_Home,Vendor_Home } from "../constants";
import { RadioButton } from 'react-native-paper';
import { StatusBar } from "react-native-web";
import COLORS, { colors } from "../components/colors";
import { Formik } from 'formik';
import * as yup from 'yup';
// Social buttons
import { FacebookSocialButton } from "react-native-social-buttons";
import {GoogleSocialButton } from "react-native-social-buttons";
import * as SecureStore from 'expo-secure-store';


// import {PORT} from"@env"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


function LoginScreen({navigation}) {

  const [checked, setChecked] = React.useState('customer');
  const [expoPushToken, setExpoPushToken] = useState('');
   const [notification, setNotification] = useState(false);
   const notificationListener = useRef();
   const responseListener = useRef();


   useEffect(() => {
    registerForPushNotification().then(token=>setExpoPushToken(token));
  
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
  
    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
  })


// token
async function registerForPushNotification(){
    
   
  let token;
  if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
              const { status } = await Notifications.requestPermissionsAsync();
              finalStatus = status;
            }
            if (finalStatus !== 'granted') {
              alert('Failed to get push token for push notification!');
              return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token,"Token for mobile device");
            
  } else {
    //alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
} 


  

  console.log(checked)
  async function handleLogin(values){
    // navigation.navigate(User_Home)
    const role= checked

    if(role=='customer'){
      
           fetch(`http://10.0.2.2:5000/users/logIn`,{
                    method: "post",
                    body: JSON.stringify(values),
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json"
                    }   
                  
              }).then(res=>res.json()).then(result=>{
                console.log(result)

                if(result.status === 'ok')
                      {
                          
                          SecureStore.setItemAsync('token',result.data)
                          navigation.navigate(User_Home)
                          // navigation.navigate(Company_Home)
                      }
                      else{
                        console.log(result.error)
                        alert('Invalid username or password')
                      }

              }).catch(err=>console.log(err.message))

             // console.log('login')
    }

    else if (role=='company'){
      
                    fetch(`http://10.0.2.2:5000/company/logIn`,{
                      method: "post",
                      body: JSON.stringify(values),
                      headers: {
                          Accept: "application/json, text/plain, */*",
                          "Content-Type": "application/json"
                      }   
                    
                }).then(res=>res.json()).then(result=>{
                  console.log(result)

                  if(result.status === 'ok')
                        {
                            
                            SecureStore.setItemAsync('token',result.data);
                            navigation.navigate(Company_Home)
                        }
                        else{
                          console.log(result.error)
                          alert('Invalid username or password')
                        }

                }).catch(err=>console.log(err.message))
    }

    else if(role=='vendor'){
                      fetch(`http://10.0.2.2:5000/vendor/logIn`,{
                        method: "post",
                        body: JSON.stringify(values),
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json"
                        }   
                      
                  }).then(res=>res.json()).then(result=>{
                    console.log(result)

                    if(result.status === 'ok')
                          {
                              
                              SecureStore.setItemAsync('token',result.data);
                              navigation.navigate(Vendor_Home)
                          }
                          else{
                            console.log(result.error)
                            alert('Invalid username or password')
                          }

                  }).catch(err=>console.log(err.message))

    }

    else{
      console.log('no role')
    }
    
   
  }
  return (
   <View style={{flex:1, backgroundColor:'#fff'}} >
     {/* <StatusBar barStyle="light-content"  translucent backgroundColor="#fff"/> */}
   <View style={styles.topView}>
   <ImageBackground
   style={styles.logo}
     source={require('../assets/logo2.1.png')}
     resizeMode="cover" >
    </ImageBackground>

     <Text style={{color:'white',marginLeft:140, fontSize:30,fontWeight:'bold'}}>Sign In</Text>

    
 </View>

      {/* Form Inputs View */}
   <View style={styles.center}>
          <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={
        (values) => {
          //console.log(values)
          handleLogin(values)}}


          validationSchema={yup.object().shape({
            email: yup
            .string()
            .email()
            .required('Email is required.'),           
          password: yup
            .string()
            .min(5, 'More than 5 characters are needed.')
            .max(11, 'Less than 12 characters are allowed.')
            .required(),
          })}

    
    >
      {({ handleChange, handleSubmit, values,errors,touched, setFieldTouched }) => (
        <>
           <TextInput
             style={styles.input}
             name="email"
             placeholder='Enter Email'
             onChangeText={handleChange('email')}
             onBlur={()=>setFieldTouched('email')}
            value={values.email}
            keyboardType="email-address"
            
           />
            {touched.email && errors.email &&
              <Text style={{ marginLeft:10,fontSize: 18, color: 'red'}}>{errors.email}</Text>
            }

           <TextInput
             style={styles.input}
             name="password"
             placeholder="Enter Password"
             onChangeText={handleChange('password')}
             onBlur={() => setFieldTouched('password')}
            value={values.password}
            secureTextEntry />
            {touched.password && errors.password &&
              <Text style={{ marginLeft:10,fontSize: 18, color: 'red' }}>{errors.password}</Text>
            }
            <Text style={{fontSize: 18,padding:10}} >Forgot Password?</Text>
            {/* Radio Button */}
 
            <View style={{flexDirection:'row'}}>

                  <View style={styles.rightTag}>
                        
                        <View style={styles.leftTag}>
                            <RadioButton
                              value="customer"
                              status={ checked === 'customer' ? 'checked' : 'unchecked' }
                              onPress={() => setChecked('customer')}
                              uncheckedColor={COLORS.primary}
                              color={COLORS.primary}
                            />
                        </View>
                        <Text style={{fontSize: 18,color:COLORS.grey, fontWeight: 'bold'}}>Customer</Text>

                  </View>

                  <View style={styles.rightTag}>
                        
                        <View style={styles.leftTag}>
                            <RadioButton
                              value="company"
                              status={ checked === 'company' ? 'checked' : 'unchecked' }
                              onPress={() => setChecked('company')}
                              uncheckedColor={COLORS.primary}
                              color={COLORS.primary}
                            />
                        </View>
                        <Text style={{fontSize: 18,color:COLORS.grey, fontWeight: 'bold'}}>Company</Text>
                        
                  </View>
     

                  <View style={styles.rightTag}>
                        
                        <View style={styles.leftTag}>
                            <RadioButton
                              value="vendor"
                              status={ checked === 'vendor' ? 'checked' : 'unchecked' }
                              onPress={() => setChecked('vendor')}
                              uncheckedColor={COLORS.primary}
                              color={COLORS.primary}
                            />
                        </View>
                        <Text style={{fontSize: 18,color:COLORS.grey, fontWeight: 'bold'}}>Vendor</Text>

                  </View>
     
</View>     
    
            {/*SignIn Button  */}
          <View style={styles.center}>
          <View style={styles.button}>
           <Button  onPress={handleSubmit} 
           title=" Sign In "
           color='purple'
           /> 
          </View>
          </View>

      

        </>
      )}
    </Formik>


     </View>

     <View style={styles.center}>
      
    {/* Social buttons */}
    
         <View  style={styles.socialbTag}>
              <GoogleSocialButton onPress={() => {}} buttonViewStyle={{width:'74%',backgroundColor:'#F5F5DC', }} logoStyle={{marginLeft:10}}textStyle={{color:COLORS.dark,fontSize:18}} />
              <FacebookSocialButton onPress={() => {}} buttonViewStyle={{width:'70%'}} logoStyle={{marginLeft:10}}textStyle={{color:COLORS.white,fontSize:18}} />
              </View>
       </View>
    
 </View>
  );
}

const styles = StyleSheet.create({
  
  topView:{
    backgroundColor :COLORS.primary,
    paddingTop:"11%",
    paddingLeft:30,
    width:'100%',
    height:250,
    
   },

 logo: {
  width: 200,
  height: 130,
  marginLeft:90,
},
   
   input:{
    borderColor :COLORS.white,
    margin:10,
    padding:18,
    width:280,
    fontSize:20,
    borderWidth:2,
    elevation:20,
    borderRadius:15,
    backgroundColor:'white'

   },

   button:{
    backgroundColor: 'purple',
    width: '120%',
    height: 37,
    
    

   },
   
center:{
  paddingTop:25,justifyContent:'center',
   alignItems:'center',
},
  socialbTag:{
     marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  radioButton:{
    uncheckedColor:COLORS.primary,
    color:COLORS.primary,
  },
  rightTag:{
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    

  },
leftTag:{
 
  color: COLORS.grey,
  marginLeft: 5,
  paddingBottom:5,
}, 

buttonContainer:{
  justifyContent:'center',
  alignItems:'center',

},
editButton:{
justifyContent:'center',
alignItems:'center',
marginTop:5,
width:180,
borderColor :COLORS.primary,
borderWidth:4,
elevation:15,
borderRadius:15,
backgroundColor:COLORS.primary,
},

});

export default LoginScreen;