import { View, Text, ImageBackground,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import WelcomeScreen from '../screens/WelcomeScreen'
import * as SecureStore from 'expo-secure-store';


const CustomDrawer = (props) => {
  return (
      <View style={{flex:1}}>

                <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: 'purple'}}>
                
                            <ImageBackground source={require('../assets/bg.jpg')} style={{padding:20}}>
                                <Image source={require('../assets/profile.jpg')} 
                                style={{height:80, width:80,borderRadius:40, marginBottom:10}}/>
                                <Text style={{color:'#fff',fontSize:18,fontFamily:''}}>Ayesha Areej</Text>
                            </ImageBackground>

                            <View style={{flex:1, backgroundColor:'#fff', paddingTop: 10}}>
                                <DrawerItemList {...props} />
                            </View>

                </DrawerContentScrollView>

                <View style={{paddingTop:8,padding :20, height:110, borderTopWidth:1, borderTopColor:'#ccc' }}>

                    {/* <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                         <FontAwesome name='share-alt' size={22} color='grey'/>
                          <Text>    Share with friends</Text> 
                    </View>
                    </TouchableOpacity> */}
                    
                    <TouchableOpacity onPress={()=>{
                                                    SecureStore.setItemAsync('token',' ')
                                                    props.navigation.navigate(WelcomeScreen)
                                              }} 
                    style={{paddingVertical:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                         <FontAwesome name='sign-out' size={22} color='grey'/>
                          <Text>    Sign out</Text> 
                    </View>
                    </TouchableOpacity>
                    
                </View>

      </View>   
   
  )
}

export default CustomDrawer