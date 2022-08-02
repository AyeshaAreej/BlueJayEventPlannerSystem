
// Navigation remaining

import React from 'react';
import {useState,useEffect} from 'react';
import {Dimensions,FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,   Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../components/colors';
import * as SecureStore from 'expo-secure-store';


const {width}= Dimensions.get('screen');
const cardWidth=width/1.1;

const MyOrders=({navigation})=>{
 

  const [myOrders, setMyOrders] = React.useState([]);

  useEffect(()=>{

    console.log("1",myOrders)
    SecureStore.getItemAsync('token').then(token=>{

      console.log('My orders',token)

      fetch(`http://10.0.2.2:5000/users/myOrders`,{
                    method: "get",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        token
                    }
                  
              }).then(res=>res.json()).then(result=>{
                //console.log(result)

                if( result.status == 'ok'){

                        if(result.data == ''){
                            console.log('No companies found')
                            alert('No companies found')
                        }else{
                          setMyOrders(result.data)
                          
                        }
                }else{
                  console.log(result.status)
                }

              }).catch(err=>console.log('catch',err.message))
    })    


   },[]);
  
// Card

const Card=({order,navigation})=>{

  
return(
   
    <View style={{...style.card}}>
      
          <View style={style.priceTag}>
                  <View style={{color:COLORS.white, }}>
                  <MaterialCommunityIcons name="delete-outline" size={30} color={ COLORS.white}/>
                  </View>
          </View>

          <View style={{flexDirection:'row'}}>
                  <Image source={require("../assets/hotel4.jpg")} style={style.cardImage} />
              
                  <Text style={{ marginLeft:20, marginTop:50,marginBottom:20}}>

                  <Text style={{fontSize:16,fontWeight:"bold"}}>Event Type:</Text> <Text style={{fontSize:16}}>{order.event_type}</Text>{'\n'}{'\n'}
                  <Text style={{fontSize:16,fontWeight:"bold"}}>No of guests:</Text> <Text style={{fontSize:16}}>{order.no_of_guests}</Text>{'\n'}{'\n'}
                  <Text style={{fontSize:16,fontWeight:"bold"}}>Date:</Text> <Text style={{fontSize:16}}>{order.date}</Text>
                  
                  </Text>
          </View>

    
          <View style={{flexDirection:"row"}}>
                  
                    <Text style={{fontWeight:"bold",fontSize:17,paddingLeft:15,paddingTop:10}}>Name : {order.company_name}</Text>
                     
                    <Text style={{fontWeight:"bold",fontSize:20,paddingTop:20,paddingLeft:80}}>{order.status}</Text>
          
          </View>   

           <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                  
           <Text style={{fontWeight:"bold",fontSize:17,paddingLeft:15}}>Total : Rs.{order.available_budget}</Text>
                   
          </View>      
        
    </View>
    
    
    

)
};



    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
      
        <ScrollView showsVerticalScrollIndicator={false}>
    
         <View>
         <Animated.FlatList
          data={myOrders}
          vertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent:'center',
            alignItems:'center',
            
          }}
          renderItem={({item}) => <Card order={item}  />}
        />
        </View>


         
        </ScrollView>
     </SafeAreaView>
   
 )
}

const style = StyleSheet.create({

    card: {
      height: 250,
      width: cardWidth,
      elevation: 15,
      borderRadius: 15,
      marginBottom:30,
      backgroundColor: COLORS.white,
      
    },
    cardImage: {
      height: 160,
      width: '50%',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
    },
    priceTag: {
      height: 50,
      width: 80,
      backgroundColor: COLORS.primary,
      position: 'absolute',
      zIndex: 1,
      right: 0,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardDetails: {
      height: 80,
      borderRadius: 15,
      backgroundColor: COLORS.white,
      position: 'absolute',
      bottom: 0,
      padding: 20,
      width: '100%',
    },

  
   
  });

export default MyOrders;