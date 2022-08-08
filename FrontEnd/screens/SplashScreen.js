import React from "react";
import {useState,useEffect}  from 'react'
import { ImageBackground, Button, TextInput, Platform,Alert,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Company_Home, User_Home, Admin_Home,Vendor_Home, Auth_Stack } from "../constants";
import WelcomeScreen from "./WelcomeScreen";
import { StatusBar } from "react-native-web";
import COLORS from "../components/colors";

import * as SecureStore from 'expo-secure-store';

// import {PORT} from"@env"


function SplashScreen({navigation}) {


useEffect(()=>{
 setTimeout(()=>{

  SecureStore.getItemAsync('token').then(token=>{

    if(token == ' ' || token == null){

      console.log("No token")
      navigation.navigate('WelcomeScreen')
    }else{
    console.log('splash screen',token)
    

    fetch(`http://10.0.2.2:5000/`,{
                  method: "get",
                  headers: {
                      Accept: "application/json, text/plain, */*",
                      "Content-Type": "application/json",
                      token
                  }   
                
            }).then(res=>res.json()).then(result=>{
              console.log('inside splash fetch',result)

              if(result.data.role == 'customer')
                    {
                      navigation.navigate(User_Home)
                     
                    }
              else if(result.data.role == 'company')
                    {
                      navigation.navigate(Company_Home)
                    }
              if(result.data.role == 'vendor')
                    {
                      navigation.navigate(Vendor_Home)
                    }

            }).catch(err=>console.log('catch',err.message))
     }  
  })
  
 },1000);
},[]);


  return (
    
   <View style={styles.container} >
  
   <ImageBackground
   style={styles.logo}
     source={require('../assets/logo2.1.png')}
     resizeMode="cover" >
    </ImageBackground>
    <Text style={styles.tagline}>Event Booking, Planning & Execution</Text>


    
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
    paddingLeft:"5%",
   margin:31,
    fontSize:20,
    fontWeight:"bold",
    // textTransform:"uppercase",
    color:COLORS.white,
   },
 logo: {
  width: 220,
  height: 180,
  marginLeft:'25%',
},

 

});

export default SplashScreen;