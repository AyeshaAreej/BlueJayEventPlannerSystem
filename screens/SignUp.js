import React from "react";
import {useState}  from 'react'
import { ImageBackground, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "react-native-web";
import { Colors } from "../components/styles";
import { Formik } from 'formik'
// Social buttons
import { FacebookSocialButton } from "react-native-social-buttons";
import {InstagramSocialButton } from "react-native-social-buttons";
import {GoogleSocialButton } from "react-native-social-buttons";




function SignUp({navigation}) {

  // State Variables
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [signup, setSignup] =useState('false')

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
             initialValues={{ uname:'', email: '', password: '', phoneNumber:'', city:'' }}
             onSubmit={values => {
               console.log(values)
              //  navigation.navigate('HomeScreen')
              }}
           >
      {({ handleChange, handleSubmit, values }) => (
        <>
           <TextInput
             style={styles.input}
             name="uname"
             placeholder='Enter User Name'
             onChangeText={handleChange('uname')}
            // onBlur={handleBlur('email')}
            value={values.uname}
            // keyboardType="email-address"
           />
              <TextInput
             style={styles.input}
             name="email"
             placeholder='Enter Email'
             onChangeText={handleChange('email')}
            // onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
           />

           <TextInput
             style={styles.input}
             name="password"
            placeholder="Enter Password"
             onChangeText={handleChange('password')}
            // onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
      
           />
            <TextInput
             style={styles.input}
             name="phoneNumber"
            placeholder="Enter Phone Number"
             onChangeText={handleChange('phoneNumber')}
            // onBlur={handleBlur('password')}
            value={values.phoneNumber}
            keyboardType="numeric"
            />

            <TextInput
             style={styles.input}
             name="city"
            placeholder="Enter City"
             onChangeText={handleChange('city')}
            // onBlur={handleBlur('password')}
            value={values.city}
           />
         
            {/*SignUn Button  */}
          <View style={styles.container}>
          <View style={styles.button}>

           <Button
           onPress={()=>navigation.navigate('HomeScreen')}
           title="SignUp"
           color='#9370DB'
           /> 
          </View>
          </View>
       
        </>
      )}
    </Formik>


     </View>

     <View>

            <Text style={{marginLeft:210, marginTop:80,fontWeight: "bold"}}>OR</Text>

              {/* Social buttons */}
        
            <View style={styles.sbcontainer} >
              
            <FacebookSocialButton onPress={() => {}} buttonViewStyle={{width:50,backgroundColor:'#fff' }} logoStyle={{marginLeft:120,backgroundColor:'#4267B2' }} textStyle={{color:'#fff'}}/>
            <InstagramSocialButton onPress={() => {}} buttonViewStyle={{width:50}} logoStyle={{marginLeft:80}} textStyle={{color:'#fff'}} />
            <GoogleSocialButton onPress={() => {}} buttonViewStyle={{width:50}} logoStyle={{marginLeft:10}}textStyle={{color:'#fff'}} />
            </View>

            <Text style={{marginLeft:100}}>Already Have an Account?  <Text style={{fontWeight: "bold"}}> SignIn</Text> </Text>

            </View>
        
      </View>
  );
}

const styles = StyleSheet.create({

  topView:{
    backgroundColor :"#9370DB",
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
   borderBottomWidth:1,
   padding:3,
   marginLeft:110,
   margin:6,
   width:200,

   },

   container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    padding:5,
    borderRadius: 100,
  
  },
   button:{
    backgroundColor: 'purple',
    width: '50%',
    height: 35,
    marginLeft:110,
    marginTop:30,
    

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