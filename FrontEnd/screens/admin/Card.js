import React from 'react';
import {Dimensions,FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,   Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import hotels from '../../components/companies';
import CompanyDetails from '../CompanyDetails';
import { withNavigation } from 'react-navigation';
import colors from '../../components/colors';
const {width}= Dimensions.get('screen');
const cardWidth=width/1.2;


const Card=({hotel,index,props})=>{
  return(
     
      <View style={{...style.card}}>
        <View style={{...style.cardOverLay, opacity:0}}/>
      
           <Image source={hotel.image} style={style.cardImage} />
           <View style={style.cardDetails}>
            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
             <View>
                 <Text style={{fontWeight:"bold",fontSize:17}}>{hotel.name}</Text>
                  <Text style={{color:colors.primary,fontSize:15}}>{hotel.location}</Text> 
              </View>
              <View style={{width:90,paddingTop:15}}>
              <Button
                onPress={()=>props.navigation.navigate('CompanyDetails')}
                title="View "
                color='#9370DB'
                 />
                 </View>
            </View>
            <View  style={{flexDirection:"row", marginTop:10, justifyContent:'space-between'}}>
              
                
  
            </View>
           </View>        
      </View>
      
      
      
  
  )
  };
    const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        paddingTop:24,
      },
      card: {
        height: 250,
        width: cardWidth,
        elevation: 15,
        marginRight: 60,
        borderRadius: 15,
        backgroundColor: colors.white,
      },
      cardImage: {
        height: 180,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      priceTag: {
        height: 60,
        width: 80,
        backgroundColor: colors.primary,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      cardDetails: {
        height: 100,
        borderRadius: 15,
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: 0,
        padding: 20,
        width: '100%',
      },
      cardOverLay: {
        height: 250,
        backgroundColor:colors.white,
        position: 'absolute',
        zIndex: 100,
        width: cardWidth,
        borderRadius: 15,
      },
    })
    export default Card;