import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import { Colors } from "../components/styles";
import { Formik } from 'formik';
import * as yup from 'yup';
import HomeScreen from "./HomeScreen";
// Social buttons
import { FacebookSocialButton } from "react-native-social-buttons";
import {InstagramSocialButton } from "react-native-social-buttons";
import {GoogleSocialButton } from "react-native-social-buttons";



import SignUp from "./SignUp";

function LoginScreen({navigation}) {

  // State Variables
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [signup, setSignup] =useState('false')

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
   <View style={{marginTop:50}}>
          <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={
        (values) => {
          navigation.navigate('HomeScreen')
          console.log(values)}}
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
              <Text style={{ marginLeft:135,fontSize: 18, color: 'red'}}>{errors.email}</Text>
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
              <Text style={{ marginLeft:75,fontSize: 18, color: 'red' }}>{errors.password}</Text>
            }

           <Text style={{marginLeft:140, marginTop:10}}>Forgot Password?</Text>
            {/*SignIn Button  */}
          <View style={styles.container}>
          <View style={styles.button}>
           <Button  onPress={handleSubmit} 
           title="SignIn"
           color='#9370DB'
           /> 
          </View>
          </View>
       
        </>
      )}
    </Formik>


     </View>

     <View>
        <Text style={{marginLeft:210, marginTop:80,fontWeight: "bold"}}>OR</Text>

          {/* Social buttons */}
    
          <View style={styles.sbcontainer} >
              
              <FacebookSocialButton onPress={() => {}} buttonViewStyle={{width:50,backgroundColor:'#fff' }} logoStyle={{marginLeft:120,backgroundColor:'#4267B2' }} textStyle={{color:'#fff'}}/>
              <InstagramSocialButton onPress={() => {}} buttonViewStyle={{width:50}} logoStyle={{marginLeft:80}} textStyle={{color:'#fff'}} />
              <GoogleSocialButton onPress={() => {}} buttonViewStyle={{width:50}} logoStyle={{marginLeft:10}}textStyle={{color:'#fff'}} />
              </View>
  
             

    </View>
    
 </View>
  );
}

const styles = StyleSheet.create({
  
  topView:{
    backgroundColor :"#9370DB",
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
   padding:8,
   marginLeft:110,
   margin:20,
   width:200,

   },

   container: {
    flex: 1,
    padding:5,
    borderRadius: 100,
  
  },
   button:{
    backgroundColor: 'purple',
    width: '50%',
    height: 35,
    marginLeft:110,
    marginTop:30,
    

   },
   sbcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    borderRadius: 100,
    margin:20,
    marginBottom: 60

  },
   

});

export default LoginScreen;