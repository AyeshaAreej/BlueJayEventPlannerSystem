import { View, Text, ImageBackground,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'


const CustomDrawer = (props) => {
  return (
      <View style={{flex:1}}>

                <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'black'}}>
                
                            <ImageBackground source={require('../assets/bg.jpg')} style={{padding:20}}>
                                <Image source={require('../assets/profile.jpg')} 
                                style={{height:80, width:80,borderRadius:40, marginBottom:10}}/>
                                <Text style={{color:'#fff',fontSize:18,fontFamily:'Roboto-Medium'}}>Ayesha Areej</Text>
                            </ImageBackground>

                            <View style={{flex:1, backgroundColor:'#fff', paddingTop: 10}}>
                                <DrawerItemList {...props} />
                            </View>

                </DrawerContentScrollView>

                <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc' }}>

                    <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                         <Icon name='share-alt' size={22} color='grey'/>
                          <Text>    Share with friends</Text> 
                    </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                         <Icon name='sign-out' size={22} color='grey'/>
                          <Text>    Sign out</Text> 
                    </View>
                    </TouchableOpacity>
                    
                </View>

      </View>   
   
  )
}

export default CustomDrawer