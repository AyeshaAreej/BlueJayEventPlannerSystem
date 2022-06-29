import { StyleSheet, Text, View,TextInput, ScrollView ,Button, StatusBar} from 'react-native'
import colors from '../components/colors';
import React,{useState} from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {

const {edit, setEdit}=useState('false');




  return (
    <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center',
    alignItems:'center'}} >
   

      {/* Form Inputs View */}
   <View style={{marginTop:20, }}>
          <Formik
      initialValues={{username:'', email: '', phone_no: '',city:'', }}
      onSubmit={
        (values) => {
         console.log(values)
          }}
          validationSchema={yup.object().shape({
            username: yup
            .string()
            .required('Name is required.'),  
            email: yup
            .string()
            .email()
            .required('Email is required.'),  
            username: yup
            .string()
            .required('Name is required.'),  
            phone_no: yup
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

        <View style={styles.inputContainer} >
        <Icon name="account"  size={38} style={styles.icon}/>
        <TextInput
             style={styles.input}
             name="username"
             placeholder='User Name'
             onChangeText={handleChange('username')}
            
             onBlur={()=>setFieldTouched('username')}
            value={values.username}
           
           />
           </View>
           {touched.username && errors.username &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.username}</Text>
            }
            <View style={styles.inputContainer} >
        <Icon name="email"  size={38} style={styles.icon}/>
           <TextInput
             style={styles.input}
             name="email"
             placeholder='Email'
             onChangeText={handleChange('email')}
             onBlur={()=>setFieldTouched('email')}
            value={values.email}
            keyboardType="email-address"
            
           /></View>
            {touched.email && errors.email &&
              <Text style={{  justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red'}}>{errors.email}</Text>
            }
            <View style={styles.inputContainer} >
        <Icon name="phone"  size={38} style={styles.icon}/>
            <TextInput
             style={styles.input}
             name="phone_no"
             placeholder='Phone Number'
             onChangeText={handleChange('phone_no')}
             onBlur={()=>setFieldTouched('phone_no')}
            value={values.phone_no}
            keyboardType="numeric"
            
           /></View>
            {touched.phone_no && errors.phone_no &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.phone_no}</Text>
            }
            <View style={styles.inputContainer} >
        <Icon name="city"  size={38} style={styles.icon}/>
            <TextInput
             style={styles.input}
             name="city"
             placeholder="City"
             onChangeText={handleChange('city')}
             onBlur={()=>setFieldTouched('city')}
             value={values.city}
           /></View>
           
           {touched.city && errors.city &&
              <Text style={{ justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red' }}>{errors.city}</Text>
            }
           
          
            {/*Save Button  */}
          <View style={styles.container}>
          <View style={styles.button}>
           <Button  onPress={handleSubmit} 
           title="Edit"
           color='purple'
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
   borderColor :colors.white,
   margin:6,
   padding:22,
   width:280,
   fontSize:20,
   borderWidth:2,
   elevation:20,
   borderRadius:15,
   backgroundColor:'white'
   

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
     margin:75,
 },
 icon:{
 color:colors.primary,
 margin:20,

 },
 inputContainer:{
  flexDirection:'row',
  color:colors.white, 
  // borderWidth:5,
  // borderRadius:20,
  // borderColor:'purple'
 },
   

});
export default Profile;