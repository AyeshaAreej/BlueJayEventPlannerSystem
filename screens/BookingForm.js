import React from 'react'
import {useState}  from 'react'
import colors from '../components/colors';
import { ImageBackground,StatusBar, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Colors } from "../components/styles";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import * as yup from 'yup';
import { Formik} from 'formik';


function BookingForm() {

   const [phonenum, setPhonenum] = useState(0);
  const [show, setShow] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

 
  
  
  return (
    <ScrollView style={{flex:1,backgroundColor:colors.white}}>
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
     initialValues={{uname:'', email: '',city:'', phoneNumber:'',eventtype:'',date:'',availablebudget:'', numofguests:'',venuetype:'',services:'',availablebudget:'',  }}
     onSubmit={values => console.log(values)} 
     validationSchema={yup.object().shape({
            uname: yup
            .string()
            .required('Name is required.'),  
            email: yup
            .string()
            .email()
            .required('Email is required.'), 
            city : yup
             .string()
            .required('City is required.'),  
           eventtype : yup
            .string()
            .required('Event Type is required.'),  
            date:yup
            .date()
            .required('Date of event is required'),
            phoneNumber: yup
            .number()
             .min(11, 'min 11 digits are required')
            //  .max(12, 'max 12 digits are required')
            .required('Phone Number is required.'), 
            numofguests: yup
            .number()
            .required('Number of guests is required.'), 
            availablebudget: yup
            .number()
            .required('Budget is required.'), 
            venuetype: yup
            .string(),
            services : yup
            .string(),
          })}
 >
    {({ handleChange, handleSubmit, values,errors,touched, setFieldTouched }) => (
       <View style={{ alignItems:"center",justifyContent:'center', flex: 1 }}>
       <TextInput
             style={styles.input}
             name="uname"
             placeholder='Enter User Name'
             onChangeText={handleChange('uname')}
             onBlur={()=>setFieldTouched('uname')}
            value={values.uname}
           
           />
           {touched.uname && errors.uname &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.uname}</Text>
            }

            <TextInput
             style={styles.input}
             name="email"
             placeholder='Enter Email'
             onChangeText={handleChange('email')}
             onBlur={()=>setFieldTouched('email')}
            value={values.email}
            keyboardType="email-address"
            
           />
            {touched.email && errors.email &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.email}</Text>
            }  
           

            <TextInput
             style={styles.input}
             name="city"
             placeholder="Enter City"
             onChangeText={handleChange('city')}
             onBlur={()=>setFieldTouched('city')}
             value={values.city}
           />
           {touched.city && errors.city &&
              <Text style={{ justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red' }}>{errors.city}</Text>
            }
            <TextInput
             style={styles.input}
             name="phoneNumber"
             placeholder='Enter Phone Number'
             onChangeText={handleChange('phoneNumber')}
             onBlur={()=>setFieldTouched('phoneNumber')}
            value={values.phoneNumber}
            keyboardType="numeric"
            
           />
            {touched.phoneNumber && errors.phoneNumber &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.phoneNumber}</Text>
            }
            <TextInput
             style={styles.input}
             name="eventtype"
             placeholder='Event Type'
             onChangeText={handleChange('eventtype')}
             onBlur={()=>setFieldTouched('eventtype')}
            value={values.eventtype}
           
           /> 
            {touched.eventtype && errors.eventtype &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.eventtype}</Text>
            }
              <TextInput
             style={styles.input}
             name="date"
             placeholder='Date '
             onChangeText={handleChange('date')}
             onBlur={()=>setFieldTouched('date')}
            value={values.date}
           
           /> 
            {touched.date && errors.date &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.date}</Text>
            }
        
          <TextInput
             style={styles.input}
             name="numofguests"
            placeholder="Number of Guests"
             onChangeText={handleChange('numofguests')}
             onBlur={()=>setFieldTouched('numofguests')}
            value={values.numberofguests}
            keyboardType="numeric"
            />
             {touched.numofguests && errors.numofguests &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.numofguests}</Text>
            }
            
            <TextInput
             style={styles.input}
             name="availablebudget"
            placeholder="Available Budget"
             onChangeText={handleChange('availablebudget')}
             onBlur={()=>setFieldTouched('availablebudget')}
            value={values.availablebudget}
            keyboardType="numeric"
            />
            {touched.availablebudget && errors.availablebudget &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.availablebudget}</Text>
            }
            
              {/* Venue */}
          
            <View style={{borderWidth:3, padding:12, marginTop:5,borderRadius:20,borderColor:colors.primary}}>
            <Text  style={{color:colors.grey,fontSize:20}}>Venue (Optional)</Text>
            <TextInput
             style={styles.input}
             name="venuetype"
             placeholder='Indoor or Outdoor '
             onChangeText={handleChange('venuetype')}
             onBlur={()=>setFieldTouched('venuetype')}
            value={values.venuetype}
           
           />
           {touched.venuetype && errors.venuetype &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.venuetype}</Text>
            }
           <TextInput
             style={styles.input}
             name="services"
             placeholder='Services '
             onChangeText={handleChange('services')}
             onBlur={()=>setFieldTouched('services')}
             value={values.services}
           
           />
           {touched.services && errors.services &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.services}</Text>
            }

        



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
    backgroundColor: colors.white,
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