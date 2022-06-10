import React from 'react'
import {ImageBackground, Dimensions, FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,   Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../components/colors';
import Card from './Card';
import hotels from './companies';
import vendors from './vendors';
import users from './users';
const {width}= Dimensions.get('screen');
const cardWidth=width/1.8;

//Admin Home
function HomeScreen({navigation}) {


  return (
<ScrollView style={{flex:1, backgroundColor:colors.white}}>
<StatusBar barStyle="light-content"  translucent backgroundColor={colors.primary} />
 <View style={style.topView}>
<View style={style.header}>

            <Text style={{fontSize:25, fontWeight:'bold', color:colors.white,paddingRight:70}}>
              Welcome to </Text> 
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:30, fontWeight:'bold',color:colors.white}} >Admin Panel </Text>
                   <Icon name="account-outline"  size={60} color={colors.white}/>
               </View>
          
        </View>

 </View> 
{/* card  for company*/}
<View style={{borderTopStartRadius:85}}>
  <View style={style.cardHeader}>
  <Animated.FlatList
          data={hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 10,
            marginTop: 5,
            paddingBottom: 10,
            
          }}
          renderItem={({item}) => <Card hotel={item}/>}
        />
{/* Card for vendor */}
      <Animated.FlatList
          data={vendors}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 10,
            marginTop: 5,
            paddingBottom: 10,
            
          }}
          renderItem={({item}) => <Card hotel={item} />}
        />

{/* card  for Vendor */}
<Animated.FlatList
          data={users}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 10,
            marginTop: 5,
            paddingBottom: 10,
            
          }}
          renderItem={({item}) => <Card hotel={item} />}
        />

  </View>
  </View>

</ScrollView>
  )
}


const style = StyleSheet.create({

  header: {
    marginTop: '10%',
    flexDirection: 'column',
    // justifyContent: 'center',
    // paddingHorizontal: 4,
    // paddingTop:14,
  },

  topView:{
    backgroundColor :colors.primary,
    width:'100%',
    height:'16%',
    justifyContent:'space-evenly',
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
  
    
   },


  cardHeader: {
    marginTop: '5%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    paddingLeft:20,
 

  },
  
  
bottomView:{

},


});


export default HomeScreen
