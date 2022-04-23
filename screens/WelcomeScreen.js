
import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import { Colors } from "../components/styles";
import { Formik } from 'formik'
import LoginScreen from "./LoginScreen";
import SignUp from "./SignUp";

function WelcomeScreen() {


  return (
<View>
<View style={styles.logoContainer} >
    <ImageBackground  
     style={styles.logo}
     source={require('../assets/logo2.jpg')}
     resizeMode="cover" >
    </ImageBackground>
    <Text style={styles.tagline}>Event Planners</Text>
</View>

{/* Bottom View */}
  <View style={{paddingTop:280}}>
   <View style={styles.bottomView}>
    <Text style={{color:'#4632A1', fontSize:30, padding:10}}>Welcome</Text>
    <Text style={{padding:7}}>
    The Blue Jay Event Planners Application Company aims to get you in touch with event organization companies to book online services such as catering, music photography and what not!.
    </Text>


    
    <View style={styles.container}>
      <View style={styles.button}>
      <Button title="SignIn"
        color='purple'
      /> 
      </View>
     
      <View style={styles.button} >
      <Button title="SignUp"
        color='purple'
        
      />
      </View>
    </View>
     
</View>
    </View>
    





</View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 130,
  
  },
  logoContainer: {
    top:150,
    alignItems: "center",
    justifyContent:"center",

  },

 brandView :{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
  bottomView:{
  backgroundColor :"pink",
  paddingTop:"12%",
  paddingLeft:8,
  width:360,
  height:415,
  borderTopStartRadius:60,
  borderTopEndRadius:60, 
 },

   tagline:{
    position: "absolute",
    paddingTop:"60%",
    fontSize:20,
    fontWeight:"bold",
    textTransform:"uppercase",
    color:'black',
   },
 
   
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:40,
    borderRadius:5,

  },
  button: {
    backgroundColor: 'purple',
    width: '40%',
    height: 40
  }

});

export default WelcomeScreen;
