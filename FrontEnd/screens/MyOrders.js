import React from 'react';
import {useState,useEffect,useContext} from 'react';
import {Dimensions,Alert,FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,   Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../components/colors';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import {OrderContext} from '../Contexts'

const {width}= Dimensions.get('screen');
const cardWidth=width/1.1;

const MyOrders=()=>{
 
  const [orderC,setOrderC] = useContext(OrderContext)
  const [myOrders, setMyOrders] = React.useState([]);

  useEffect(()=>{

    
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


   const showAlert = (o_id)=>{
    // console.log(o_id)
 Alert.alert(
  "Are your sure?",
  "Are you sure you want to cancell this order?",
  [
    
    {
      text: "Yes",
      onPress: ()=>{cancelOrder(o_id)}
    },
    
    {
      text: "No",
      onPress: () => {
        console.log('order not cancelled')
      },
    },
  ]
);

}


const cancelOrder = (o_id)=>{

SecureStore.getItemAsync('token').then(token=>{

  console.log('Cancell Order',token,o_id)

  const value = {o_id: o_id}

  fetch(`http://10.0.2.2:5000/users/cancelOrder`,{
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
    navigation.navigate('OrderDetails',{order})
  }
return(
   
    <TouchableOpacity style={{...style.card}} onPress={handleClick}>
      
          <View style={style.priceTag}>
                  <View style={{color:COLORS.white, }}>
                  <MaterialCommunityIcons name="delete-outline" size={30} color={ COLORS.white} onPress={()=>{showAlert(order._id)}}/>
                  </View>
          </View>

          <View style={{flexDirection:'row'}}>
                  <Image source={{ uri: order.image }} style={style.cardImage} />
              
                  <Text style={{ marginLeft:10, marginTop:75,marginBottom:20}}>

                  <Text style={{fontSize:18, fontWeight:"bold"}}>Event: </Text> <Text style={{fontSize:16}}>{order.event_type}</Text>{'\n'}{'\n'}
                 
                  <Text style={{fontSize:18,fontWeight:"bold"}}>Date:</Text> <Text style={{fontSize:16}}>{order.date}</Text>
                  
                  </Text>
          </View>

    
          <View style={{flexDirection:"row"}}>
                  
                    <Text style={{fontWeight:"bold",fontSize:17,paddingLeft:15,paddingTop:10}}>Name : {order.company_name}</Text>
                     
                    <Text style={{fontWeight:"bold",fontSize:20,paddingTop:20,paddingLeft:80}}> {order.status}</Text>
          
          </View>   

           <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                  
           <Text style={{fontWeight:"bold",fontSize:17,paddingLeft:15}}>Total : Rs.{order.available_budget}</Text>
                   
          </View>      
        
    </TouchableOpacity>
    
    
    

)
};



    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <StatusBar barStyle="light-content"  translucent backgroundColor={COLORS.primary}/>
                
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

     </SafeAreaView>
   
 )
}

const style = StyleSheet.create({

    card: {
      height: 250,
      width: cardWidth,
      elevation: 15,
      borderRadius: 15,
      marginBottom:10,
      marginTop:15,
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