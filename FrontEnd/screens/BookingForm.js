import React from 'react'
import colors from '../components/colors';
import { ImageBackground,StatusBar, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import * as yup from 'yup';
import { Formik} from 'formik';
import COLORS from '../components/colors';
import * as SecureStore from 'expo-secure-store';
import HomeScreen from './HomeScreen';


function BookingForm({ route, navigation}) {


  const {hotel} = route.params
  console.log("hotel",hotel)
  const c_id = hotel._id
  
  function handleOrder(values){


    SecureStore.getItemAsync('token').then(token=>{

      console.log('create order',token)

      const value = {
        c_id,
        date: 10082022,
        event_type:values.event_type,
        no_of_guests: values.no_of_guests,
        available_budget: values.available_budget,
        venue: values.venue,
        required_services: values.required_services
      }
      console.log("value",value)
      
      fetch(`http://10.0.2.2:5000/users/createOrder`,{
                    method: "post",
                    body: JSON.stringify(value),
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        token
                    }
                  
              }).then(res=>res.json()).then(result=>{
                console.log(result)

                if(result.status == 'ok')
                     {
                      alert('order confirmed')
                      navigation.navigate(HomeScreen)
                      }

              }).catch(err=>console.log('catch',err.message))
    })    




      
 
  }

  return (
    <ScrollView style={{flex:1,backgroundColor:colors.white}}>
        <StatusBar barStyle="light-content"  translucent backgroundColor={COLORS.primary}   />
       <View style={styles.topView}>
        <ImageBackground
         style={styles.logo}
         source={require('../assets/logo2.png')}
         resizeMode="cover" >
       </ImageBackground>
      </View>
     <Text style={{color:colors.primary, fontSize:28,fontWeight:'bold',paddingLeft:'30%'}}>Booking Form</Text>
    

    {/* Form */}
    <Formik
     initialValues={{event_type:'', no_of_guests:'',available_budget:'',venue:'',required_services:'' }}
     onSubmit={values => {
      // console.log(values)
      handleOrder(values)

    }} 
     validationSchema={yup.object().shape({
             
            event_type : yup
            .string()
            .required('Event Type is required.'),  
           
            no_of_guests: yup
            .number()
            .required('Number of guests is required.'), 

            available_budget: yup
            .number()
            .required('Budget is required.'), 

            venue: yup
            .string(),

            required_services : yup
            .string(),
          })}
 >
    {({ handleChange, handleSubmit, values,errors,touched, setFieldTouched }) => (
       <View style={{ alignItems:"center",justifyContent:'center', flex: 1 }}>
       
            <TextInput
             style={styles.input}
             name="event_type"
             placeholder='Event Type'
             onChangeText={handleChange('event_type')}
             onBlur={()=>setFieldTouched('event_type')}
            value={values.event_type}
           
           /> 
            {touched.event_type && errors.event_type &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.event_type}</Text>
            }
              
          <TextInput
             style={styles.input}
             name="no_of_guests"
            placeholder="Number of Guests"
             onChangeText={handleChange('no_of_guests')}
             onBlur={()=>setFieldTouched('no_of_guests')}
            value={values.numberofguests}
            keyboardType="numeric"
            />
             {touched.no_of_guests && errors.no_of_guests &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.no_of_guests}</Text>
            }
            
            <TextInput
             style={styles.input}
             name="available_budget"
            placeholder="Available Budget"
             onChangeText={handleChange('available_budget')}
             onBlur={()=>setFieldTouched('available_budget')}
            value={values.available_budget}
            keyboardType="numeric"
            />
            {touched.available_budget && errors.available_budget &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.available_budget}</Text>
            }
            
              {/* Venue */}
          
            <View style={{borderWidth:3, padding:12, marginTop:20,marginBottom:10, borderRadius:20,borderColor:colors.primary}}>
            <Text  style={{color:colors.grey,fontSize:20}}>Venue (Optional)</Text>

            <TextInput
             style={styles.input}
             name="venue"
             placeholder='Indoor or Outdoor '
             onChangeText={handleChange('venue')}
             onBlur={()=>setFieldTouched('venue')}
            value={values.venue}
           
           />
           {touched.venue && errors.venue &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.venue}</Text>
            }

           <TextInput
             style={styles.input}
             name="required_services"
             placeholder='Services '
             onChangeText={handleChange('required_services')}
             onBlur={()=>setFieldTouched('required_services')}
             value={values.required_services}
           
           />
           {touched.required_services && errors.required_services &&
              <Text style={{ justifyContent:'center',alignContent:'center', fontSize: 18, color: 'red'}}>{errors.required_services}</Text>
            }


            </View>
      <View style={styles.button}>
       <Button onPress={handleSubmit} title="Submit" color={COLORS.primary} />
       </View>
      </View>
     )}
  </Formik>
  {/* In the end the expected total amount will be calcultaed according to required_services selected and will be displayed to user and data will be send to company via message or email */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  topView:{
  
    paddingTop:"2%",
    paddingLeft:"25%",
    width:410,
    height:170,
    
   },

 logo: {
  width: 200,
  height: 200,


},
   
   input:{
   borderBottomColor :colors.primary,
   borderBottomWidth:4,
   paddingTop:15,
   width:250,
   fontSize:18,

   },

   
   button:{
    backgroundColor:colors.primary,
    width: '50%',
     marginTop:15,
     
    

   },
   container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },

});

export default BookingForm