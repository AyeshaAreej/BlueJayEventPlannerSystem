import React from 'react'
import {useState}  from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../components/colors';
import { ImageBackground,StatusBar, Button, TextInput,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import * as yup from 'yup';
import { Formik} from 'formik';
import COLORS from '../../components/colors';


function DecorationBookingForm({ route, navigation}) {

  const vendor = route.params.vendor
  const myDate = route.params.myDate
  const o_id = route.params.o_id
  const v_id = vendor._id
  


  return (
    <ScrollView style={{flex:1,backgroundColor:colors.white}}>
        <StatusBar barStyle="light-content"  translucent backgroundColor="rgb(147, 112, 219)"   />
       {/* <View style={styles.topView}>
        <ImageBackground
         style={styles.logo}
         source={require('../../assets/logo2.png')}
         resizeMode="cover" >
       </ImageBackground>
      </View> */}
     <Text style={{color:colors.primary, fontSize:28,fontWeight:'bold',paddingLeft:'14%',paddingTop:'16%'}}>Decorator Booking Form</Text>
    

    {/* Form */}
    <Formik
     initialValues={{no_of_guests:'', location_address:'', location_details:'',theme:'',time: '',availablebudget:'', special_instructions:'',}}
     onSubmit={(values) => {
                  console.log(values)






                }} 
     
     validationSchema={yup.object().shape({
            no_of_guests: yup
            .number()
            .required(' No of guests is required.'),  
            time: yup
            .string()
            .required(' Time is required.'), 
            location_address: yup
             .string()
            .required(' Location address is required.'),    
            location_details: yup
            .string()
            .required(' Location details is required.'), 
            theme: yup
            .string()
            .required(' Theme is required.'), 
            availablebudget: yup
            .number()
            .required(' Budget is required.'),
           special_instructions: yup
             .string()
            .required(' Special instructions are required.'),    
          })}
 >
    {({ handleChange, handleSubmit, values,errors,touched, setFieldTouched }) => (
       <View style={{ alignItems:"center",justifyContent:'center', flex: 1 }}>
        <View style={{borderWidth:3, padding:12, marginTop:20,marginBottom:10, borderRadius:20,borderColor:colors.primary}}>
         
       <TextInput
             style={styles.input}
             name="no_of_guests"
             placeholder='No of guests'
             onChangeText={handleChange('no_of_guests')}
             onBlur={()=>setFieldTouched('no_of_guests')}
             multiline={true}
            value={values.no_of_guests}
           
           />
           {touched.no_of_guests && errors.no_of_guests &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.no_of_guests}</Text>
            }


      
            

        <TextInput
             style={styles.input}
             name="location_address"
             placeholder="Event location address"
             onChangeText={handleChange('location_address')}
             onBlur={()=>setFieldTouched('location_address')}
             multiline={true}
             value={values.location_address}
           />
           {touched.location_address && errors.location_address &&
              <Text style={{ justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red' }}>{errors.location_address}</Text>
            }
            
            <TextInput
             style={styles.input}
             name="location_details"
             placeholder='Enter location details'
             onChangeText={handleChange('location_details')}
             onBlur={()=>setFieldTouched('location_details')}
             multiline={true}
            textAlignVertical='top'
            value={values.location_details}
            
           />
            {touched.location_details && errors.location_details &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.location_details}</Text>
            }




        <TextInput
             style={styles.input}
             name="theme"
             placeholder='Enter Decoration theme'
             onChangeText={handleChange('theme')}
             onBlur={()=>setFieldTouched('theme')}
             multiline={true}
            value={values.theme}
           
           />
           {touched.theme && errors.theme &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.theme}</Text>
            }

            <TextInput
             style={styles.input}
             name="time"
             placeholder='Enter event Time'
             onChangeText={handleChange('time')}
             onBlur={()=>setFieldTouched('time')}
             multiline={true}
            value={values.time}
            
            
           />
            {touched.time && errors.time &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.time}</Text>
            }  
           
           <TextInput
             style={styles.input}
             name="availablebudget"
            placeholder="Available Budget"
             onChangeText={handleChange('availablebudget')}
             onBlur={()=>setFieldTouched('availablebudget')}
            value={values.availablebudget}
            multiline={true}
            keyboardType="numeric"
            />
            {touched.availablebudget && errors.availablebudget &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.availablebudget}</Text>
            }
            
          
           
            
          
            <TextInput
             style={styles.input}
             name="special_instructions"
             placeholder="Enter special instructions"
            multiline={true}
            numberOfLines={3}
            textAlignVertical='top'
             onChangeText={handleChange('special_instructions')}
             onBlur={()=>setFieldTouched('special_instructions')}
            value={values.special_instructions}
            
            />
            {touched.special_instructions && errors.special_instructions &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.special_instructions}</Text>
            }
       
       </View>
   
                  
      <View style={styles.button}>
       <Button onPress={handleSubmit} title="Submit" color={COLORS.primary} />
       </View>
      </View>
     )}
  </Formik>


 
    </ScrollView>
  )
}

const styles = StyleSheet.create({

 
   
   input:{
    borderColor :COLORS.white,
    margin:7,
    padding:14,
    width:300,
    fontSize:20,
    borderWidth:2,
    elevation:20,
    borderRadius:15,
    backgroundColor:'white'

   },

   
   button:{
    backgroundColor:colors.primary,
    width: '40%',
     marginTop:20,

   },
   container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },


  btnContainer: {
    paddingTop: 12,
   
  },


});

export default DecorationBookingForm