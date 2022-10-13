import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '../../components/colors';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import image from '../../assets/hotel1.jpg';

 

function CompanyOrderDetails({route}) {


  const navigation = useNavigation();

  const order = route.params.order

  console.log(order)

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}   contentContainerStyle={{  backgroundColor: COLORS.white,}} >
      <StatusBar barStyle="light-content"  translucent backgroundColor={COLORS.primary}/>
             

      <View>

        <View style={{marginTop: 70,marginBottom:80, paddingHorizontal: 20}}>

        <Text style={{color:COLORS.primary, fontSize:32,fontWeight:'bold',paddingLeft:'28%',marginBottom: 30}}>Order Details</Text>
    

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 21, fontWeight: 'bold'}}>              Order Status:</Text>
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
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Phone no: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.u_phone_no} </Text>
                    </View>
                    </View>

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>City: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.city} </Text>
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

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Catering: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.catering} </Text>
                    </View>
                    </View>

                    {order.catering=='yes' &&
                      <View style={style.rightTag}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Menu: </Text>
                        <View style={style.WideTag}> 
                        <Text style={style.leftTag}>{order.menu} </Text>
                      </View>
                      </View>

                    }

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Decor: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.decor} </Text>
                    </View>
                    </View>

                    {order.catering=='yes' &&
                      <View style={style.rightTag}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Decor theme: </Text>
                        <View style={style.WideTag}> 
                        <Text style={style.leftTag}>{order.decor_theme} </Text>
                      </View>
                      </View>

                    }


                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Venue: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.venue} </Text>
                    </View>
                    </View>

                    {order.venue=='yes' &&
                      <View style={style.rightTag}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Venue Preference: </Text>
                        <View style={style.WideTag}> 
                        <Text style={style.leftTag}>{order.venue_preference} </Text>
                      </View>
                      </View>

                    }

                    {order.venue=='no' &&
                      <View style={style.rightTag}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Location: </Text>
                        <View style={style.WideTag}> 
                        <Text style={style.leftTag}>{order.location} </Text>
                      </View>
                      </View>

                    }

                    <View style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Photographer: </Text>
                      <View style={style.priceTag}> 
                      <Text style={style.leftTag}>{order.photographer} </Text>
                    </View>
                    </View>

                    {order.photographer=='yes' &&
                      <View style={style.rightTag}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Photo shoot: </Text>
                        <View style={style.WideTag}> 
                        <Text style={style.leftTag}>{order.photoShoot_details} </Text>
                      </View>
                      </View>

                    }


                     <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Start time: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.start_time}</Text>
                      </View>
                    </View>


                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Event duration: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.event_duration}</Text>
                      </View>
                    </View>


                      <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Budget: </Text>
                      <View style={style.priceTag}>
                        <Text style={style.leftTag}>{order.available_budget}</Text>
                      </View>
                    </View>

                   

                    <View  style={style.rightTag}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Special Instructions:</Text>
                      <View style={style.WideTag}>
                        <Text style={style.leftTag}>{order.special_instructions}</Text>
                      </View>
                    </View>



        </View>
      
      </View>

    </ScrollView>
  )
}



const style = StyleSheet.create({
 
  WideTag: {
    height: 60,
    alignItems: 'center',
    marginLeft: 8,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 8,
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
    width:"100%",
    borderRadius:40,
    overflow: 'hidden',
  },
  rightTag:{
    marginBottom: 15,
    flexDirection: 'row',
   justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:5,
  },
leftTag:{
  fontSize: 18,
  fontWeight: 'bold',
  color: COLORS.dark,
  marginLeft: 5,
  paddingBottom:5,
}, 
header: {
  marginTop: 60,
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: 20,
  justifyContent: 'space-between',
},
});

export default CompanyOrderDetails;
