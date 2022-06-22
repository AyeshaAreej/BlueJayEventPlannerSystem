import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Company_Home, User_Home, Admin_Home,Vendor_Home, Auth_Stack } from "../constants";

import { StatusBar } from "react-native-web";
import COLORS from "../components/colors";
import { Formik } from 'formik';
import * as yup from 'yup';
// Social buttons
import { FacebookSocialButton } from "react-native-social-buttons";
import {GoogleSocialButton } from "react-native-social-buttons";





function SplashScreen({navigation}) {



  return (
    
   <View style={styles.container} >
  
   <ImageBackground
   style={styles.logo}
     source={require('../assets/logo2.1.png')}
     resizeMode="cover" >
    </ImageBackground>
    <Text style={styles.tagline}>Event Booking, Planning & Execution</Text>

    
    {/* <Button
           onPress={()=>navigation.navigate(Auth_Stack)}
           title="SignUp"
           color={COLORS.primary}
           />  */}

    
 </View>
  );
}

const styles = StyleSheet.create({
  
 container:{
    flex:1, 
    backgroundColor :COLORS.primary,
    width:'100%',
    height:'100%',
    justifyContent:'center',
 

    
   },
   tagline:{
    position: "absolute",
    paddingTop:"40%",
   margin:31,
    fontSize:20,
    fontWeight:"bold",
    // textTransform:"uppercase",
    color:COLORS.white,
   },
 logo: {
  width: 220,
  height: 120,
  marginLeft:'22%',
},

 

});

export default SplashScreen;