import React from 'react'
import {useState}  from 'react'
import colors from '../components/colors';
import { ImageBackground,StatusBar, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Colors } from "../components/styles";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { CheckBox } from 'react-native-elements';


import { Formik,useFormik } from 'formik';


function BookingForm() {

   const [phonenum, setPhonenum] = useState(0);
  const [show, setShow] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

 
  
  
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
     <Text style={{color:colors.primary, fontSize:28,fontWeight:'bold',paddingLeft:'30%'}}>Booking Form</Text>
    

    {/* Form */}
    <Formik
     initialValues={{uname:'', email: '',city:'', phonenumber:'',eventtype:'',date:'',numofguests:'',venuetype:'',services:'',availablebudget:'',  }}
    onSubmit={values => console.log(values)}
 >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={{ alignItems:"center",justifyContent:'center', flex: 1 }}>
       <TextInput
             style={styles.input}
             name="uname"
             placeholder='Full Name'
             onChangeText={handleChange('uname')}
            // onBlur={handleBlur('email')}
            value={values.uname}
           
           />

      <TextInput
             style={styles.input}
             name="email"
             placeholder='Email'
             onChangeText={handleChange('email')}
            // onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
           />   
           

            <TextInput
             style={styles.input}
             name="city"
            placeholder="Enter City"
             onChangeText={handleChange('city')}
            // onBlur={handleBlur('password')}
            value={values.city}
           />
           <TextInput
             style={styles.input}
             name="phonenumber"
            placeholder="Phone Number"
             onChangeText={handleChange('phoneNumber')}
            // onBlur={handleBlur('password')}
            value={values.phoneNumber}
            keyboardType="numeric"
            />
            <TextInput
             style={styles.input}
             name="eventtype"
             placeholder='Event Type'
             onChangeText={handleChange('eventtype')}
            // onBlur={handleBlur('email')}
            value={values.eventtype}
           
           /> 
              <TextInput
             style={styles.input}
             name="date"
             placeholder='Date '
             onChangeText={handleChange('date')}
            // onBlur={handleBlur('email')}
            value={values.date}
           
           /> 
        
          <TextInput
             style={styles.input}
             name="numberofguests"
            placeholder="Phone Number"
             onChangeText={handleChange('numberofguests')}
            // onBlur={handleBlur('password')}
            value={values.numberofguests}
            keyboardType="numeric"
            />
            <TextInput
             style={styles.input}
             name="availablebudget"
            placeholder="Available Budget"
             onChangeText={handleChange('availablebudget')}
            // onBlur={handleBlur('password')}
            value={values.numberofguests}
            keyboardType="numeric"
            />
            
              {/* Venue */}
          
            <View style={{borderWidth:3, padding:12, marginTop:5,borderRadius:20,borderColor:colors.primary}}>
            <Text  style={{color:colors.grey,fontSize:20}}>Venue (Optional)</Text>
            <TextInput
             style={styles.input}
             name="venuetype"
             placeholder='Indoor or Outdoor '
             onChangeText={handleChange('venuetype')}
            // onBlur={handleBlur('email')}
            value={values.venuetype}
           
           />
           <TextInput
             style={styles.input}
             name="services"
             placeholder='Services '
             onChangeText={handleChange('services')}
            // onBlur={handleBlur('email')}
            value={values.services}
           
           />

        



            </View>
      <View style={styles.button}>
       <Button onPress={handleSubmit} title="Submit" color='#9370DB' />
       </View>
      </View>
     )}
  </Formik>
  {/* In the end the expected total amount will be calcultaed according to services selected and will be displayed to user and data will be send to company via message or email */}
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


},
   
   input:{
   borderBottomColor :colors.primary,
   borderBottomWidth:4,
   paddingTop:12,
   width:250,
   fontSize:18,

   },

   
   button:{
    backgroundColor:colors.primary,
    width: '50%',
     marginTop:15,
     
    

   },
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },

});

export default BookingForm