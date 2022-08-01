import { StyleSheet, Text, View,TextInput,TouchableOpacity, ScrollView ,Button,Image,StatusBar, InputAccessoryView} from 'react-native'
import colors from '../components/colors';
import React,{useState} from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Profile = ({navigation}) => {

  




  return (
    <View style={{flex:1, backgroundColor:'#fff', }} contentContainerStyle={{justifyContent:'center',
    alignItems:'center'}} >
   

      {/* Form Inputs View */}
   <View style={{marginTop:10 }}>
          <Formik
      initialValues={{username:'', email: '', phone_no: '',city:'', }}
      onSubmit={
        (values) => {
        //  console.log(values)
       
         navigation.navigate('EditProfile')}}
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
        <View>
        <View style={styles.buttonContainer}>
        <Image source={require('.././assets/profile.jpg')} style={styles.profileImage} />
        </View>
     

       
        <View style={styles.inputContainer} >
        <MaterialCommunityIcons name="account"  size={30} style={styles.icon}/>
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
        <MaterialCommunityIcons name="email"  size={30} style={styles.icon}/>
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
        <MaterialCommunityIcons name="phone"  size={30} style={styles.icon}/>
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
        <MaterialCommunityIcons name="city"  size={30} style={styles.icon}/>
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
        
            <View style={styles.buttonContainer}> 
            <TouchableOpacity style={styles.editPassword}
             onPress={()=> navigation.navigate('ChangePassword') } >
       
            <Text style={{  fontSize: 25,  fontWeight: 'bold',  color: colors.white,   }}> Change Password </Text>
            <MaterialCommunityIcons name="playlist-edit"  size={34} style={styles.passwordIcon}/> 
            </TouchableOpacity>
            </View>

           
           
          
            {/*Save Button  */}
         
           <View style={styles.buttonContainer}> 
           <TouchableOpacity  style={styles.editButton}
            onPress={handleSubmit}>
             <Text style={{  fontSize: 25,  fontWeight: 'bold',  color: colors.white,   }}>Edit</Text>
           </TouchableOpacity> 
            </View>
       
        </View>
      )}
    </Formik>


     </View>

  
    
 </View>
  );
}

const styles = StyleSheet.create({
  

   input:{
   margin:6,
   padding:8,
   width:280,
   fontSize:20,
   borderColor :colors.white,
   elevation:20,
   borderRadius:15,
   backgroundColor:'white'

   },
password:{
  borderColor :colors.white,
   margin:3,
   width:280,
   fontSize:20,
   borderWidth:2,
   elevation:20,
   borderRadius:15,
   backgroundColor:'white',
   justifyContent:'space-between',
   alignItems:'center',
},
   container: {
    flex: 1,
    borderRadius: 100,
    justifyContent:'center',
    alignItems:'center',
    padding:35
  },
   button:{
    backgroundColor:colors.primary,
    width: '35%',
    height: 35,

  
 },
 buttonI:{
  backgroundColor: colors.primary,
  width: '40%',
  height: 35,
  marginTop:20,
  marginBottom:20,
  marginLeft:'30%',
 }
 ,
 icon:{
 color:colors.primary,
 margin:20,

 },
 passwordIcon:{
  color:colors.white,
  margin:10,
 },

editPassword: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop:10,
  width:280,
  borderColor :colors.primary,
  borderWidth:2,
  elevation:20,
  borderRadius:15,
  backgroundColor:colors.primary
  },
  editButton:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    width:280,
    borderColor :colors.primary,
    borderWidth:2,
    elevation:20,
    borderRadius:15,
    backgroundColor:colors.primary,
  },
  buttonContainer:{
      justifyContent:'center',
      alignItems:'center',
 
  },
 inputContainer:{
  flexDirection:'row',
  color:colors.white, 

 },
 profileImage:{
 
    height: 180,
    width: '50%',
    borderRadius: 20,

 },

});
export default Profile;