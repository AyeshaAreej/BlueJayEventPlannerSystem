import React from "react";
import { ImageBackground, Icon, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import { Colors } from "../components/styles";
import {Icons} from 'react-native-vector-icons'
function LoginScreen() {
  return (
    
   <View style={{flex:1, backgroundColor:'#fff'}} >
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
        <Text style={{color:'red', fontStyle:'italic '}}>
          {''}
         Register now</Text>
        </Text>
        {/* Form Inputs View */}
          <View style={{marginTop:50}}>
            

             <TextInput placeholder="Email"
      />
            
           
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
  backgroundColor :"#fff"
 },

  buttonContainer:{
 padding:20,
 width:"100%",
  },
 
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
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

});

export default LoginScreen;
