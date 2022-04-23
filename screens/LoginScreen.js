
import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import { Colors } from "../components/styles";
import { Formik } from 'formik'


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
     source={require('../assets/logo2.1.png')}
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
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
           <TextInput
             style={styles.input}
             name="email"
             placeholder='Enter Email'
             onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
           />

           <TextInput
             style={styles.input}
             name="password"
            placeholder="Enter Password"
             onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
      
           />
            {/*SignIn Button  */}
          <View style={styles.signin}>
            <Button  onPress={handleSubmit} title="SignIn" />
          </View>
       
        </>
      )}
    </Formik>
      
         
          {/* SignUp Button */}
          <View style={styles.signup}>
          <Button title="SignUP"  onPress={()=> setSignup('true')}/>
           {/* {signup ==='true' && <SignUp/>} */}
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
    width:360,
    height:220,
    //  borderTopStartRadius:60,
    //  borderTopEndRadius:60, 
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
   signin:{
    padding:3,
    paddingLeft:50,
    marginLeft:50,
    margin:4,
    width:143,

   },
   signup:{
    
    paddingLeft:50,
    marginLeft:50,
    margin:4,
    width:140,
   },

});

export default LoginScreen;
