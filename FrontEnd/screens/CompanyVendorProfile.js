import { StyleSheet, Text, View,TextInput, ScrollView ,Button, StatusBar,Image,Platform} from 'react-native'
import colors from '../components/colors';
import React,  { useState, useEffect } from 'react'
import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import COLORS from '../components/colors';

const CompanyVendorProfile = ({navigation}) => {
  const [image, setImage] = useState(null);


  const pickImage = async () => {
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
    <ScrollView  style={{flex:1, backgroundColor:'#fff', }} contentContainerStyle={{justifyContent:'center',
    alignItems:'center'}} >
   

      {/* Form Inputs View */}
   <View style={{marginTop:50}}>
          <Formik
      initialValues={{companyname:'', email: '', phone_no: '',city:'',services:'',pricerange:'',address:'',availabilitytime:'',}}
      onSubmit={
        (values) => {
        // console.log(values, image)
        navigation.navigate('EditCompanyVendorProfile')
        }}
          validationSchema={yup.object().shape({
            companyname: yup
            .string()
            .required('Company Name is required.'),  
            email: yup
            .string()
            .email()
            .required('Email is required.'),  
            phone_no: yup
            .number()
            .min(11, 'min 11 digits are required')
            // .max(11, 'max 11 digits are required')
            .required('Phone Number is required.'), 
            city : yup
             .string()
            .required('City is required.'),  
            services : yup
            .string()
            .required('Service is required.'), 
            pricerange: yup
            .string()
            .required('Price Range is required.'), 
            address: yup
            .string()
            .required('Address is required'),
            availabilitytime: yup
            .string()
            .required('Available hours required')
                
         
          })}

    
    >
      {({ handleChange, handleSubmit, values,errors,touched, setFieldTouched }) => (
        <View >

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,}}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
  
  </View>
  <View style={styles.button}>
    <Button title="Upload Image" onPress={pickImage} color={colors.primary}/>
    </View>



    <View style={styles.inputContainer} >
        <MaterialCommunityIcons name="account"  size={38} style={styles.icon}/>
        <TextInput
             style={styles.input}
             name="companyname"
             placeholder='Company Name'
             onChangeText={handleChange('companyname')}
             onBlur={()=>setFieldTouched('companyname')}
            value={values.companyname}
           
           />
            </View>
           {touched.companyname && errors.companyname &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.companyname}</Text>
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
             placeholder="Enter City"
             onChangeText={handleChange('city')}
             onBlur={()=>setFieldTouched('city')}
             value={values.city}
           /></View>
           {touched.city && errors.city &&
              <Text style={{ justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red' }}>{errors.city}</Text>
            }

            <View style={styles.inputContainer} >
        <MaterialCommunityIcons name="application-settings"  size={38} style={styles.icon}/>
            <TextInput
             style={styles.input}
             name="services"
             placeholder='Services '
             onChangeText={handleChange('services')}
             onBlur={()=>setFieldTouched('services')}
             value={values.services}
           
           /></View>
           {touched.services && errors.services &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.services}</Text>
            }
            
            <View style={styles.inputContainer} >
            <MaterialCommunityIcons name="currency-usd"  size={38} style={styles.icon}/>
            <TextInput
             style={styles.input}
             name="pricerange"
             placeholder='Price Range '
             onChangeText={handleChange('pricerange')}
             onBlur={()=>setFieldTouched('pricerange')}
            value={values.pricerange}
           /></View>
            {touched.pricerange && errors.pricerange &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.pricerange}</Text>
            }
            <View style={styles.inputContainer} >
            <MaterialCommunityIcons name="home"  size={38} style={styles.icon}/>
            <TextInput
             style={styles.input}
             name="address"
             placeholder='Address '
             onChangeText={handleChange('address')}
             onBlur={()=>setFieldTouched('address')}
            value={values.address}
            
           /></View>
            {touched.address && errors.address &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.address}</Text>
            }
            
            <View style={styles.inputContainer} >
            <MaterialCommunityIcons name="clock"  size={38} style={styles.icon}/>
            <TextInput
             style={styles.input}
             name="availabilitytime"
             placeholder='Available Hours '
             onChangeText={handleChange('availabilitytime')}
             onBlur={()=>setFieldTouched('availabilitytime')}
            value={values.availabilitytime}
            
            
           /></View>
            {touched.availabilitytime && errors.availabilitytime &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.availabilitytime}</Text>
            }
           
          
            {/*Save Button  */}
        
          <View style={styles.button}>
           <Button  onPress={handleSubmit}
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
    width: '40%',
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
export default CompanyVendorProfile;