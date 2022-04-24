import { View, Text, ImageBackground,Image} from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'


const CustomDrawer = (props) => {
  return (
      <view style={{flex:1}}>

        <DrawerContentScrollView 
        {...props} 
        contentContainerStyle={{backgroundColor: 'purple'}}>
           
            <ImageBackground source={require('../assets/bg.jpg')} style={{padding:20}}>
                <Image source={require('../assets/profile.jpg')} 
                style={{height:80, width:80,borderRadius:40, marginBottom:10}}/>
                <Text style={{color:'#fff',fontSize:18,fontFamily:'Roboto-Medium'}}>Ayesha Areej</Text>
            </ImageBackground>

            <view style={{flex:1,backgroundColor:'#fff',paddingTop: 10}}>
                <DrawerItemList {...props} />
            </view>
                

         </DrawerContentScrollView>

         <view>
             <Text>Our custom text</Text>
         </view>

      </view>   
  )
}

export default CustomDrawer