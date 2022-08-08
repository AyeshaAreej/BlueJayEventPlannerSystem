import { View, Text, StyleSheet, TouchableOpacity,Image, Platform, Button, ScrollView } from 'react-native'
import React from 'react'
import colors from '.././components/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useState, useEffect,useRef, useReducer}  from 'react'
// import * as Notificationss from 'expo-notifications';
// import * as Device from 'expo-device';

const Notifications = () => {

  
  return (
    <ScrollView style={{flex:1, backgroundColor:colors.white,}} contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>
    
    <View  style={styles.notificationContainer}> 
      <Image source={require('.././assets/profile.jpg')} style={styles.profileImage} />
      <View style={{ margin:20, }}>
       <Text style={{  fontSize: 23,  color: colors.primary,fontStyle:'italic', marginBottom:10   }}>Floral Weddings Banquet</Text>
       <Text style={{  fontSize: 20,  color: colors.dark,   }}>Your Order has been accepted. </Text>
      </View>
   </View>

   <View  style={styles.notificationContainer}> 
      <Image source={require('.././assets/profile.jpg')} style={styles.profileImage} />
      <View style={{ margin:20, }}>
       <Text style={{  fontSize: 23,  color: colors.primary,fontStyle:'italic', marginBottom:10   }}>Hot & Spicy Foods</Text>
       <Text style={{  fontSize: 20,  color: colors.dark,   }}>Your Order has been rejected. </Text>
      </View>
   </View>

   <View  style={styles.notificationContainer}> 
      <Image source={require('.././assets/profile.jpg')} style={styles.profileImage} />
      <View style={{ margin:20, }}>
       <Text style={{  fontSize: 23,  color: colors.primary,fontStyle:'italic', marginBottom:10   }}>Ilyana</Text>
       <Text style={{  fontSize: 20,  color: colors.dark,   }}>Ordered for birthday party. </Text>
      </View>
   </View>


   
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
notificationContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   height:120,
   marginTop:10,
   width:'98%',
   borderColor :colors.white,
   elevation:20,
   borderRadius:25,
   backgroundColor:colors.grey
   },
 
 
  profileImage:{
  height: 100,
    width: '20%',
    borderRadius: 30,

 },
 });

export default Notifications