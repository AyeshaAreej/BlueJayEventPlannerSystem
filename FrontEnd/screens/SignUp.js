import React from "react";
import {useState, useEffect}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import colors from "../components/colors";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Formik } from 'formik';
import * as yup from 'yup';
// Social buttons
import { FacebookSocialButton } from "react-native-social-buttons";
import {InstagramSocialButton } from "react-native-social-buttons";
import {GoogleSocialButton } from "react-native-social-buttons";
import { User_Home } from "../constants";





function SignUp({navigation}) {

  // State Variables
  const [username, setUsername]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [phone_no, setPhone_no]=useState('')
  const [city, setCity]=useState('')
  const [signup, setSignup] =useState('false')


  

  async function handleLogin(values){

     //console.log(values.username)
    //  const username = values.username
    //  const email = values.email
    //  const password = values.password
    //  const city = values.city
    //  const phone_no = values.phone_no

    const result = await fetch('/users/signUp',{
      method:'POST',
      headers:{
        'content-Type': 'application/json'
      },
      body:JSON.stringify({
        username,
        email,
        password,
        city,
        phone_no

        // "username" : "aemun",
        // "email" : "aii@gmail.com",
        // "password": "aemun",
        // "city":"sukkur",
        // "phone_no":"877676"

      })
      }).then((res)=>{res.json()
        console.log('done')
      })

      // console.log(result)

      // navigation.navigate('LoginScreen')
 
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
          {/* <View style={styles.container}> */}
          <View style={styles.button}>

           <Button
          //  onPress={()=>navigation.navigate(User_Home)}
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

     <View>

            {/* <Text style={{paddingLeft:100,fontWeight: "bold"}}>OR</Text> */}

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
    width:410,
    height:220,
    
   },

 logo: {
  width: 200,
  height: 110,
  marginLeft:100,
 

},
   
   input:{
   borderBottomColor :'#9370DB',
   borderBottomWidth:4,
   width:200,
   fontSize:18,
   paddingBottom:13,

   },
// button styling
   container: {
    flex: 1,
    paddingTop:'15%',
   
   
  
  },
   button:{
    backgroundColor:colors.primary,
    // width: '50%',
     marginTop:30,
    justifyContent:'center',
    alignItems:'center',

  
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
   

});

export default SignUp;