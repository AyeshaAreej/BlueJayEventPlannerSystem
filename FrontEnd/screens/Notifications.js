import React from 'react'
import {Dimensions,FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import colors from '.././components/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useState, useEffect,useContext}  from 'react'
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import {UserContext} from '../Contexts'
import {OrderContext} from '../Contexts'



const Notifications = () => {



   const [notiData, setNotiData] = useState([]);
  const [orderC,setOrderC] = useContext(OrderContext)
  const [user,setUser] = useContext(UserContext)

   useEffect(()=>{

      let route = ''
  
      if(user.role=='customer'){
        route = 'users'
        console.log(route)
      }else if(user.role=='company'){
        route = 'company'
        console.log(route)
      }else if(user.role=='vendor'){
        route = 'vendor'
        console.log(route)
      }

    
      SecureStore.getItemAsync('token').then(token=>{
  
        console.log('Received Orders',token)
  
        fetch(`https://bluejay-mobile-app.herokuapp.com/${route}/getNotiData`,{
                      method: "get",
                      headers: {
                          Accept: "application/json, text/plain, */*",
                          "Content-Type": "application/json",
                          token
                      }
                    
                }).then(res=>res.json()).then(result=>{
                  // console.log(result)
  
                  if( result.status == 'ok'){
                           setNotiData(result.data)
                        //   if(result.data == ''){
                        //       console.log('No orders found')
                        //       // alert('No orders yet')
                        //   }
                  }else{
                    console.log(result.status)
                  }
  
                }).catch(err=>console.log('catch',err.message))
      })    
  
  
     },[orderC]);
  
     

  
  return (
   //  <ScrollView style={{flex:1, backgroundColor:colors.white,}} contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>
    
   //  <View  style={styles.notificationContainer}> 
   //    <Image source={require('.././assets/profile.jpg')} style={styles.profileImage} />
   //    <View style={{ margin:20, }}>
   //     <Text style={{  fontSize: 23,  color: colors.primary,fontStyle:'italic', marginBottom:10   }}>Floral Weddings Banquet</Text>
   //     <Text style={{  fontSize: 20,  color: colors.dark,   }}>Your Order has been accepted. </Text>
   //    </View>
   // </View>
     
   //  </ScrollView>


   <SafeAreaView style={{flex:1, backgroundColor:colors.white,}} contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>
      
      
    
   <View>
   <Animated.FlatList
    data={notiData}
    vertical
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      justifyContent:'center',
      alignItems:'center',
      
    }}
    renderItem={({item}) => <Card order={item}  />}
  />
  </View>


</SafeAreaView>



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