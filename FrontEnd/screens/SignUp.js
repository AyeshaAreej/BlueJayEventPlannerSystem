import React from "react";
import {useState, useEffect}  from 'react'
import { ImageBackground, Button, TextInput,TouchableOpacity,StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import colors from "../components/colors";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FacebookSocialButton } from "react-native-social-buttons";
import {InstagramSocialButton } from "react-native-social-buttons";
import {GoogleSocialButton } from "react-native-social-buttons";
import { User_Home, } from "../constants";
import LoginScreen from './LoginScreen'
// import {PORT} from"@env"





function SignUp({navigation}) {

   function handleLogin(values){

    // console.log(values)

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
      navigation.navigate(LoginScreen)
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
     <Text style={{color:'white', fontSize:25,fontWeight:'bold'}}>SignUp</Text>
    
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
            <View style={styles.buttonContainer}> 
            <TouchableOpacity onPress={handleSubmit}  style={styles.editButton}>
            <Text style={{  fontSize: 25,  fontWeight: 'bold',  color: colors.white   }}> Sign Up </Text>
            </TouchableOpacity>
            </View>

     
       
        </View>
      )}
    </Formik>


     </View>

     <View>

          

              {/* Social buttons */}
        
            <View style={styles.sbcontainer} >
              
            <FacebookSocialButton onPress={() => {}} buttonViewStyle={{width:50,backgroundColor:'#fff' }} logoStyle={{marginLeft:120,backgroundColor:'#4267B2' }} textStyle={{color:'#fff'}}/>
            <InstagramSocialButton onPress={() => {}} buttonViewStyle={{width:50}} logoStyle={{marginLeft:80}} textStyle={{color:'#fff'}} />
            <GoogleSocialButton onPress={() => {}} buttonViewStyle={{width:50}} logoStyle={{marginLeft:10}}textStyle={{color:'#fff'}} />
            </View>

            <Text style={{marginLeft:100,fontSize:15,}}>Already Have an Account?  <Text style={{fontWeight: "bold"}}> SignIn</Text> </Text>

            </View>
        
      </View>
  );
}

const styles = StyleSheet.create({

  topView:{
    backgroundColor :colors.primary,
    paddingTop:"18%",
    paddingLeft:8,
    width:"100%",
    height:220,
    
   },

 logo: {
  width: 200,
  height: 110,
  marginLeft:100,
 

},
   
   input:{
   borderBottomColor :colors.primary,
   borderBottomWidth:4,
   width:200,
   fontSize:18,
   paddingBottom:13,

   },

   sbcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    borderRadius: 100,
    margin:20,
    marginBottom: 60

  },
  buttonContainer:{
    justifyContent:'center',
    alignItems:'center',

},
editButton:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:25,
  width:180,
  borderColor :colors.primary,
  borderWidth:4,
  elevation:15,
  borderRadius:15,
  backgroundColor:colors.primary,
},


});

export default SignUp;