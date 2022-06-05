import React from 'react'
import {useState}  from 'react'
import colors from '../components/colors';
import { ImageBackground, StatusBar, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Colors } from "../components/styles";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Formik } from 'formik';


function BookingForm() {

  const [cont, setCont] = useState('');
  const [show, setShow] = useState(false);
  return (
    <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
        <StatusBar barStyle="light-content"  translucent backgroundColor="rgb(147, 112, 219)"   />
       <View style={styles.topView}>
        <ImageBackground
         style={styles.logo}
         source={require('../assets/logo2.png')}
         resizeMode="cover" >
       </ImageBackground>
      </View>
     <Text style={{color:colors.primary, fontSize:25,fontWeight:'bold',paddingLeft:'30%'}}>Booking Form</Text>
    

    {/* Form */}
    <Formik
     initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
 >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={{ padding: 50, flex: 1, backgroundColor: '#fff' }}>
       <FloatingLabelInput
        label={'label'}
        isPassword
        togglePassword={show}
        value={cont}
        onChangeText={value => setCont(value)}
        customShowPasswordComponent={<Text>Show</Text>}
        customHidePasswordComponent={<Text>Hide</Text>}
      />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
     )}
  </Formik>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  topView:{
  
    paddingTop:"4%",
    paddingLeft:"25%",
    width:410,
    height:170,
    
   },

 logo: {
  width: 200,
  height: 200,
  // marginLeft:100,
 

},
   
   input:{
   borderBottomColor :'#9370DB',
   borderBottomWidth:1,
   padding:3,
   marginLeft:110,
   margin:6,
   width:200,

   },

   
   button:{
    backgroundColor: 'purple',
    width: '50%',
    height: 35,
    marginLeft:110,
    marginTop:30,
    

   },
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default BookingForm