import React from 'react';
import {Dimensions,FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,   Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useState,useEffect,useContext} from 'react';
import COLORS from '../components/colors';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import {OrderContext} from '../Contexts'


const {width}= Dimensions.get('screen');
const cardWidth=width/1.12;

const AcceptedOrders=({navigation})=>{
 
  const [myOrders, setMyOrders] = React.useState([]);
  
  const [orderC,setOrderC] = useContext(OrderContext)

  useEffect(()=>{

    
    SecureStore.getItemAsync('token').then(token=>{

      console.log('My orders',token)

      fetch(`http://10.0.2.2:5000/company/myOrders`,{
                    method: "get",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        token
                    }
                  
              }).then(res=>res.json()).then(result=>{
                console.log(result)

                if( result.status == 'ok'){

                        if(result.data == ''){
                            console.log('No orders found')
                            alert('No orders yet')
                        }else{
                          setMyOrders(result.data)
                          
                        }
                }else{
                  console.log(result.status)
                }

              }).catch(err=>console.log('catch',err.message))
    })    


   },[orderC]);


// Card

const Card=({order})=>{

  const navigation = useNavigation();
  
  function handleClick(){
    // console.log("Card clicked")
    navigation.navigate('HireVendors',{order})
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
                
                  <Text style={{ marginLeft:20, marginTop:25,marginBottom:20}}>

                  <Text style={{fontSize:20, fontWeight:"bold"}}>Order :</Text>{'\n'}{'\n'}
            
                  <Text style={{fontSize:20, fontWeight:"bold"}}>Event: </Text> <Text style={{fontSize:20}}>{order.event_type}</Text>{'\n'}{'\n'}
                 
                  <Text style={{fontSize:20,fontWeight:"bold"}}>Date:</Text> <Text style={{fontSize:20}}>{order.date}</Text>
                  
                  <Text style={{fontWeight:"bold",fontSize:22,paddingTop:20}}>                 {order.status}</Text>{'\n'}{'\n'}
                  
                  <Text style={{fontWeight:"bold",fontSize:20,paddingLeft:15}}>Total :</Text> <Text style={{fontSize:20}}> Rs.{order.available_budget}</Text>
            
                  
                  </Text>
          </View>


    </TouchableOpacity> 

)

}else{
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
      height: 210,
      width: cardWidth,
      elevation: 15,
      borderRadius: 15,
      marginBottom:22,
      marginTop:10,
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

export default AcceptedOrders;