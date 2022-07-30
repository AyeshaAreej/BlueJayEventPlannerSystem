import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView,Button } from 'react-native';
import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../components/colors';

export default function Location() {
 const [city,setCity]=useState('')
 const [edit,setEdit]=useState(false)

 
  return (
    <ScrollView  style={{flex:1, backgroundColor:'#fff', }} contentContainerStyle={{justifyContent:'center',
    alignItems:'center'}} >
   

      {/* Form Inputs View */}
   <View style={{marginTop:50}}>
          <Formik
      initialValues={{city:'',}}
      onSubmit={
        (values) => {
        console.log(values.city)}}
          validationSchema={yup.object().shape({
           city : yup
             .string()
            .required('City is required.'), 
               
          })}

    
    >
      {({ handleChange, handleSubmit, values,errors,touched, setFieldTouched }) => (
        <View >
      
            <View style={styles.inputContainer} >
          <MaterialCommunityIcons name="city"  size={38} style={styles.icon}/>
            <TextInput
             editable={edit}
             style={styles.input}
             name="city"
             placeholder="Enter City"
             onChangeText={handleChange('city')}
             onBlur={()=>{
              setFieldTouched('city')
              }}
             value={values.city}
           /></View>
           {touched.city && errors.city &&
              <Text style={{ justifyContent:'center',alignContent:'center',fontSize: 18,marginLeft:130, color: 'red' }}>{errors.city}</Text>
            }

                      
                
            {/*Save Button  */}
        
          <View style={styles.button}>
           <Button  onPress={()=>{
              handleSubmit
              setEdit(true)
              }}
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
    width: '45%',
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