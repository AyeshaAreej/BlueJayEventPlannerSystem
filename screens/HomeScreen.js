import React from 'react';
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Animated,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-web';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from '../components/colors';
import hotels from '../components/companies';

const {width}= Dimensions.get('screen');
const cardWidth=width/1.8;

const HomeScreen=()=>{
   const categories = ['All', 'Popular', 'Top Rated', 'Low Price', 'High Price'];
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const [activeCardIndex, setActiveCardIndex] = React.useState(0);
    const scrollX=React.useRef(new Animated.Value(0)).current;
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
 
     const CategoryList=()=> {
          return (
        <View style={style.categoryListContainer}>
          {categories.map((item, index) => (
              <View>
           <Text
            onPress={()=> setSelectedCategoryIndex(index)}
           key={index}
            style={{...style.categoryListText ,
           color: selectedCategoryIndex == index
                      ? COLORS.primary
                      : COLORS.grey,
                
           }}>
           {item} </Text>
           {setActiveCardIndex==index && (
           <View  style={{
                    height: 6,
                    width: 30,
                    backgroundColor: COLORS.primary,
                    marginTop: 2,
                  }}/>  
           )}
          
           </View>
        
          ))}
        </View>
      );
    };
// Card

const Card=({hotel,index})=>{
return(
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
              <Text style={{fontSize:10} }>300 Views</Text>
          </View>
         </View>        
    </View>
)
};

const TopHotelCard = ({hotel}) => {
  return (
    <View style={style.topHotelCard}>
    <View  style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }} >
    <Icon name="star" size={15} color={COLORS.orange} />
          <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 15}}>
            5.0
          </Text>
    </View>
   <Image style={style.topHotelCardImage} source={hotel.image}/>
    <View style={{paddingVertical:5, paddingHorizontal:10}}> 
     <Text style={{fontSize: 10, fontWeight: 'bold'}}t> {hotel.name}</Text>
     <Text style={{fontSize: 9, fontWeight: 'bold', color: COLORS.grey}}>
            {hotel.location}
          </Text>
    </View>
    </View>
  );
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
            <Icon name="account-outline"  size={38} color={COLORS.grey}/>
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
        //  card animation remaining
          // onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}},], {useNativeDriver:true}, )}
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

           <View style={{flexDirection:"row",justifyContent:"space-between", marginHorizontal:20}}>
            <Text style={{fontWeight:"bold", color:COLORS.grey}}t>Top Companies</Text>
            <Text style={{fontWeight:"bold", color:COLORS.grey}}t>Show all</Text>
           </View>
           <FlatList 
            data={hotels}
            horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingLeft:20, marginBottom:30,marginTop:20}}
             renderItem={({item})=><TopHotelCard hotel={item}/>}
           />
        </ScrollView>
     </SafeAreaView>
   
 )
}

const style = StyleSheet.create({
    header: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 18,
      paddingTop:24,
    },
    searchInputContainer: {
      height: 50,
      backgroundColor: COLORS.light,
    //   marginTop: 15,
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
      width: cardWidth,
      elevation: 15,
      marginRight: 20,
      borderRadius: 15,
      backgroundColor: COLORS.white,
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
      width: cardWidth,
      borderRadius: 15,
    },
    topHotelCard: {
      height: 130,
      width: 120,
      backgroundColor: COLORS.white,
      elevation: 15,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    topHotelCardImage: {
      height: 80,
      width: '100%',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
  });

export default HomeScreen;