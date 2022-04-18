import React from "react";
import { ImageBackground, Platform, ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import { Colors } from "../components/styles";
function LoginScreen() {
  return (
   <View style={{flex:1, backgroundColor:'#fff'}} >
    <ImageBackground  
    source={require('../assets/logo1.png')}
     resizeMode="cover" style={styles.image} >
         <Text style={styles.tagline}>
         Blue Jay Event Planners
         </Text>
         
        
    </ImageBackground>
    <View style={styles.bottomView}>
      {/* Welcome view */}
        <View>

        </View>
    </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  
  image: {
    alignItems:"center",
    justifyContent:"center",
     height: '50%',
    paddingTop: Platform.OS==='android' ? StatusBar.CurrentHeight :0,
    
  },
 brandView :{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
  bottomView:{
  flex:1,
  backgroundColor:'pink',
  
  borderTopStartRadius:60,
  borderTopEndRadius:60,

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
   fontSize:25,
   fontWeight:"600",
   paddingVertical:20,
  color:Colors.darkLight,
   },

});

export default LoginScreen;
