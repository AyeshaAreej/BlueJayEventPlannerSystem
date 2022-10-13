import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import {useState,useEffect,useContext} from 'react';
import COLORS from '../components/colors';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserContext,OrderContext } from '../Contexts';

import * as SecureStore from 'expo-secure-store';
 

function VendorOrderDetails({route}) {

  
  
  const [orderC,setOrderC] = useContext(OrderContext)
  const [user,setUser] = useContext(UserContext)
  const [company,setCompany] = useState([])

  const navigation = useNavigation();

  const order = route.params.order

  console.log(order)


  useEffect(()=>{

    SecureStore.getItemAsync('token').then(token=>{

      console.log('get user for noti_token',token)

      const value = {c_id: order.company_id}

      fetch(`https://bluejay-mobile-app.herokuapp.com/getAnyUser`,{
                    method: "post",
                    body: JSON.stringify(value),
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        token
                    }
                  
              }).then(res=>res.json()).then(result=>{
                console.log(result)

                if( result.status == 'ok'){
                        setCompany(result.data)
                        
                }

              }).catch(err=>console.log('catch',err.message))

    })    

  },[]);





  const acceptOrder = (o_id)=>{

    SecureStore.getItemAsync('token').then(token=>{

      console.log('Accept Order',token,o_id)

      const value = {o_id: o_id}

      fetch(`https://bluejay-mobile-app.herokuapp.com/vendor/approveOrder`,{
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
                        alert('Order moved to My Orders')
                        navigation.goBack()
                        sendRequestNotificationAccept()

                }else{
                  console.log(result.status)
                }

              }).catch(err=>console.log('catch',err.message))

    })    

   }


   const rejectOrder = (o_id)=>{

    SecureStore.getItemAsync('token').then(token=>{

      console.log('Reject Order',token,o_id)

      const value = {o_id: o_id}

      fetch(`https://bluejay-mobile-app.herokuapp.com/vendor/rejectOrder`,{
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
                  alert('Order Rejected')
                  navigation.goBack()
                  sendRequestNotificationReject()
                }else{
                  console.log(result.status)
                }

              }).catch(err=>console.log('catch',err.message))

    })    

   }


   const sendRequestNotificationAccept = () => {
    

    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: company.noti_token,
        sound: 'default',
        title: "Order Accepted",
        body:  `Your order for event ${order.event_type} has been accepted by vendor ${order.vendor_name}`,
      })
    }).then(res=>res.json()).then(result=>{
      console.log('noti_result',result)
      if(result.data.status=='ok'){
        SendToDbAccept()
        }
    }).catch(err=>console.log('catch',err.message))
    

  }

  const sendRequestNotificationReject = () =>{

    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: company.noti_token,
        sound: 'default',
        title: "Order Rejected",
        body:  `Your order for event ${order.event_type} has been rejected by vendor ${order.vendor_name}`,
      })
    }).then(res=>res.json()).then(result=>{
      console.log('noti_result',result)
      if(result.data.status=='ok'){
        SendToDbReject()
        }
    }).catch(err=>console.log('catch',err.message))
    

};



const SendToDbAccept = ()=>{

  SecureStore.getItemAsync('token').then(token=>{

    console.log('noti db store',token)

    const noti_obj= {
     
      c_id: order.company_id,
      title: "Order Accepted",
      body:  `Your order for event ${order.event_type} has been accepted by vendor ${order.vendor_name}`,
      compDate: new Date()
    }

    
    fetch(`https://bluejay-mobile-app.herokuapp.com/company/acceptOrderNoti`,{
                  method: "post",
                  body: JSON.stringify(noti_obj),
                  headers: {
                      Accept: "application/json, text/plain, */*",
                      "Content-Type": "application/json",
                      token
                  }
                
            }).then(res=>res.json()).then(result=>{
              console.log(result)
              if(result.status=='ok'){
                setOrderC(!orderC)
                console.log(orderC)
              console.log('stored in db')
              }

            }).catch(err=>console.log('catch',err.message))
  
})  
}


const SendToDbReject = ()=>{

  SecureStore.getItemAsync('token').then(token=>{

    console.log('noti db store',token)

    const noti_obj= {
     
      c_id: order.company_id,
      title: "Order Rejected",
      body:  `Your order for event ${order.event_type} has been rejected by vendor ${order.vendor_name}`,
      compDate: new Date()
    }

    
    fetch(`https://bluejay-mobile-app.herokuapp.com/company/rejectOrderNoti`,{
                  method: "post",
                  body: JSON.stringify(noti_obj),
                  headers: {
                      Accept: "application/json, text/plain, */*",
                      "Content-Type": "application/json",
                      token
                  }
                
            }).then(res=>res.json()).then(result=>{
              console.log(result)
              if(result.status=='ok'){
                setOrderC(!orderC)
                console.log(orderC)
              console.log('stored in db')
              }

            }).catch(err=>console.log('catch',err.message))
  
})  
}






if( user.service === 'Caterer'){

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}   contentContainerStyle={{  backgroundColor: COLORS.white,}} >
      <StatusBar barStyle="light-content"  translucent backgroundColor={COLORS.primary}/>
             

      <View>

        <View style={{marginTop: 50,marginBottom:50, paddingHorizontal: 20}}>

        <Text style={{color:COLORS.primary, fontSize:32,fontWeight:'bold',paddingLeft:'28%',marginBottom: 20}}>Order Details</Text>
    

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 21, fontWeight: 'bold'}}>                Order Status:</Text>
                      <View style={style.priceTag}> 
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{order.status}</Text>
                      </View>
                    </View>


                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Company: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.company_name} </Text>
                    </View>
                    </View>

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Phone no: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.c_phone_no} </Text>
                    </View>
                    </View>
                    

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Event: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.event_type}</Text>
                    </View>
                    </View>
                    

                      <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Date: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}> {order.date}</Text>
                    </View>
                    </View>

                    <View style={style.rightTag}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Menu: </Text>
                        <View style={{height: 60, alignItems: 'center', marginLeft: 20,  paddingLeft: 20, flex: 1,backgroundColor: COLORS.secondary, borderTopLeftRadius: 20, borderBottomLeftRadius: 20,flexDirection: 'row'}}> 
                        <Text style={style.leftTag}>{order.menu}</Text>
                      </View>
                      </View>



                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Location: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.location}</Text>
                    </View>
                    </View>


                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Time: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.time}</Text>
                    </View>
                    </View>
                    

                   
                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>No# of guests: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.no_of_guests} </Text>
                    </View>
                    </View>

                      <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Budget: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.available_budget}</Text>
                      </View>
                    </View>


                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Special note: </Text>
                      <View style={{height: 60, alignItems: 'center', marginLeft: 20,  paddingLeft: 20, flex: 1,backgroundColor: COLORS.secondary, borderTopLeftRadius: 20, borderBottomLeftRadius: 20,flexDirection: 'row'}}>
                        <Text style={style.leftTag}>{order.special_instructions}</Text>
                      </View>
                    </View>

                   { order.status == 'Pending' && <View style={{flexDirection:'row'}}>
                      
                      <View  style={{paddingLeft:115}}>
                      <Button
                      onPress={()=>{acceptOrder(order._id)}}
                      title="Accept"
                      color={COLORS.primary}
                      /> 
                      </View>

                      <View style={{paddingLeft:15, borderRadius:12}}>
                      <Button  
                      onPress={()=>{rejectOrder(order._id)}}
                      title="Reject"
                      color={COLORS.primary}/>
                    </View>
              
                      
                    </View>}




        </View>
      
      </View>

    </ScrollView>
  )

}else if( user.service === 'Decoration'){

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}   contentContainerStyle={{  backgroundColor: COLORS.white,}} >
      <StatusBar barStyle="light-content"  translucent backgroundColor={COLORS.primary}/>
             

      <View>

      <View style={{marginTop: 50,marginBottom:50, paddingHorizontal: 20}}>

<Text style={{color:COLORS.primary, fontSize:32,fontWeight:'bold',paddingLeft:'28%',marginBottom: 20}}>Order Details</Text>


                    <View style={style.rightTag}>
                      <Text style={{fontSize: 21, fontWeight: 'bold'}}>                Order Status:</Text>
                      <View style={style.priceTag}> 
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{order.status}</Text>
                      </View>
                    </View>


                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Company: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.company_name} </Text>
                    </View>
                    </View>

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Phone no: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.c_phone_no} </Text>
                    </View>
                    </View>
                    

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Event: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.event_type}</Text>
                    </View>
                    </View>
                    

                      <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Date: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}> {order.date}</Text>
                    </View>
                    </View>

                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Address: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.location}</Text>
                      </View>
                    </View>

                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Location Detail: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.location_details}</Text>
                      </View>
                    </View>

                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Decor theme: </Text>
                      <View style={{height: 60, alignItems: 'center', marginLeft: 20,  paddingLeft: 20, flex: 1,backgroundColor: COLORS.secondary, borderTopLeftRadius: 20, borderBottomLeftRadius: 20,flexDirection: 'row'}}>
                        <Text style={style.leftTag}>{order.decor_theme_detail}</Text>
                      </View>
                    </View>

                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Time: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.time}</Text>
                      </View>
                    </View>
                    

                      <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Budget: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.available_budget}</Text>
                      </View>
                    </View>


                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Special note: </Text>
                      <View style={{height: 60, alignItems: 'center', marginLeft: 20,  paddingLeft: 20, flex: 1,backgroundColor: COLORS.secondary, borderTopLeftRadius: 20, borderBottomLeftRadius: 20,flexDirection: 'row'}}>
                        <Text style={style.leftTag}>{order.special_instructions}</Text>
                      </View>
                    </View>


                   {order.status == 'Pending' && <View style={{flexDirection:'row'}}>
                      
                      <View  style={{paddingLeft:115}}>
                      <Button
                      onPress={()=>{acceptOrder(order._id)}}
                      title="Accept"
                      color={COLORS.primary}
                      /> 
                      </View>

                      <View style={{paddingLeft:15, borderRadius:12}}>
                      <Button  
                      onPress={()=>{rejectOrder(order._id)}}
                      title="Reject"
                      color={COLORS.primary}/>
                    </View>
                       
                </View>
                  }



        </View>
      
      </View>

    </ScrollView>
  )

}else if( user.service === 'Venue'){

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}   contentContainerStyle={{  backgroundColor: COLORS.white,}} >
      <StatusBar barStyle="light-content"  translucent backgroundColor={COLORS.primary}/>
             

      <View>

      <View style={{marginTop: 40,marginBottom:50, paddingHorizontal: 20}}>

<Text style={{color:COLORS.primary, fontSize:32,fontWeight:'bold',paddingLeft:'28%',marginBottom: 10}}>Order Details</Text>


                    <View style={style.rightTag}>
                      <Text style={{fontSize: 21, fontWeight: 'bold'}}>                Order Status:</Text>
                      <View style={style.priceTag}> 
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{order.status}</Text>
                      </View>
                    </View>


                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Company: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.company_name} </Text>
                    </View>
                    </View>

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Phone no: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.c_phone_no} </Text>
                    </View>
                    </View>
                    

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Event: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.event_type}</Text>
                    </View>
                    </View>
                    

                      <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Date: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}> {order.date}</Text>
                    </View>
                    </View>

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>No# of guests: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.no_of_guests} </Text>
                    </View>
                    </View>

                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Start time: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.start_time}</Text>
                      </View>
                    </View>

                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>End time: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.end_time}</Text>
                      </View>
                    </View>

                      <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Budget: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.available_budget}</Text>
                      </View>
                    </View>


                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Need venue catering: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.venue_catering}</Text>
                      </View>
                    </View>

{order.venue_catering == 'yes' &&
                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Menu: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.menu}</Text>
                      </View>
                    </View>

}

                      <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Need venue decor : </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.venue_decor}</Text>
                      </View>
                    </View>

{order.venue_decor == 'yes' &&
                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Decor details: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.decor_theme_detail}</Text>
                      </View>
                    </View>
}
                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Special note: </Text>
                      <View style={{height: 60, alignItems: 'center', marginLeft: 20,  paddingLeft: 20, flex: 1,backgroundColor: COLORS.secondary, borderTopLeftRadius: 20, borderBottomLeftRadius: 20,flexDirection: 'row'}}>
                        <Text style={style.leftTag}>{order.special_instructions}</Text>
                      </View>
                    </View>

                    { order.status == 'Pending' && <View style={{flexDirection:'row'}}>
                      
                      <View  style={{paddingLeft:115}}>
                      <Button
                      onPress={()=>{acceptOrder(order._id)}}
                      title="Accept"
                      color={COLORS.primary}
                      /> 
                      </View>

                      <View style={{paddingLeft:15, borderRadius:12}}>
                      <Button  
                      onPress={()=>{rejectOrder(order._id)}}
                      title="Reject"
                      color={COLORS.primary}/>
                    </View>
              
                      
                    </View>}



        </View>
      
      </View>

    </ScrollView>
  )

}else if( user.service === 'Photography'){

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}   contentContainerStyle={{  backgroundColor: COLORS.white,}} >
      <StatusBar barStyle="light-content"  translucent backgroundColor={COLORS.primary}/>
             

      <View>

      <View style={{marginTop: 60,marginBottom:50, paddingHorizontal: 20}}>

<Text style={{color:COLORS.primary, fontSize:32,fontWeight:'bold',paddingLeft:'28%',marginBottom: 20}}>Order Details</Text>


                    <View style={style.rightTag}>
                      <Text style={{fontSize: 21, fontWeight: 'bold'}}>                Order Status:</Text>
                      <View style={style.priceTag}> 
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{order.status}</Text>
                      </View>
                    </View>


                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Company: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.company_name} </Text>
                    </View>
                    </View>

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Phone no: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.c_phone_no} </Text>
                    </View>
                    </View>
                    

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Event: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.event_type}</Text>
                    </View>
                    </View>
                    

                      <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Date: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}> {order.date}</Text>
                    </View>
                    </View>

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Location: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.location} </Text>
                    </View>
                    </View>

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Time: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.time} </Text>
                    </View>
                    </View>

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Session duration: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.session_time} </Text>
                    </View>
                    </View>

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Shoot type:</Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.shoot_type} </Text>
                    </View>
                    </View> 

                      <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Budget: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.available_budget}</Text>
                      </View>
                    </View>

                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Special note: </Text>
                      <View style={{height: 60, alignItems: 'center', marginLeft: 20,  paddingLeft: 20, flex: 1,backgroundColor: COLORS.secondary, borderTopLeftRadius: 20, borderBottomLeftRadius: 20,flexDirection: 'row'}}>
                        <Text style={style.leftTag}>{order.special_instructions}</Text>
                      </View>
                    </View>



                    { order.status == 'Pending' && <View style={{flexDirection:'row'}}>
                      
                      <View  style={{paddingLeft:115}}>
                      <Button
                      onPress={()=>{acceptOrder(order._id)}}
                      title="Accept"
                      color={COLORS.primary}
                      /> 
                      </View>

                      <View style={{paddingLeft:15, borderRadius:12}}>
                      <Button  
                      onPress={()=>{rejectOrder(order._id)}}
                      title="Reject"
                      color={COLORS.primary}/>
                    </View>
              
                      
                    </View>}



        </View>
      
      </View>

    </ScrollView>
  )

}




}



const style = StyleSheet.create({
 

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 20,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 280,
    width:"100%",
    borderRadius:40,
    overflow: 'hidden',
  },
  rightTag:{
    marginBottom: 15,
    flexDirection: 'row',
   justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:4,
  },
leftTag:{
  fontSize: 18,
  fontWeight: 'bold',
  color: COLORS.dark,
  marginLeft: 5,
  paddingBottom:5,
}, 
header: {
  marginTop: 60,
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: 20,
  justifyContent: 'space-between',
},
});

export default VendorOrderDetails;
