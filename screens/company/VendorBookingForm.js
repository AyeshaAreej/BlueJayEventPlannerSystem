import React from 'react'
import {useState}  from 'react'
//import DatePicker from 'react-native-date-picker';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../components/colors';
import { ImageBackground,StatusBar, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import * as yup from 'yup';
import { Formik} from 'formik';


function VendorBookingForm({  navigation}) {

 
   const [date, setDate] = useState(new Date());
   const [open, setOpen] = useState(false);

 
  
  
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
            date:yup
            .date()
            .required('Date of event is required'),
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
             {/* <DatePicker  date={date} onDateChange={setDate}  /> */}
          
             <View style={styles.button}>
  <Button title="Pick Date" onPress={() => setOpen(true)} />
      <DateTimePicker
        modal
        mode='datetime'
        open={open}
        date={date}
        value={new Date()}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      
      
</View>
                  
      <View style={styles.button}>
       <Button onPress={handleSubmit} title="Submit" color='#9370DB' />
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

export default VendorBookingForm