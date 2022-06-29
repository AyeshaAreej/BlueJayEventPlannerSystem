import { StyleSheet, Text, View,TextInput, ScrollView ,Button, StatusBar} from 'react-native'
import colors from '../../components/colors';
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';

const VendorProfile = () => {
  return (
    <ScrollView  style={{flex:1, backgroundColor:'#fff', }} >
   

      {/* Form Inputs View */}
   <View style={{marginTop:50}}>
          <Formik
      initialValues={{companyname:'', email: '', phone_no: '',city:'',services:'',pricerange:'',address:'',availabilitytime:'',}}
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
            phone_no: yup
            .number()
            .min(11, 'min 11 digits are required')
            // .max(11, 'max 11 digits are required')
            .required('Phone Number is required.'), 
            city : yup
             .string()
            .required('City is required.'),  
            services : yup
            .string(),
            pricerane: yup
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
             name="phone_no"
             placeholder='Phone Number'
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
    backgroundColor: 'purple',
    width: '45%',
    height: 35,
     margin:50,
   
   

   },
 
   

});
export default VendorProfile;