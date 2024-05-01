import * as React from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TopNavBar from './TopNavBar';
import { iconColor,buttonColor } from "../res/styles/color";
import  SearchBar  from './SearchItem';
import CustomCart from './CustomCart';
import { useTheme } from 'react-native-paper';
const HomeScreen=()=> {
  const {colors}=useTheme();
  return (
    <View  style={{ flex: 1,backgroundColor:colors.backgroundColor }}>
     <TopNavBar/> 
   </View>
  );
}


const Search=()=> {
  const {colors}=useTheme();
  return (
    <View  style={{ flex: 1,backgroundColor:colors.backgroundColor }}>
    <SearchBar/>
    </View>
  );
}

const My_CART=()=> {
  const {colors}=useTheme();
  return (
    <View  style={{ flex: 1,backgroundColor:colors.backgroundColor }}>
    <CustomCart/>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavBar(props) {
  const {colors}=useTheme();
  
  return (
      <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.backgroundColor}
      inactiveColor="#FFFF"
      barStyle={{ backgroundColor: colors.buttonColor }}
      tabStyle={{backgroundColor:colors.buttonColor}}
      >
        <Tab.Screen
         name="Shop"
          component={HomeScreen}
         
          options={{
            animationEnabled: true,
            swipeEnabled: true,
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              tabStyle: {
                  backgroundColor: '#614971'
              }
          }
          }} 
        />
   
       
        <Tab.Screen
         name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="search1" size={26}  color={color}/>
            
            ),
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              tabStyle: {
                  backgroundColor: '#614971'
              }
          }}} />
           <Tab.Screen 
        name="My Cart"
         component={My_CART} 
         options={{
          tabBarLabel: 'My Cart',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={26}  color={color}
            />
          ), tabBarOptions: {
            showIcon: true,
            showLabel: false,
            tabStyle: {
                backgroundColor: '#614971'
            }
        }
         
         
        }}
         />
      
      </Tab.Navigator>
  
  );
};
