import { StyleSheet, Text, View,TextInput, ScrollView ,Button, StatusBar} from 'react-native'
import colors from '../components/colors';
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome'

const Profile = () => {
  return (
    <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center',
    alignItems:'center'}} >
   

      {/* Form Inputs View */}
   <View style={{marginTop:50}}>
          <Formik
      initialValues={{uname:'', email: '', phoneNumber: '',city:'', }}
      onSubmit={
        (values) => {
          navigation.navigate('HomeScreen')
          console.log(values)}}
          validationSchema={yup.object().shape({
            uname: yup
            .string()
            .required('Name is required.'),  
            email: yup
            .string()
            .email()
            .required('Email is required.'),  
            uname: yup
            .string()
            .required('Name is required.'),  
            phoneNumber: yup
            .number()
            .min(11, 'min 11 digits are required')
            .required('Phone Number is required.'), 
            city : yup
            .string()
            .required('City is required.'),        
         
          })}

    
    >
      {({ handleChange, handleSubmit, values,errors,touched, setFieldTouched }) => (
        <>
        <TextInput
             style={styles.input}
             name="uname"
             placeholder='User Name'
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
             placeholder='Email'
             onChangeText={handleChange('email')}
             onBlur={()=>setFieldTouched('email')}
            value={values.email}
            keyboardType="email-address"
            
           />
            {touched.email && errors.email &&
              <Text style={{  justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red'}}>{errors.email}</Text>
            }

            <TextInput
             style={styles.input}
             name="phoneNumber"
             placeholder='Phone Number'
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
             name="city"
             placeholder="City"
             onChangeText={handleChange('city')}
             onBlur={()=>setFieldTouched('city')}
             value={values.city}
           />
           
           {touched.city && errors.city &&
              <Text style={{ justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red' }}>{errors.city}</Text>
            }
           
          
            {/*Save Button  */}
          <View style={styles.container}>
          <View style={styles.button}>
           <Button  onPress={handleSubmit} 
           title="Save"
           color='#9370DB'
           /> 
          </View>
          </View>
       
        </>
      )}
    </Formik>


     </View>

  
    
 </View>
  );
}

const styles = StyleSheet.create({
  

   input:{
   borderColor :'#9370DB',
   margin:12,
   padding:25,
   width:230,
   fontSize:20,
   borderWidth:2,
   

   },

   container: {
    flex: 1,
    // padding:5,
    borderRadius: 100,
   
  
  },
   button:{
    backgroundColor: 'purple',
    width: '55%',
    height: 35,
     margin:50,
   
   

   },
 
   

});
export default Profile;