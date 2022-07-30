import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '../components/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import image from '../assets/hotel1.jpg';
import hotels from '../components/companies';

 

function VendorHome({navigation}) {


  

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}   contentContainerStyle={{  backgroundColor: COLORS.white,}} >
      <StatusBar barStyle="light-content"  translucent backgroundColor="rgb(147, 112, 219)"/>
       <ImageBackground style={style.headerImage} source={image}>
        <View style={style.header}>
          <MaterialCommunityIcons name="arrow-left" size={30}color={COLORS.white} onPress={navigation.goBack} />
        </View>
      </ImageBackground>

      <View>
      {/* <View style={style.iconContainer}> */}
          {/* <MaterialCommunityIcons name="location-enter" color={COLORS.white} size={20} /> */}
      {/* </View> */}

        <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <View style={style.rightTag}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Silver Photograpy</Text>
          <View style={style.priceTag}> 
          <Text style={style.leftTag}>Green street,Lahore </Text>
         </View>
        </View>

        <View style={style.rightTag}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rating</Text>
          <View style={style.priceTag}> 
          <Text style={style.leftTag}>4.0 </Text>
         </View>
        </View>
        
        

          <View style={style.rightTag}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Price Range </Text>
          <View style={style.priceTag}> 
          <Text style={style.leftTag}> Above $500000   </Text>
         </View>
        </View>

        <View style={style.rightTag}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Service</Text>
          <View style={style.priceTag}> 
          <Text style={style.leftTag}>Photography </Text>
         </View>
        </View>

          <View  style={style.rightTag}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Available Time </Text>
          <View style={style.priceTag}>
            <Text style={style.leftTag}>24 Hours </Text>
            
          </View>
        </View>

        </View>
        
       
      </View>
    </ScrollView>
  )
}



const style = StyleSheet.create({
 

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
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  rightTag:{
    marginTop: 20,
    flexDirection: 'row',
   justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:5,
  },
leftTag:{
  fontSize: 16,
  fontWeight: 'bold',
  color: COLORS.dark,
  marginLeft: 5,
  paddingBottom:5,
}, 
});

export default VendorHome
