import React,{useNavigation} from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import {UserContext} from '../Contexts'
import { useState,useContext,useEffect } from 'react';
import COLORS from '../components/colors';
import { FontAwesome } from '@expo/vector-icons';

import * as SecureStore from 'expo-secure-store';


import { useIsFocused } from '@react-navigation/native';


function VendorHome({navigation}) {

  const isFocused = useIsFocused();
  
  const [user,setUser] = useContext(UserContext)

  const [pending,setPending] = useState('')
  const [completed,setCompleted] = useState('')
  const [approved,setApproved] = useState('')


  useEffect(()=>{

    
    SecureStore.getItemAsync('token').then(token=>{

      console.log('pending and completed count',token)

      fetch(`https://bluejay-mobile-app.herokuapp.com/vendor/getPendingCount`,{
                    method: "get",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        token
                    }
                  
              }).then(res=>res.json()).then(result=>{

                if( result.status == 'ok'){
                        setPending(result.data)
                }

              }).catch(err=>console.log('catch',err.message))


      fetch(`https://bluejay-mobile-app.herokuapp.com/vendor/getApprovedCount`,{
                    method: "get",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        token
                    }
                  
              }).then(res=>res.json()).then(result=>{
            
                if( result.status == 'ok'){
                       setApproved(result.data)
                }

              }).catch(err=>console.log('catch',err.message))


      fetch(`https://bluejay-mobile-app.herokuapp.com/vendor/getCompletedCount`,{
                method: "get",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                    token
                }
              
          }).then(res=>res.json()).then(result=>{
            
            if( result.status == 'ok'){
                   setCompleted(result.data)
            }

          }).catch(err=>console.log('catch',err.message))


    })    




   },[isFocused]);

  return (
    <>
     <ScrollView
    showsVerticalScrollIndicator={false}  
     contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 300,
      }} >
      <StatusBar barStyle="light-content"  translucent backgroundColor={COLORS.primary}
      />
       <ImageBackground style={style.headerImage} source={{ uri: user.image }}>
        <View style={style.header}>
        
        </View>
      </ImageBackground>
   
    <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize: 25, fontWeight: 'bold',padding:7,color:COLORS.primary}}>{user.vendor_name}</Text>
      </View>

    

    
     <View style={{marginTop: 20, display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <View style={{width:'45%',padding:8,backgroundColor:COLORS.primary,justifyContent:'center',alignItems:'center',borderRadius:20}}>
            <Text style={{color:COLORS.white,padding:10,fontSize:16,fontWeight:'bold'}}>Total Pending Orders</Text>
            <View style={style.iconContainer}>
             <FontAwesome name="list" color={COLORS.white} size={50} />
          </View>
          <Text style={{color:COLORS.white,padding:7,fontSize:20,fontWeight:'bold'}}>{pending}</Text>
        </View>

        <View style={{width:'45%',padding:8,backgroundColor:COLORS.primary,margin:6,justifyContent:'center',alignItems:'center',borderRadius:20,elevation:15,}}>
        <Text style={{color:COLORS.white,padding:10,fontSize:16,fontWeight:'bold'}}>Total Approved Orders</Text>
            <View style={style.iconContainer}>
             <FontAwesome name="thumbs-up" color={COLORS.white} size={50} />
          </View>
          <Text style={{color:COLORS.white,padding:7,fontSize:20,fontWeight:'bold'}}>{approved}</Text>
        </View>
     </View>


     <View style={{ display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
     
        <View style={{width:'45%',padding:8,backgroundColor:COLORS.primary,margin:6,justifyContent:'center',alignItems:'center',borderRadius:20,elevation:15,}}>
        <Text style={{color:COLORS.white,padding:10,fontSize:16,fontWeight:'bold'}}>Total Completed Orders</Text>
            <View style={style.iconContainer}>
             <FontAwesome name="check" color={COLORS.white} size={50} />
          </View>
          <Text style={{color:COLORS.white,padding:7,fontSize:20,fontWeight:'bold'}}>{completed}</Text>
        </View>
     </View>
       
   
    </ScrollView>
    </>
  )
}


const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
  
    backgroundColor: COLORS.primary,
    borderRadius: 30,
     justifyContent:'center',
    alignItems: 'center',
  },
  headerImage: {
    height: '60%',
    borderRadius:30,
    overflow: 'hidden',
    height:200,
    margin:20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    height:'50%',
    // backgroundColor:COLORS.primary,
  },
 
  
});

export default VendorHome;
