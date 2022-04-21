import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import { Colors } from "../components/styles";


import SignUp from "./SignUp";



function LoginScreen() {

  // State Variables
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  return (
    
   <View style={{flex:1, backgroundColor:'#EFE4B0'}} >
    <ImageBackground  
    
     source={require('../assets/logo1.png')}
     resizeMode="cover" style={styles.image } >
         <Text style={styles.tagline}>
         Blue Jay Event Planners
         </Text>
         
     </ImageBackground>

      {/*Bottom    view */}
     <View style={styles.bottomView}>
      {/* Welcome View */}
        <View style={{padding:20}}>
        <Text style={{color:'#4632A1', fontSize:34}}>Welcome</Text>
        <Text>Don't have an  account?
        <Text style={{color:'red', fontStyle:'normal'}}>
          {''}
         Register now</Text>
        </Text>
        {/* Form Inputs View */}
          <View style={{marginTop:50}}>
           <TextInput
             style={styles.input}
             placeholder='Enter Email'
             onChangeText={(val)=> setEmail(val)}
           />

           <TextInput
             style={styles.input}
             placeholder='Enter Password'
             secureTextEntry
             autoCorrect={false}
             onChangeText={(val)=> setPassword(val)}
           />
          {/*SignIn Button  */}
          <View style={styles.signin}>
            <Button title="SignIn" />
          </View>
          {/* SignUp Button */}
          <View style={styles.signup}>
          <Button title="SignUP"  onPress={()=> <SignUp/>}/>
          </View>
            
           
          </View>
        </View>
    </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  
  image: {
    alignItems:"center",
    backgroundColor:"#EFE4B0",
    justifyContent:"center",
     height: '50%',     
    paddingTop: Platform.OS==='android' ? StatusBar.CurrentHeight :0,
    borderBottomStartRadius:60,
    borderBottomEndRadius:60, 
  },
 brandView :{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
  bottomView:{
  flex:1,
  backgroundColor:Colors.primary,
  backgroundColor :"#fff",
  borderTopStartRadius:60,
  borderTopEndRadius:60, 
 },

   tagline:{
    position: "absolute",
    paddingTop:"25%",
    fontSize:23,
    fontWeight:"bold",
    textTransform:"uppercase",
    paddingVertical:20,
    color:'#D9AEA5',
   },
   input:{
   borderBottomColor :'#D291BC',
  borderBottomWidth:1,
   padding:6,
   paddingLeft:20,
   marginLeft:50,
   margin:12,
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
