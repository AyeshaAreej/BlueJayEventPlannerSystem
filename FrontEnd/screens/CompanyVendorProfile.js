import { StyleSheet, Text, View,TextInput, ScrollView ,Button, StatusBar,Image,Platform} from 'react-native'
import colors from '../components/colors';
import React,  { useState, useEffect } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker';

const CompanyVendorProfile = () => {
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
    <ScrollView  style={{flex:1, backgroundColor:'#fff', }} >
   
<Text style={{ alignItems:"center",justifyContent:'center', fontSize:40, paddingLeft:'25%',color:colors.primary,}}>Edit Profile</Text>
      {/* Form Inputs View */}
   <View style={{marginTop:50}}>
          <Formik
      initialValues={{companyname:'', email: '', phoneNumber: '',city:'',services:'',pricerange:'',address:'',availabilitytime:'',}}
      onSubmit={
        (values) => {
          navigation.navigate('HomeScreen')
          console.log(values)}}
          validationSchema={yup.object().shape({
            companyname: yup
            .string()
            .required('Company Name is required.'),  
            email: yup
            .string()
            .email()
            .required('Email is required.'),  
            phoneNumber: yup
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
        <View style={{ alignItems:"center",justifyContent:'center', flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,borderWidth:4,borderColor:colors.primary}}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
  
  </View>
  <View style={styles.button}>
    <Button title="Upload Image" onPress={pickImage} color={colors.primary}/>
    </View>
        <TextInput
             style={styles.input}
             name="companyname"
             placeholder='Company Name'
             onChangeText={handleChange('companyname')}
             onBlur={()=>setFieldTouched('companyname')}
            value={values.companyname}
           
           />
            
           {touched.companyname && errors.companyname &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.companyname}</Text>
            }
       
           <TextInput
             style={styles.input}
             name="email"
             placeholder='Email'
             onChangeText={handleChange('email')}
             onBlur={()=>setFieldTouched('email')}
            value={values.email}
            keyboardType="email-address"
            
           />
            {touched.email && errors.email &&
              <Text style={{  justifyContent:'center',alignContent:'center',fontSize: 18, color: 'red'}}>{errors.email}</Text>
            }

            <TextInput
             style={styles.input}
             name="phoneNumber"
             placeholder='Phone Number'
             onChangeText={handleChange('phoneNumber')}
             onBlur={()=>setFieldTouched('phoneNumber')}
            value={values.phoneNumber}
            keyboardType="numeric"
            
           />
            {touched.phoneNumber && errors.phoneNumber &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.phoneNumber}</Text>
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
            <TextInput
             style={styles.input}
             name="services"
             placeholder='Services '
             onChangeText={handleChange('services')}
             onBlur={()=>setFieldTouched('services')}
             value={values.services}
           
           />
           {touched.services && errors.services &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.services}</Text>
            }

            <TextInput
             style={styles.input}
             name="pricerange"
             placeholder='Price Range '
             onChangeText={handleChange('pricerange')}
             onBlur={()=>setFieldTouched('pricerange')}
            value={values.pricerange}
            
            
           />
            {touched.pricerange && errors.pricerange &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.pricerange}</Text>
            }
            <TextInput
             style={styles.input}
             name="address"
             placeholder='Address '
             onChangeText={handleChange('address')}
             onBlur={()=>setFieldTouched('address')}
            value={values.address}
            
            
           />
            {touched.address && errors.address &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.address}</Text>
            }
            <TextInput
             style={styles.input}
             name="availabilitytime"
             placeholder='Available Hours '
             onChangeText={handleChange('availabilitytime')}
             onBlur={()=>setFieldTouched('availabilitytime')}
            value={values.availabilitytime}
            
            
           />
            {touched.availabilitytime && errors.availabilitytime &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.availabilitytime}</Text>
            }
           
          
            {/*Save Button  */}
        
          <View style={styles.button}>
           <Button  onPress={handleSubmit}
           title="Save"
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
   borderColor :'#9370DB',
   margin:12,
   padding:25,
   width:'99%',
   fontSize:22,
   borderWidth:2,
   

   },


   button:{
    backgroundColor: colors.primary,
    width: '45%',
    height: 35,
     margin:50,
   
   

   },
 
   

});
export default CompanyVendorProfile;