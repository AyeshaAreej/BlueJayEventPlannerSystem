import React from 'react'
import {useState}  from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../components/colors';
import { ImageBackground,StatusBar, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import * as yup from 'yup';
import { Formik} from 'formik';
import COLORS from '../../components/colors';


function VendorBookingForm({  navigation}) {

 
   const [date, setDate] = useState(new Date());
   const [isPickerShow, setIsPickerShow] = useState(false);

  
   const showPicker = () => {
    setIsPickerShow(true);
  };
   const onChange = (event, value) => {
    setDate(value);
    
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
// console.log(date);
  return (
    <ScrollView style={{flex:1,backgroundColor:colors.white}}>
        <StatusBar barStyle="light-content"  translucent backgroundColor="rgb(147, 112, 219)"   />
       <View style={styles.topView}>
        <ImageBackground
         style={styles.logo}
         source={require('../../assets/logo2.png')}
         resizeMode="cover" >
       </ImageBackground>
      </View>
     <Text style={{color:colors.primary, fontSize:28,fontWeight:'bold',paddingLeft:'30%'}}>Booking Form</Text>
    

    {/* Form */}
    <Formik
     initialValues={{companyname:'', email: '',location:'', phoneNumber:'',date:'',availablebudget:'', specifications:'',}}
     onSubmit={values => console.log(values)} 
     validationSchema={yup.object().shape({
            companyname: yup
            .string()
            .required(' Company Name is required.'),  
            email: yup
            .string()
            .email()
            .required('Email is required.'), 
            location: yup
             .string()
            .required('Location is required.'),    
          //   date:yup
          //   .string()
          //  .required('Date of event is required'),
            phoneNumber: yup
            .number()
             .min(11, 'min 11 digits are required')
            //  .max(12, 'max 12 digits are required')
            .required('Phone Number is required.'), 
            availablebudget: yup
            .number()
            .required('Budget is required.'),
           specifications: yup
             .string()
            .required('Specifications are required.'),    
          })}
 >
    {({ handleChange, handleSubmit, values,errors,touched, setFieldTouched }) => (
       <View style={{ alignItems:"center",justifyContent:'center', flex: 1 }}>
       <TextInput
             style={styles.input}
             name="companyname"
             placeholder='Enter Company Name'
             onChangeText={handleChange('companyname')}
             onBlur={()=>setFieldTouched('companyname')}
            value={values.uname}
           
           />
           {touched.companyname && errors.companyname &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.companyname}</Text>
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
             name="location"
             placeholder="Event Location"
             onChangeText={handleChange('location')}
             onBlur={()=>setFieldTouched('location')}
             value={values.location}
           />
           {touched.location && errors.location &&
              <Text style={{ justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red' }}>{errors.location}</Text>
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
            
            <TextInput
             style={styles.input}
             name="specifications"
             placeholder="Enter Specifications"
            multiline={true}
             onChangeText={handleChange('specifications')}
             onBlur={()=>setFieldTouched('specifications')}
            value={values.specifications}
            />
            {touched.specifications && errors.specifications &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.specifications}</Text>
            }
       

       {/* Date */}
   <View style={styles.container}>
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
      <TextInput
             style={styles.input}
             name="date"
             placeholder='Date '
             onBlur={()=>setFieldTouched('date')}
             onChangeText={handleChange('date')}
             value={date.toUTCString()}
             editable={false}
           
           /> 
            {/* {touched.date && errors.date &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.date}</Text>
            } */}
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <View style={styles.btnContainer}>
          <Button title="Pick Date " color={colors.primary} onPress={showPicker} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          // is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
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
   width:270,
   fontSize:22,

   },

   
   button:{
    backgroundColor:colors.primary,
    width: '50%',
     marginTop:20,

   },
   container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pickedDateContainer: {
    padding: 12,
  },
  pickedDate: {
    fontSize: 20,
    color: colors.grey,
    fontWeight:'bold'
  },
  btnContainer: {
    paddingTop: 12,
   
  },
  // This only works on iOS
 



});

export default VendorBookingForm