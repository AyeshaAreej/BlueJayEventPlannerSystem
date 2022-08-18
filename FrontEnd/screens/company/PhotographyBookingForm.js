import React from 'react'
import {useState}  from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../components/colors';
import { ImageBackground,StatusBar, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import * as yup from 'yup';
import { Formik} from 'formik';
import COLORS from '../../components/colors';


function CatererBookingForm({ route, navigation}) {

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
     <Text style={{color:colors.primary, fontSize:28,fontWeight:'bold',paddingLeft:'10%',paddingTop:'20%'}}>Photographer Booking Form</Text>
    

    {/* Form */}
    <Formik
     initialValues={{session_time:'', location:'',time: '',availablebudget:'', type_of_shoot:'', special_instructions:'',}}
     onSubmit={(values) => {
                  console.log(values)






                }} 
     
     validationSchema={yup.object().shape({
            session_time: yup
            .number()
            .required(' Session time is required.'),  
            time: yup
            .string()
            .required(' Time is required.'), 
            location: yup
             .string()
            .required(' Location is required.'),    
            type_of_shoot: yup
            .string()
            .required(' Type of shoot is required.'), 
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
             name="session_time"
             placeholder='Enter Session time (in hours)'
             onChangeText={handleChange('session_time')}
             onBlur={()=>setFieldTouched('session_time')}
             multiline={true}
            value={values.session_time}
           
           />
           {touched.session_time && errors.session_time &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.session_time}</Text>
            }

        <TextInput
             style={styles.input}
             name="location"
             placeholder="Event Location address"
             onChangeText={handleChange('location')}
             onBlur={()=>setFieldTouched('location')}
             multiline={true}
             value={values.location}
           />
           {touched.location && errors.location &&
              <Text style={{ justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red' }}>{errors.location}</Text>
            }
            


            <TextInput
             style={styles.input}
             name="time"
             placeholder='Event start Time'
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
             name="type_of_shoot"
             placeholder='Enter type of shoot'
             onChangeText={handleChange('type_of_shoot')}
             onBlur={()=>setFieldTouched('type_of_shoot')}
             multiline={true}
            textAlignVertical='top'
            value={values.type_of_shoot}
            
           />
            {touched.type_of_shoot && errors.type_of_shoot &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.type_of_shoot}</Text>
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

export default CatererBookingForm