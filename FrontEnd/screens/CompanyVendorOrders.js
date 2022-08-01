import React from 'react';
import {Dimensions,FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,   Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../components/colors';
import hotels from '../components/companies';


const {width}= Dimensions.get('screen');
const cardWidth=width/1.1;

const CompanyVendorOrders=({navigation})=>{
 
  
// Card

const Card=({hotel,index,navigation})=>{
return(
   
      <View style={{...style.card}}>
    <View style={style.priceTag}>
    <View style={{color:COLORS.white, }}>
     <MaterialCommunityIcons name="delete-outline" size={30} color={ COLORS.white}/>
    </View>
 
     </View>
     <View style={{flexDirection:'row'}}>
         <Image source={hotel.image} style={style.cardImage} />
     <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:16, marginLeft:20, marginTop:50,marginBottom:20}}>
         Event Type: Wedding{'\n'}{'\n'}Status: Pending{'\n' }{'\n' }Date: 4/july/2022  </Text>
      

         </View>
         </View>
        
         <View style={{flexDirection:'row'}}>
         <Text style={{fontWeight:"bold",fontSize:15,paddingLeft:10,paddingTop:10}}>Name : {hotel.name}</Text>
         <Text style={{fontWeight:"bold",fontSize:17,paddingLeft:110}}>Pending</Text>
         </View>
        
         
           <View style={{flexDirection:'row'}}>
               
               <Text style={{fontWeight:"bold",fontSize:15,paddingLeft:10,paddingTop:5}}>Total : Rs.{hotel.price}</Text>

                <View  style={{flexDirection:"row", justifyContent:'center',paddingLeft:100}}>
                <Button
                //  onPress={()=>navigation.navigate('CompanyDetails')}
                title="Accept"
                color={COLORS.primary}
                /> 
                </View>

               <View style={{paddingLeft:10, borderRadius:12}}>
                <Button  title="Reject"
                color={COLORS.primary}/>
              </View>
        
               
          </View>
         
           
        
    </View>
    
    
    

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
      height: 180,
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