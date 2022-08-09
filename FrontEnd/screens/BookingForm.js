import React from 'react'
import colors from '../components/colors';
import { ImageBackground,StatusBar, Button, TextInput, Platform,ScrollView, StyleSheet, View, Image, Text } from "react-native";
import * as yup from 'yup';
import { Formik} from 'formik';
import COLORS from '../components/colors';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';

function BookingForm({ route}) {


  
  const [bool, setBool] = React.useState(false);
  const navigation = useNavigation();

  const company = route.params.company
  const myDate = route.params.myDate
  //console.log("company",company)
  console.log("myDate",myDate)


  const c_id = company._id
  
  function handleOrder(values){


    SecureStore.getItemAsync('token').then(token=>{

      console.log('create order',token)

      const value = {
        c_id,
        date: myDate,
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
                      navigation.navigate("UserStack")
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
    


     <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20, fontWeight:'bold',paddingTop:15,paddingLeft:95}}> Selected Date :</Text>
                <Text style={{fontSize:20, fontWeight:'bold',paddingTop:15,color: COLORS.primary}}> {myDate}</Text>
      
    </View>


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
       
       <View style={{borderWidth:3, padding:12, marginTop:20,marginBottom:10, borderRadius:20,borderColor:colors.primary}}>
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
          
           
            {/* <Text  style={{color:colors.black,fontWeight: 'bold',fontSize:20}}>Venue </Text> */}

            <TextInput
             style={styles.input}
             name="venue"
             placeholder='Venue (Indoor or Outdoor) '
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

  borderColor :COLORS.white,
  margin:7,
  padding:12,
  width:280,
  fontSize:20,
  borderWidth:2,
  elevation:20,
  borderRadius:15,
  backgroundColor:'white'
   },

   
   button:{
    backgroundColor:colors.primary,
    width: '40%',
     marginTop:20,
     

     
    

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