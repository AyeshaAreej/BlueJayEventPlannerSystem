import React from 'react';
import {ImageBackground,ScrollView,StatusBar,TouchableOpacity,StyleSheet, Text, View,} from 'react-native';
import COLORS from '../../components/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import image from '../../assets/hotel1.jpg';
import { useNavigation } from '@react-navigation/native';

 

function HireVendors({route}) {


  const navigation = useNavigation();

  const order = route.params.order

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}   contentContainerStyle={{  backgroundColor: COLORS.white,}} >
      <StatusBar barStyle="light-content"  translucent backgroundColor={COLORS.primary}/>
       
  <View>

    <View style={{marginTop: 70, paddingHorizontal: 20}}>

        <Text style={{color:COLORS.primary, fontSize:32,fontWeight:'bold',paddingLeft:'26%',marginBottom: 10}}>Order Details</Text>


            <View style={style.rightTag}>
              <Text style={{fontSize: 21, fontWeight: 'bold'}}>                    Order Status:</Text>
              <View style={style.priceTag}> 
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{order.status}</Text>
              </View>
            </View>


            <View style={style.rightTag}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Customer: </Text>
              <View style={style.priceTag}> 
              <Text style={style.leftTag}>{order.customer_name} </Text>
            </View>
            </View>

            <View style={style.rightTag}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Email: </Text>
              <View style={style.priceTag}> 
              <Text style={style.leftTag}>{order.email} </Text>
            </View>
            </View>
            

            <View style={style.rightTag}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Event: </Text>
              <View style={style.priceTag}> 
              <Text style={style.leftTag}>{order.event_type}</Text>
            </View>
            </View>
            

              <View style={style.rightTag}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Date: </Text>
              <View style={style.priceTag}> 
              <Text style={style.leftTag}> {order.date}</Text>
            </View>
            </View>

            <View style={style.rightTag}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>No# of guests: </Text>
              <View style={style.priceTag}> 
              <Text style={style.leftTag}>{order.no_of_guests} </Text>
            </View>
            </View>

              <View  style={style.rightTag}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Budget: </Text>
              <View style={style.priceTag}>
                <Text style={style.leftTag}>{order.available_budget}</Text>
              </View>
            </View>

            <View  style={style.rightTag}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Venue: </Text>
              <View style={style.priceTag}>
                <Text style={style.leftTag}>{order.venue}</Text>
              </View>
            </View>

            <View  style={style.rightTag}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Required Services: </Text>
              <View style={style.priceTag}>
                <Text style={style.leftTag}>{order.required_services}</Text>
              </View>
            </View>



    </View>

</View>


        {/*Save Button  */}
        <View style={style.buttonContainer}> 
            <TouchableOpacity  onPress={()=>{ navigation.navigate('CompanyHomeScreen',{date: order.date, o_id : order._id}) }} style={style.editButton}>
            <Text style={{  fontSize: 25,  fontWeight: 'bold',  color: COLORS.white,   }}> Hire Vendor </Text>
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
  paddingTop:20,
  paddingBottom:40

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

export default HireVendors;
