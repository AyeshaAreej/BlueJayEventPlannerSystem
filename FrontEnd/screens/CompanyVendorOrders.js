import React from 'react';
import {Dimensions,FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,   Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../components/colors';
import hotels from '../components/companies';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';


const {width}= Dimensions.get('screen');
const cardWidth=width/1.1;

const CompanyVendorOrders=({navigation})=>{
 
  
// Card

const Card=({hotel,index})=>{

  const navigation = useNavigation();
  
  function handleClick(){
    // console.log("Card clicked")
    navigation.navigate('OrderDetails')
  }
return(
   
    <TouchableOpacity style={{...style.card}} onPress={handleClick}>
      
          <View style={style.priceTag}>
                  <View style={{color:COLORS.white, }}>
                  <MaterialCommunityIcons name="delete-outline" size={30} color={ COLORS.white}/>
                  </View>
          </View>

          <View style={{flexDirection:'row'}}>
                  <Image source={hotel.image} style={style.cardImage} />
              
                  <Text style={{fontSize:16, marginLeft:20, marginTop:50,marginBottom:20}}>
                  Event Type: Wedding{'\n'}{'\n'}No of guests: 500{'\n' }{'\n' }Date: 4/july/2022  </Text>
          </View>

    
          <View style={{flexDirection:"row"}}>
                  
                    <Text style={{fontWeight:"bold",fontSize:17,paddingLeft:15,paddingTop:10}}>Name : {hotel.name}</Text>
                     
                    <Text style={{fontWeight:"bold",fontSize:20,paddingTop:20,paddingLeft:80}}>Pending</Text>
          
          </View>   

           <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                  
           <Text style={{fontWeight:"bold",fontSize:17,paddingLeft:15}}>Total : Rs.{hotel.price}</Text>
                   
          </View>      
        
    </TouchableOpacity>
    
    
    

)
};



    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
      
        <ScrollView showsVerticalScrollIndicator={false}>
    
         <View>
         <Animated.FlatList
          data={hotels}
          vertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent:'center',
            alignItems:'center',
            
          }}
          renderItem={({item}) => <Card hotel={item}  />}
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

export default CompanyVendorOrders;