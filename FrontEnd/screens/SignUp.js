import React from "react";
import {useState, useEffect}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView,Pressable, StyleSheet, View, Image, Text } from "react-native";
import colors from "../components/colors";
import { Formik } from 'formik';
import * as yup from 'yup';
import { FacebookSocialButton } from "react-native-social-buttons";
import {GoogleSocialButton } from "react-native-social-buttons";
import { User_Home, } from "../constants";
import COLORS from "../components/colors";

import { useNavigation } from '@react-navigation/native';
// import {PORT} from"@env"





const SignUp = ()=> {


  const navigation = useNavigation();

   function handleLogin(values){

    console.log(values)

      fetch(`http://10.0.2.2:5000/users/signUp`,{
        method: "post",
        body: JSON.stringify(values),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }   
        
      
   }).then(res=>res.json()).then(result=>{console.log(result)
    if(result.status == 'ok')
    {
      navigation.navigate("LoginScreen")
    }
    else{
      //refresh this form and show error
    }
    

   
  }).catch(err=>console.log(err.message))
  
 
  }


  return (
    
   <View style={{flex:1,backgroundColor:'#fff'}} >
   <View style={styles.topView}>
   <ImageBackground
   style={styles.logo}
     source={require('../assets/logo2.1.png')}
     resizeMode="cover" >
    </ImageBackground>
     <Text style={{color:'white',marginLeft:140, fontSize:30,fontWeight:'bold'}}>SignUp</Text>
    
 </View>

      {/* Form Inputs View */}
   <View style={{marginTop:20}}>
          <Formik
             initialValues={{ username:'', email: '', password: '', phone_no:'', city:'' }}
             onSubmit={
              (values) => {
             //console.log(values)
             handleLogin(values)
             }}
            

              validationSchema={yup.object().shape({
            username: yup
            .string()
            .required('Name is required.'),  
            email: yup
            .string()
            .email()
            .required('Email is required.'), 
             password: yup
            .string()
            .min(5, 'More than 5 characters are needed.')
            .max(11, 'More than 12 characters are not allowed.')
            .required(),
            phone_no: yup
            .number()
            // .min(11, '11 or 12 digits are required')
            // .max(12, '11 or 12 digits are required')
            .required('Phone Number is required.'), 
            city : yup
            .string()
            .required('City is required.'),  
          })}
          
           >
      {({  handleChange, handleSubmit, values,errors,touched, setFieldTouched}) => (
        <View style={{ alignItems:"center",justifyContent:'center' }}>
           <TextInput
             style={styles.input}
             name="username"
             placeholder='Enter User Name'
             onChangeText={handleChange('username')}
             onBlur={()=>setFieldTouched('username')}
            value={values.username}
           
           />
           {touched.username && errors.username &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.username}</Text>
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
             name="password"
            placeholder="Enter Password"
             onChangeText={handleChange('password')}
             onBlur={() => setFieldTouched('password')}
            value={values.password}
            secureTextEntry />
            {touched.password && errors.password &&
              <Text style={{ justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red' }}>{errors.password}</Text>
            }
            <TextInput
             style={styles.input}
             name="phone_no"
             placeholder='Enter Phone Number'
             onChangeText={handleChange('phone_no')}
             onBlur={()=>setFieldTouched('phone_no')}
            value={values.phone_no}
            keyboardType="numeric"
            
           />
            {touched.phone_no && errors.phone_no &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.phone_no}</Text>
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
         
            {/*SignUn Button  */}
          <View style={styles.button}>

           <Button
           onPress={handleSubmit}
           title="SignUp"
           color={colors.primary}
           /> 

           
          </View>
          {/* </View> */}
       
        </View>
      )}
    </Formik>


     </View>

                  <Text style={{marginLeft:100,fontSize:15,marginTop:10}}>Already Have an Account?   
                 
                  <Pressable onPress={()=>{navigation.navigate('LoginScreen')}}>
                      <Text style={{fontWeight: "bold",fontSize:16}}>    SignIn</Text>
                  </Pressable>
                       
                  </Text>

                  <View style={styles.center}>
      
                  {/* Social buttons */}
      
                  <View  style={styles.socialbTag}>
                  <GoogleSocialButton onPress={() => {}} buttonViewStyle={{width:'74%',backgroundColor:'#F5F5DC', }} logoStyle={{marginLeft:10}}textStyle={{color:COLORS.dark,fontSize:18}} />
                  <FacebookSocialButton onPress={() => {}} buttonViewStyle={{width:'70%'}} logoStyle={{marginLeft:10}}textStyle={{color:COLORS.white,fontSize:18}} />
                  </View>


    </View>

            
        
      </View>
  );
}

const styles = StyleSheet.create({

  topView:{
    backgroundColor :COLORS.primary,
    paddingTop:"11%",
    paddingLeft:30,
    width:"100%",
    height:250,
    
   },
   socialbTag:{
   flexDirection: 'column',
   justifyContent: 'space-around',
   alignItems: 'center',

 },

 logo: {
  width: 200,
  height: 130,
  marginLeft:90,

},

center:{
  paddingTop:25,justifyContent:'center',
   alignItems:'center',
},
   
   input:{
  
    borderColor :COLORS.white,
    margin:5,
    padding:10,
    width:280,
    fontSize:20,
    borderWidth:2,
    elevation:20,
    borderRadius:15,
    backgroundColor:'white'

   },
// button styling
   container: {
    flex: 1,
    paddingTop:'15%',
   
   
  
  },
   button:{
    backgroundColor:COLORS.primary,
     marginTop:15,
    justifyContent:'center',
    alignItems:'center',

  
   },
   

});

export default SignUp;