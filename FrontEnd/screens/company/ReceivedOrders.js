import React from 'react';
import {useState,useEffect,useContext} from 'react';
import {Dimensions,FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,   Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../../components/colors';

import {OrderContext} from '../../OrderContext'
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

const {width}= Dimensions.get('screen');
const cardWidth=width/1.08;

const ReceivedOrders=({navigation})=>{
 

  const [myOrders, setMyOrders] = React.useState([]);
  const [orderC,setOrderC] = useContext(OrderContext)

  useEffect(()=>{

    
    SecureStore.getItemAsync('token').then(token=>{

      console.log('Received Orders',token)

      fetch(`http://10.0.2.2:5000/company/rec_Orders`,{
                    method: "get",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        token
                    }
                  
              }).then(res=>res.json()).then(result=>{
                console.log(result)

                if( result.status == 'ok'){
                         setMyOrders(result.data)
                        if(result.data == ''){
                            console.log('No orders found')
                            alert('No orders yet')
                        }
                }else{
                  console.log(result.status)
                }

              }).catch(err=>console.log('catch',err.message))
    })    


   },[orderC]);



   const acceptOrder = (o_id)=>{

    SecureStore.getItemAsync('token').then(token=>{

      console.log('Accept Order',token,o_id)

      const value = {o_id: o_id}

      fetch(`http://10.0.2.2:5000/company/approveOrder`,{
                    method: "patch",
                    body: JSON.stringify(value),
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        token
                    }
                  
              }).then(res=>res.json()).then(result=>{
                console.log(result)

                if( result.status == 'ok'){
                        setOrderC(!orderC)
                }else{
                  console.log(result.status)
                }

              }).catch(err=>console.log('catch',err.message))

    })    

   }
  
// Card

const Card=({order})=>{
  const navigation = useNavigation();
  
  function handleClick(){
    // console.log("Card clicked")
    navigation.navigate('CompanyOrderDetails',{order})
  }
if(order){
return(
   
      <TouchableOpacity style={{...style.card}} onPress={handleClick}>


          <View style={style.priceTag}>
                  <View style={{color:COLORS.white, }}>
                  <MaterialCommunityIcons name="delete-outline" size={30} color={ COLORS.white}/>
                  </View>
          </View>

           <View style={{flexDirection:'row'}}>
                 
                  <Text style={{ marginLeft:20, marginTop:20,marginBottom:10}}>
                          <Text style={{fontSize:20, fontWeight:"bold"}}>Order :</Text>{'\n'}{'\n'}
                          <Text style={{fontSize:20, fontWeight:"bold"}}>Event: </Text> <Text style={{fontSize:20}}>{order.event_type}</Text>{'\n'}{'\n'}
                          <Text style={{fontSize:20,fontWeight:"bold"}}>Date:</Text> <Text style={{fontSize:20}}>{order.date}</Text>{'\n'}{'\n'}
                          <Text style={{fontWeight:"bold",fontSize:20,paddingLeft:15}}>Total :</Text><Text style={{fontSize:20,paddingLeft:15,paddingTop:8}}>{order.available_budget}</Text>
                          <Text style={{fontWeight:"bold",fontSize:20,paddingLeft:100}}>                        {order.status}</Text>
            
                 </Text>

          </View>

      
   
           <View style={{flexDirection:'row'}}>
               
          

                <View  style={{paddingLeft:220}}>
                <Button
                //onPress={acceptOrder(order._id)}
                onPress={()=>{acceptOrder(order._id)}}
                title="Accept"
                color={COLORS.primary}
                /> 
                </View>

               <View style={{paddingLeft:15, borderRadius:12}}>
                <Button  title="Reject"
                color={COLORS.primary}/>
              </View>
        
               
          </View>
        

    </TouchableOpacity>
    
    
    

)
}
else{
  return(
    <>
    </>
  )
}
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
      height: 226,
      width: cardWidth,
      elevation: 15,
      borderRadius: 15,
      marginBottom:10,
      marginTop:10,
      backgroundColor: COLORS.white,
      
    },
    cardImage: {
      height: 180,
      width: '55%',
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

export default ReceivedOrders;