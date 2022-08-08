import React from 'react';
import {ImageBackground,ScrollView,StatusBar,TouchableOpacity,StyleSheet, Text, View,} from 'react-native';
import COLORS from '../../components/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import image from '../../assets/hotel1.jpg';


 

function CompanyReceivedOrderDetails({navigation}) {

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}   contentContainerStyle={{  backgroundColor: COLORS.white,}} >
      <StatusBar barStyle="light-content"  translucent backgroundColor={COLORS.primary}/>
       <ImageBackground style={style.headerImage} source={image}>
        {/* <View style={style.header}>
          <MaterialCommunityIcons name="arrow-left" size={30}color={COLORS.white} onPress={navigation.goBack} />
        </View> */}
      </ImageBackground>

      <View>
      {/* <View style={style.iconContainer}> */}
          {/* <MaterialCommunityIcons name="location-enter" color={COLORS.white} size={20} /> */}
      {/* </View> */}

        <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <View style={style.rightTag}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Location</Text>
          <View style={style.priceTag}> 
          <Text style={style.leftTag}>Karachi </Text>
         </View>
        </View>

        <View style={style.rightTag}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Guests</Text>
          <View style={style.priceTag}> 
          <Text style={style.leftTag}>200 </Text>
         </View>
        </View>
        
        

          <View style={style.rightTag}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Budget </Text>
          <View style={style.priceTag}> 
          <Text style={style.leftTag}> Rs.200000   </Text>
         </View>
        </View>

        <View style={style.rightTag}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Service</Text>
          <View style={style.priceTag}> 
          <Text style={style.leftTag}>Venue, Cattering, Decoration </Text>
         </View>
        </View>

          <View  style={style.rightTag}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>status </Text>
          <View style={style.priceTag}>
            <Text style={style.leftTag}>Pending </Text>
          </View>
         </View>

        </View>
       </View>
        {/*Save Button  */}
        
        <View style={style.buttonContainer}> 
            <TouchableOpacity  onPress={()=>{ navigation.navigate('HomeScreen') }} style={style.editButton}>
            <Text style={{  fontSize: 25,  fontWeight: 'bold',  color: COLORS.white,   }}> Higher Vendor </Text>
            </TouchableOpacity>
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
buttonContainer:{
  justifyContent:'center',
  alignItems:'center',

},
editButton:{
justifyContent:'center',
alignItems:'center',
marginTop:10,
width:280,
borderColor :COLORS.primary,
borderWidth:4,
elevation:15,
borderRadius:15,
backgroundColor:COLORS.primary,
},
});

export default CompanyReceivedOrderDetails;
