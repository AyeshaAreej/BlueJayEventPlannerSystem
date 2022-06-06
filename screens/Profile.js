import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <ScrollView>
       
       <View style={styles.container}>
      <Text>Profile</Text>
      </View>
      <View>
      <Text>Profile</Text>
      </View>
      <View>
      <Text>Profile</Text>
      </View>
      <View>
      <Text>Profile</Text>
      </View>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
container:{
  width:400,
  borderWidth:4,
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},

})