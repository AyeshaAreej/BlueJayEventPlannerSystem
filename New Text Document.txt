import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import { symbolicateLogLazy } from "react-native/Libraries/LogBox/Data/LogBoxData";
import { Colors } from "../components/styles";



function SignUp() {

 
  return (
    
   <View style={{flex:1, backgroundColor:'#B5DDC2'}} >
    <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={ styles.tagline}>Create Account</Text>
     {/* Form  */}
     <View style={{paddingTop:50, }}> 
         <TextInput placeholder="Enter Name" style={styles.input}/>
         <TextInput placeholder="Enter Email" style={styles.input}/>
         <TextInput placeholder="Enter Password"   secureTextEntry style={styles.input} />
         <TextInput placeholder="Enter Phone Number" style={styles.input}/>
         <TextInput placeholder="Enter City" style={styles.input}/>
         <View style={styles.button}>
          <Button title="Login"
          color="#841584"
          touchSoundDisabled='true'
  />
         </View>
         
     </View>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  
 
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
   
    top: 70,
    alignItems: "center",
    justifyContent:"center",
  },
  tagline:{
    fontSize:25,
    fontWeight:"600",
    paddingVertical:10,
  
    },
    
  input:{

    borderWidth:2,
    borderColor:'#957DAD',
    padding:6,
    margin:10,
    width:210,
    justifyContent:"center",
    alignItems:'center',
 
    },
    tagline:{
        fontSize:25,
        fontWeight:"600",
        paddingVertical:20,
        },
    button:{
    
 

    justifyContent:"center",
    alignItems:'center',


 
 
    }

});

export default SignUp;
