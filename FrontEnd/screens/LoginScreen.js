import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text, AsyncStorage } from "react-native";
import { Company_Home, User_Home, Admin_Home,Vendor_Home } from "../constants";

import { StatusBar } from "react-native-web";
import COLORS, { colors } from "../components/colors";
import { Formik } from 'formik';
import * as yup from 'yup';
// Social buttons
import { FacebookSocialButton } from "react-native-social-buttons";
import {GoogleSocialButton } from "react-native-social-buttons";
import * as SecureStore from 'expo-secure-store';

import {PORT} from"@env"



function LoginScreen({navigation}) {

  // State Variables
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [signup, setSignup] =useState('false')

  async function handleLogin(values){

    const role='customer'

    if(role=='customer'){
      
           fetch(`http://10.0.2.2:${PORT}/users/logIn`,{
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
                      }
                      else{
                        console.log(result.error)
                      }

              }).catch(err=>console.log(err.message))

             // console.log('login')
    }

    else if (role=='company'){
      
                    fetch(`http://10.0.2.2:${PORT}/company/logIn`,{
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
                        }

                }).catch(err=>console.log(err.message))
    }

    else if(role=='vendor'){
                  //     fetch(`http://10.0.2.2:${PORT}/vendor/logIn`,{
                  //       method: "post",
                  //       body: JSON.stringify(values),
                  //       headers: {
                  //           Accept: "application/json, text/plain, */*",
                  //           "Content-Type": "application/json"
                  //       }   
                      
                  // }).then(res=>res.json()).then(result=>{
                  //   console.log(result)

                  //   if(result.status === 'ok')
                  //         {
                              
                  //             SecureStore.setItemAsync('token',result.data);
                  //             navigation.navigate(Vendor_Home)
                  //         }
                  //         else{
                  //           console.log(result.error)
                  //         }

                  // }).catch(err=>console.log(err.message))

    }

    else{
      console.log('no role')
    }
    
   
  }
  return (
    
   <View style={{flex:1, backgroundColor:'#fff'}} >
   <View style={styles.topView}>
   <ImageBackground
   style={styles.logo}
     source={require('../assets/logo2.1.png')}
     resizeMode="cover" >
    </ImageBackground>
     <Text style={{color:'white', fontSize:25,fontWeight:'bold'}}>Sign In</Text>
    
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
            .max(11, 'More than 12 characters are allowed.')
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

           <Text style={styles.center}>Forgot Password?</Text>
            {/*SignIn Button  */}
          <View style={styles.center}>
          <View style={styles.button}>
           <Button  onPress={handleSubmit} 
           title="SignIn"
           color='purple'
           /> 
          </View>
          </View>
       
        </>
      )}
    </Formik>


     </View>

     <View style={styles.center}>
        <Text style={{fontWeight: "bold"}}>OR</Text>

          {/* Social buttons */}
    
          
              
    
              <View  style={styles.rightTag}>
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
    paddingTop:"18%",
    paddingLeft:8,
    width:'100%',
    height:220,
    
   },

 logo: {
  width: 200,
  height: 110,
  marginLeft:100,
},
   
   input:{
   borderBottomColor :'#9370DB',
   borderBottomWidth:1,
   padding:14,
   width:260,
   fontSize:20,

   },

   button:{
    backgroundColor: 'purple',
    width: '90%',
    height: 35,
    borderRadius:20,
    
    

   },
   
center:{
  paddingTop:25,justifyContent:'center',
   alignItems:'center',
},
  rightTag:{
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

});

export default LoginScreen;