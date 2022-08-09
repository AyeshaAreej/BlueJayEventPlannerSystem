import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView,Button,TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as yup from 'yup';
import colors from '../components/colors';
import * as SecureStore from 'expo-secure-store';


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
        console.log(values.oldpassword, values.newpassword)

        SecureStore.getItemAsync('token').then(token=>{

          console.log('view profile',token)
         
         
          fetch(`http://10.0.2.2:5000/users/showProfile`,{
                        method: "get",
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json",
                            token
                        }
                      
                  }).then(res=>res.json()).then(async(result)=>{
                  
    
                    if( result.status == 'ok'){
                      console.log(result)
                      setUser(result.data)
                        
                    }else{
                      console.log(result.status)
                      
    
                    }
    
    
                  }).catch(err=>console.log('catch',err.message))
        })  
         






      }}



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
        <Text style={{marginTop:20, marginBottom:20, fontSize:20,fontWeight: 'bold'}}>
        Changing your password? Go for at least 6 characters
        </Text>
        </View>
      
            <View style={styles.inputContainer} >
            <MaterialCommunityIcons name="onepassword"  size={38} style={styles.icon}/> 
            
            <TextInput
             style={styles.input}
             name="oldpassword"
             placeholder='Enter Current Password'
             onChangeText={handleChange('oldpassword')}
             onBlur={()=>setFieldTouched('oldpassword')}
             value={values.oldpassword}
             secureTextEntry
           
           />
           </View>
           {touched.oldpassword && errors.oldpassword &&
              <Text style={{ marginLeft:70,fontSize: 18, color: 'red' }}>{errors.oldpassword}</Text>
            }

      
            <View style={styles.inputContainer} >
            <MaterialCommunityIcons name="onepassword"  size={38} style={styles.icon}/> 
            <TextInput
             style={styles.input}
             name="newpassword"
             placeholder='Enter New Password'
             onChangeText={handleChange('newpassword')}
             onBlur={()=>setFieldTouched('newpassword')}
             value={values.newpassword}
             secureTextEntry
           
           />
            </View>
            {touched.newpassword && errors.newpassword &&
              <Text style={{ marginLeft:70,fontSize: 18, color: 'red' }}>{errors.newpassword}</Text>
            }
           
       
                     
                
            {/* Button  */}
            
           <View style={styles.buttonContainer}> 
            <TouchableOpacity onPress={handleSubmit} style={styles.editButton}>
            <Text style={{  fontSize: 25,  fontWeight: 'bold',  color: colors.white,   }}> Save </Text>
            </TouchableOpacity>
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
    },
    buttonContainer:{
      justifyContent:'center',
      alignItems:'center',
  
  },
  editButton:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:70,
    width:280,
    borderColor :colors.primary,
    borderWidth:4,
    elevation:15,
    borderRadius:15,
    backgroundColor:colors.primary,
  },
 
   
});