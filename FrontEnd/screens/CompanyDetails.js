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
import Icon from 'react-native-vector-icons/MaterialIcons';
import image from '../assets/hotel1.jpg';
import { useNavigation } from '@react-navigation/native';
 function CompanyDetails() {


  const navigation = useNavigation();

  function handleClick(){
    console.log("Card clicked")
    navigation.navigate('BookingForm')
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
       <ImageBackground style={style.headerImage} source={image}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={30}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
        
        </View>
      </ImageBackground>
      <View>
      <View style={style.iconContainer}>
          <Icon name="place" color={COLORS.white} size={20} />
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Silver Company</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: COLORS.grey,
              marginTop: 5,
            }}>
           Green street, Islamabad
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.grey} />
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
                4.0
              </Text>
            </View>
            
          </View>
          <View style={{marginTop: 20}}>
          <Text
            style={{ fontSize: 18,  fontWeight: '500',   color: COLORS.dark,
              marginTop: 5,  }}> Services We Provide 
          </Text>
            <Text style={{lineHeight: 20, color: COLORS.grey}}>
             Caterers, Venue with Decorations(Outdoor & Indoor), Music, Photography, Videographers
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
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Price Range
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.grey,
                marginLeft: 5,
              }}>
              Above $500000 
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: COLORS.grey,
                marginLeft: 5,
              }}>
              
            </Text>
          </View>
        </View>
        <View style={style.btn}>
          <Text 
         onPress={handleClick}
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

export default CompanyDetails
