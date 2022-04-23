import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import { useFormik } from 'formik';
import { Colors } from "../components/styles";




function SignUp() {

  return (
    
   <View style={{flex:1, backgroundColor:'#B5DDC2'}} >
    <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={ styles.tagline}>Create Account</Text>
     {/* Form  */}
     <View style={{paddingTop:50, }}> 

     
         <TextInput placeholder="Enter Name" name="name" style={styles.input}/>
         <TextInput placeholder="Enter Email" name="email" style={styles.input}/>
         <TextInput placeholder="Enter Password" name="password" secureTextEntry style={styles.input} />
         <TextInput placeholder="Enter Phone Number" name="phoneNumber" style={styles.input}/>
         <TextInput placeholder="Enter City" name="city" style={styles.input}/>
         <View style={styles.button}>
          <Button title="Login"
          color="#841584"
          touchSoundDisabled='true' /> 
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
