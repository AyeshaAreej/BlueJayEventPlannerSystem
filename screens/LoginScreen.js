import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import { Colors } from "../components/styles";
import { Formik } from 'formik'
// Social buttons
import { FacebookSocialButton } from "react-native-social-buttons";
import {InstagramSocialButton } from "react-native-social-buttons";
import {GoogleSocialButton } from "react-native-social-buttons";



import SignUp from "./SignUp";

function LoginScreen() {

  // State Variables
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [signup, setSignup] =useState('false')

  return (
    
   <View style={{flex:1}} >
   <View style={styles.topView}>
   <ImageBackground
   style={styles.logo}
     source={require('../assets/logo2.png')}
     resizeMode="cover" >
    </ImageBackground>
     <Text style={{color:'white', fontSize:25,fontWeight:'bold'}}>Sign In</Text>
    
 </View>

      {/* Form Inputs View */}
   <View style={{marginTop:50}}>
          <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <>
           <TextInput
             style={styles.input}
             name="email"
             placeholder='Enter Email'
             onChangeText={handleChange('email')}
            // onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
           />

           <TextInput
             style={styles.input}
             name="password"
            placeholder="Enter Password"
             onChangeText={handleChange('password')}
            // onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
      
           />
           <Text style={{marginLeft:120}}>Forgot Password?</Text>
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
        <Text style={{marginLeft:165, marginTop:80}}>OR</Text>

          {/* Social buttons */}
    
      <View style={styles.sbcontainer} >
      <FacebookSocialButton onPress={() => {}} buttonViewStyle={{width:50,backgroundColor:'#fff' }} logoStyle={{marginLeft:40,backgroundColor:'#4267B2' }} textStyle={{color:'white'}}/>
      <InstagramSocialButton onPress={() => {}} buttonViewStyle={{width:50}} logoStyle={{marginLeft:40}} textStyle={{color:'white'}} />
      <GoogleSocialButton onPress={() => {}} buttonViewStyle={{width:50}} logoStyle={{marginLeft:40}}textStyle={{color:'white'}} />
     
      </View>
      <Text style={{marginLeft:80}}>Don't Have an Account?  <Text style={{fontWeight: "bold"}}> SignUp</Text> </Text>
    </View>
    
 </View>
  );
}

const styles = StyleSheet.create({
  
  topView:{
    backgroundColor :"#9370DB",
    paddingTop:"18%",
    paddingLeft:8,
    width:360,
    height:220,
    
   },

 logo: {
  width: 200,
  height: 110,
  marginLeft:70,
 

},
   
   input:{
   borderBottomColor :'#9370DB',
   borderBottomWidth:1,
   padding:8,
   marginLeft:80,
   margin:20,
   width:200,

   },

   container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    padding:5,
    borderRadius: 100,
  
  },
   button:{
    backgroundColor: 'purple',
    width: '50%',
    height: 35,
    marginLeft:86,
    marginTop:30,
    

   },
   sbcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    borderRadius: 100,
    margin:60,

  },
   

});

export default LoginScreen;