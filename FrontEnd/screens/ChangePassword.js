import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView,Button } from 'react-native';
import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as yup from 'yup';
import colors from '../components/colors';

export default function ChangePassword() {
 const [oldPassword,setOldPassword]=useState('')
 const [newPassword,setNewPassword]=useState('')

 
  return (
    <ScrollView  style={{flex:1, backgroundColor:'#fff', }} contentContainerStyle={{justifyContent:'center',
    alignItems:'center'}} >
   

      {/* Form Inputs View */}
   <View style={{marginTop:50,}}>
          <Formik
      initialValues={{ oldpassword: '',newpassword: '',}}
      onSubmit={
        (values) => {
        console.log(values.oldpassword, values.newpassword)}}
        validationSchema={yup.object().shape({
          oldpassword: yup
            .string()
            .min(6, 'More than 6 characters are needed.')
            .max(11, 'Less than 12 characters are allowed.')
            .required('Current Password is required'),
          newpassword: yup
          .string()
            .min(6, 'More than 6 characters are needed.')
            .max(11, 'Less than 12 characters are allowed.')
            .required('Old Password is required'),         
       
          })}

    
    >
      {({ handleChange, handleSubmit, values,errors,touched, setFieldTouched }) => (
        <View >

        <View style={styles.inputContainer} >
        <Text style={{marginBottom:20, fontSize:17}}>
        Changing your password? Go for at least 6 characters
        </Text>
        </View>
      
            <View style={styles.inputContainer} >
            <MaterialCommunityIcons name="playlist-edit"  size={38} style={styles.icon}/> 
            
            <TextInput
             style={styles.input}
             name="oldpassword"
             placeholder="Enter Old Password"
             onChangeText={handleChange('oldpassword')}
             onBlur={()=>{
              setFieldTouched('oldpassword')
              }}
             value={values.oldpassword}
           /></View>
           {touched.oldpassword && errors.oldpassword &&
              <Text style={{fontSize: 18,marginLeft:70, color: 'red' }}>{errors.oldpassword}</Text>
            }

      
            <View style={styles.inputContainer} >
            <MaterialCommunityIcons name="playlist-edit"  size={38} style={styles.icon}/> 
            <TextInput
             style={styles.input}
             name="newpassword"
             placeholder='Enter Current Password'
             onChangeText={handleChange('newpassword')}
             onBlur={()=>setFieldTouched('newpassword')}
             value={values.newpassword}
           
           />
            </View>
            {touched.newpassword && errors.newpassword &&
              <Text style={{ marginLeft:70,fontSize: 18, color: 'red' }}>{errors.newpassword}</Text>
            }
           
       
                     
                
            {/*Save Button  */}
        
          <View style={styles.button}>
           <Button  onPress={()=>{
              handleSubmit
              
              }}
           title="Edit"
           color={colors.primary}
           /> 
          </View>
       
       </View>
    
      )}
    </Formik>
    

     </View>

    
    
 </ScrollView>
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


   button:{
    backgroundColor: colors.primary,
    width: '45%',
    height: 35,
    // margin:60,
   marginTop:20,
   marginBottom:20,
    marginLeft:'30%',
   

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