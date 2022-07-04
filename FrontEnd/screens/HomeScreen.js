import React,{useState,useEffect} from 'react';
import {Dimensions,FlatList,SafeAreaView, ScrollView, StyleSheet, Text,View,   Image,Animated,Button,TouchableOpacity,StatusBar} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePicker from '@react-native-community/datetimepicker';
import COLORS from '../components/colors';
import hotels from '../components/companies';
import { useNavigation } from '@react-navigation/native';
import colors from '../components/colors';
import * as SecureStore from 'expo-secure-store';
import {PORT} from"@env"

const {width}= Dimensions.get('screen');
const tcardWidth=width/1.8;
const bcardWidth=width/1.1;
const HomeScreen=()=>{


  useEffect(()=>{
    //   SecureStore.getItemAsync('token').then(token=>{

    //   console.log('all companies',token)

    //   const values = {city : 'quetta'}
      
    //   fetch(`http://10.0.2.2:${PORT}/users/allCompanies`,{
    //                 method: "post",
    //                 body: JSON.stringify(values),
    //                 headers: {
    //                     Accept: "application/json, text/plain, */*",
    //                     "Content-Type": "application/json",
    //                     token
    //                 }   
                  
    //           }).then(res=>res.json()).then(result=>{
    //             console.log(result)

    //             if(result.data == '')
    //                   {
    //                     console.log('No companies found')
    //                   }

    //           }).catch(err=>console.log('catch',err.message))
    // })

    SecureStore.getItemAsync('token').then(token=>{

      console.log('all companies',token)

      const values = {city : 'quetta'}
      
      fetch(`http://10.0.2.2:${PORT}/users/allCompanies`,{
                    method: "post",
                    body: JSON.stringify(values),
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        token
                    }   
                  
              }).then(res=>res.json()).then(result=>{
                console.log(result)

                if(result.data == '')
                      {
                        console.log('No companies found')
                      }

              }).catch(err=>console.log('catch',err.message))
    })


    

   

    


   },[]);

   const categories = ['All', 'Popular', 'Low Price', 'High Price'];
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    //Date
   const [date, setDate] = useState(new Date());
   const [isPickerShow, setIsPickerShow] = useState(false);

  //  console.log(date);
   const showPicker = () => {
    setIsPickerShow(true);
  };
   const onChange = (event, value) => {
    setDate(value);
    
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };


    
    const CategoryList = () => {
      return (
        <View style={style.categoryListContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setSelectedCategoryIndex(index)}>
              <View>
                <Text
                  style={{
                    ...style.categoryListText,
                    color:
                      selectedCategoryIndex == index
                        ? COLORS.primary
                        : COLORS.grey,
                  }}>
                  {item}
                </Text>
                {selectedCategoryIndex == index && (
                  <View
                    style={{
                      height: 3,
                      width: 30,
                      backgroundColor: COLORS.primary,
                      marginTop: 2,
                    }}
                  />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    };
// Card

const Card=({hotel,index})=>{

  const navigation = useNavigation();

  function handleClick(){
    console.log("Card clicked")
    navigation.navigate('CompanyDetails')
  }
  
return(
   
  <TouchableOpacity onPress={handleClick}>
    <View style={{...style.card}}>
      <View style={{...style.cardOverLay, opacity:0}}/>
    <View style={style.priceTag}>
    <Text style={{color:COLORS.white, fontSize:15,fontWeight:'bold'}}>
        ${hotel.price}
    </Text>
     </View>
         <Image source={hotel.image} style={style.cardImage} />
         <View style={style.cardDetails}>
          <View style={{flexDirection:"row", justifyContent:'space-between'}}>
           <View>
               <Text style={{fontWeight:"bold",fontSize:17}}>{hotel.name}</Text>
                <Text style={{color:COLORS.grey,fontSize:12}}>{hotel.location}</Text> 
            </View>
             <Icon name="bookmark-outline" size={30}/>
          </View>
          <View  style={{flexDirection:"row", marginTop:10, justifyContent:'space-between'}}>
             <View  style={{flexDirection:"row"}}>
                 <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.gray}/>
              </View>
             
          </View>
         </View>        
    </View>
  </TouchableOpacity>

)
};

// Bottom Card

const BottomCard=({hotel,index})=>{

  const navigation = useNavigation();

  function handleClick(){
    console.log("Card clicked")
    navigation.navigate('CompanyDetails')
  }
return(
   
  <TouchableOpacity onPress={handleClick}>
    <View style={{...style.bottomCard}}>
      <View style={{...style.cardOverLay, opacity:0}}/>
    <View style={style.priceTag}>
    <Text style={{color:COLORS.white, fontSize:15,fontWeight:'bold'}}>
        ${hotel.price}
    </Text>
     </View>
         <Image source={hotel.image} style={style.cardImage} />
         <View style={style.cardDetails}>
          <View style={{flexDirection:"row", justifyContent:'space-between'}}>
           <View>
               <Text style={{fontWeight:"bold",fontSize:17}}>{hotel.name}</Text>
                <Text style={{color:COLORS.grey,fontSize:12}}>{hotel.location}</Text> 
            </View>
             <Icon name="bookmark-outline" size={30}/>
          </View>
          <View  style={{flexDirection:"row", marginTop:10, justifyContent:'space-between'}}>
             <View  style={{flexDirection:"row"}}>
                 <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.orange}/>
                 <Icon name="star" size={15} color={COLORS.gray}/>
              </View>
             

          </View>
         </View>        
    </View>
  </TouchableOpacity>

)
};

    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
        <View style={style.header}>
            <View style={{paddingBottom:15}}>
             <Text style={{fontSize:25, fontWeight:'bold'}}>
               Search a Company </Text> 
               <View style={{flexDirection:'row'}}>
                   <Text style={{fontSize:25, fontWeight:'bold'}} >in  </Text>
                   <Text style={{fontSize:25, fontWeight:'bold', color: COLORS.primary}} >your City </Text>
               </View>
            </View>
         
         {/* The button that used to trigger the date picker */}
      {/* {!isPickerShow && ( */}
        <View style={style.btnContainer}>
        <Icon name="calendar"  size={38} color={COLORS.primary} onPress={showPicker}/>
        </View>
      {/* )} */}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          // is24Hour={true}
          onChange={onChange}
          style={style.datePicker}
        />
      )}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
         <View style={style.searchInputContainer}>
        
         <Searchbar 
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
         </View>
         <CategoryList/>
         <View>
         <Animated.FlatList
          data={hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 20,
            
          }}
          renderItem={({item}) => <Card hotel={item} />}
        />
        </View>

           {/* Bottom View */}

           <View style={{flexDirection:"row",justifyContent:"space-between", }}>
            <Text style={{fontWeight:"bold", color:COLORS.grey}}>Available Companies</Text>
          
           </View>
           <FlatList 
            data={hotels}
            showsVerticalScrollIndicator={true} contentContainerStyle={{justifyContent:'center',alignItems:'center',}}
             renderItem={({item})=><BottomCard hotel={item}/>}
           />
        </ScrollView>
     </SafeAreaView>
   
 )
}

const style = StyleSheet.create({
    header: {
      marginTop: 3,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 18,
      paddingTop:24,
    },
    searchInputContainer: {
      height: 50,
      backgroundColor: COLORS.light,
      margin:20,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      width:'80%',
    },
    categoryListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginTop: 30,
    },
    categoryListText: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    card: {
      height: 250,
      width: tcardWidth,
      elevation: 15,
      marginRight: 20,
      borderRadius: 15,
      backgroundColor: COLORS.white,
      flexDirection:'column',
    },
    cardImage: {
      height: 180,
      width: '100%',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    priceTag: {
      height: 60,
      width: 80,
      backgroundColor: COLORS.primary,
      position: 'absolute',
      zIndex: 1,
      right: 0,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardDetails: {
      height: 100,
      borderRadius: 15,
      backgroundColor: COLORS.white,
      position: 'absolute',
      bottom: 0,
      padding: 20,
      width: '100%',
    },
    cardOverLay: {
      height: 250,
      backgroundColor: COLORS.white,
      position: 'absolute',
      zIndex: 100,
      width: tcardWidth,
      borderRadius: 15,
    },
    bottomCard: {
      height: 250,
      width: bcardWidth,
      elevation: 15,
      marginBottom: 20,
      borderRadius: 15,
      backgroundColor: COLORS.white,
      flexDirection:'column',
    },
    
    pickedDateContainer: {
      padding: 12,
    },
    pickedDate: {
      fontSize: 20,
      color: colors.grey,
      fontWeight:'bold'
    },
    btnContainer: {
      paddingTop: 12,
     
    },
  });

export default HomeScreen;



