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
import colors from '../components/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import image from '../assets/hotel1.jpg';
import { useNavigation } from '@react-navigation/native';


 function VendorDetails({route}) {


 
  const navigation = useNavigation();

  const vendor = route.params.vendor
  const myDate = route.params.myDate
  const o_id = route.params.o_id
  const filled = route.params.filled
  const emp = route.params.emp
  
  //console.log("vendor",vendor)
  //console.log("myDate",myDate)
  console.log("o_id",o_id)

  
  function handleClick(service){
    
    if(o_id === undefined){
      alert('Cant book vendor from here')
    }else if(o_id){
      
      
      switch(service){
        case 'Caterer':
          navigation.navigate('CatererBookingForm',{vendor,myDate,o_id})
          break;
        
        case 'Decoration':
          navigation.navigate('DecorationBookingForm',{vendor,myDate,o_id})
          break;

        case 'Venue':
          navigation.navigate('VenueBookingForm',{vendor,myDate,o_id})
          break;

        case 'Photography':
          navigation.navigate('PhotographyBookingForm',{vendor,myDate,o_id})
          break;
        

      }
    }
    
  }

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}  
     contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 20,
      }} >
      <StatusBar barStyle="light-content"  translucent backgroundColor="rgb(147, 112, 219)"
      />
       <ImageBackground style={style.headerImage} source={{uri: vendor.image}}>
        <View style={style.header}>
          <MaterialCommunityIcons
            name="keyboard-return"
            size={60}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
        
        </View>
      </ImageBackground>
      <View>
      <View style={style.iconContainer}>
          <FontAwesome name="map-marker" color={COLORS.white} size={20} />
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{vendor.vendor_name}</Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: COLORS.primary,
              marginTop: 5,
              fontWeight: 'bold',
            }}>
           {vendor.address}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
              {
                filled.map((i,key)=>{

                   return <View key={i}><MaterialCommunityIcons name="star" size={22} color={colors.orange}/></View>
                })
                
              }

              {
                emp.map((i,key)=>{
                  return <View key={i}><MaterialCommunityIcons name="star" size={22} color={colors.gray}/></View>
                })
                
              }
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 9}}>
                {vendor.rating}
              </Text>
            </View>
            
          </View>
          <View style={{marginTop: 20}}>
          <Text
            style={{ fontSize: 22,  fontWeight: 'bold',   color: COLORS.dark,
              marginTop: 5,  }}>Service We Provide 
          </Text>
            <Text style={{fontSize: 20,fontWeight: 'bold',lineHeight: 40, color: COLORS.primary}}>
             {vendor.service}
             </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>
            Price Range
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: COLORS.black,
                marginLeft: 5,
                fontWeight: 'bold',
              }}>
              $ {vendor.price_range} 
            </Text>
           
          </View>
        </View>
        <View style={style.btn}>
          <Text 
         onPress={()=>{handleClick(vendor.service)}}
          style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}



const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom:80,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },

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
    height: 350,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default VendorDetails
