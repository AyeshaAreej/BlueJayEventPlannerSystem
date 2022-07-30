import { StyleSheet, Text, View,TextInput, ScrollView ,Button,Image,StatusBar} from 'react-native'
import colors from '../components/colors';
import React,{useState} from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Profile = ({navigation}) => {

  const [image, setImage] = useState(null);
  const [hide,setHide]=useState(false);

  const pickImage = async () => {
    setHide(true)
   // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  return (
    <View style={{flex:1, backgroundColor:'#fff', }} contentContainerStyle={{justifyContent:'center',
    alignItems:'center'}} >
   

      {/* Form Inputs View */}
   <View style={{marginTop:50, }}>
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

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,}}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
       </View>

       <View style={styles.buttonI}>
    <Button hide="false" title="Upload Image" onPress={pickImage} color={colors.primary}/>
    </View>
        <View style={styles.inputContainer} >
        <MaterialCommunityIcons name="account"  size={38} style={styles.icon}/>
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
        <MaterialCommunityIcons name="email"  size={38} style={styles.icon}/>
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
        <MaterialCommunityIcons name="phone"  size={38} style={styles.icon}/>
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
        <MaterialCommunityIcons name="city"  size={38} style={styles.icon}/>
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
            <View style={styles.password}>
            <MaterialCommunityIcons name="playlist-edit"  size={38} style={styles.icon}/>
            {/* <Text>Edit Password</Text> */}
            </View>
           
          
            {/*Save Button  */}
          <View style={styles.container}>
          <View style={styles.button}>
           <Button  onPress={handleSubmit} 
           title="Edit"
           color='purple'
           /> 

          
          </View>
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
    backgroundColor: 'purple',
    width: '35%',
    height: 35,
    //  margin:55,
  
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
 inputContainer:{
  flexDirection:'row',
  color:colors.white, 

 },
   

});
export default Profile;