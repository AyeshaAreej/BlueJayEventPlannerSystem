import { View, Text } from 'react-native'
import React from 'react'
import CompanyHome from '../CompanyHome';
import CompanyVendorProfile from '../CompanyVendorProfile';
import CompanyVendorOrders from '../CompanyVendorOrders';
import Location from '../Location';
import Message from '../Message';
import HelpCentre from '../HelpCentre';
import PaymentMethod from '../PaymentMethod';
import Notifications from '../Notifications'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../../components/CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome'


const Drawer = createDrawerNavigator();


const CompanyStack = () => {
  return (
    <Drawer.Navigator 
    drawerContent={props=><CustomDrawer {...props} /> } 
    screenOptions={{
      drawerActiveBackgroundColor:'purple',
      drawerActiveTintColor:'white',
      drawerInactiveTintColor:'#333'
    }}
    useLegacyImplementation>
          <Drawer.Screen name='Home' component={CompanyHome} 
            options={{
              drawerIcon:({focused,size})=>(
                <Icon
                name='home'
                size={size}
                color={focused? 'white' : 'purple'}
                />
              ),
            }}
            
          />
          <Drawer.Screen name=' Profile' component={CompanyVendorProfile}
              options={{
                drawerIcon:({focused,size})=>(
                  <Icon
                  name='user'
                  size={size}
                  color={focused? 'white' : 'purple'}
                  />
                ),
              }}
          />
          <Drawer.Screen name='My Orders' component={CompanyVendorOrders} 
              options={{
                drawerIcon:({focused,size})=>(
                  <Icon
                  name='shopping-cart'
                  size={size}
                  color={focused? 'white' : 'purple'}
                  />
                ),
              }}
          /> 
          <Drawer.Screen name='Notifications' component={Notifications} 
                  options={{
                    drawerIcon:({focused,size})=>(
                      <Icon
                      name='bell'
                      size={size}
                      color={focused? 'white' : 'purple'}
                      />
                    ),
                  }}
                  />
          <Drawer.Screen name='   Location' component={Location} 
              options={{
                drawerIcon:({focused,size})=>(
                  <Icon
                  name='map-marker'
                  size={size}
                  color={focused? 'white' : 'purple'}
                  />
                ),
              }}
          />
          <Drawer.Screen name=' Message' component={Message}
                options={{
                  drawerIcon:({focused,size})=>(
                    <Icon
                    name='comment'
                    size={size}
                    color={focused? 'white' : 'purple'}
                    />
                  ),
                }}
          />
          <Drawer.Screen name='Payment' component={PaymentMethod} 
                  options={{
                    drawerIcon:({focused,size})=>(
                      <Icon
                      name='cc-visa'
                      size={size}
                      color={focused? 'white' : 'purple'}
                      />
                    ),
                  }}
          />
          <Drawer.Screen name='  Help Centre' component={HelpCentre}
                  options={{
                    drawerIcon:({focused,size})=>(
                      <Icon
                      name='question-circle'
                      size={size}
                      color={focused? 'white' : 'purple'}
                      />
                    ),
                  }}
           />
    </Drawer.Navigator>
  )
}



export default CompanyStack