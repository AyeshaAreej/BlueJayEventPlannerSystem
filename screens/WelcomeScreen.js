
import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import { Colors } from "../components/styles";
import { Formik } from 'formik'
import LoginScreen from "./LoginScreen";
import SignUp from "./SignUp";

function WelcomeScreen({navigation}) {


  return (
<View style={{backgroundColor:"#fff"}}>
<View style={styles.logoContainer} >
    <ImageBackground  
     style={styles.logo}
     source={require('../assets/logo2.png')}
     resizeMode="cover" >
    </ImageBackground>
    <Text style={styles.tagline}>Event Planners</Text>
</View>

{/* Bottom View */}
  <View style={{paddingTop:250}}>
   <View style={styles.bottomView}>
    <Text style={{color:'white', fontSize:30, padding:10, fontWeight:'bold'}}>Welcome</Text>
    <Text style={{padding:7,color:'white'}}>
    The Blue Jay Event Planners Application Company aims to get you in touch with event organization companies to book online services such as catering, music photography and what not!.
    </Text>


    
    <View style={styles.container}>
      <View style={styles.button}>
      <Button onPress={()=>navigation.navigate('LoginScreen')} title="SignIn"
        color='purple'
      /> 
      </View>
     
      <View style={styles.button} >
      <Button onPress={()=>navigation.navigate('SignUp')} title="SignUp"
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
    width: 220,
    height: 130,
  
  },
  logoContainer: {
    top:150,
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent:"center",
    
  },

 brandView :{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
  bottomView:{
  backgroundColor :"#9370DB",
  paddingTop:"18%",
  paddingLeft:8,
  width:410,
  height:415,
  borderTopStartRadius:60,
  borderTopEndRadius:60, 
 },

   tagline:{
    position: "absolute",
    paddingTop:"50%",
    fontSize:20,

     fontWeight:"bold",
    textTransform:"uppercase",
    color:'purple',
   },
 
   
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:30,
    borderRadius: 100,
    margin:12,

  },
  button: {
    backgroundColor: 'purple',
    width: '45%',
    height: 40,
  }

});

export default WelcomeScreen;
