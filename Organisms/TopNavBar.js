import * as React from 'react';
import { Text, View ,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VegetableDisplay from '../Molecules/VegetablesDisplay';
import GroceryDisplay from '../Molecules/GroceryDisplay';
import HomeEquipment  from '../Molecules/EquipmentDisplay';
import { iconColor } from "../res/styles/color";
import { useTheme } from 'react-native-paper';
function Vegetables() {
  const {colors}=useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:colors.backgroundColor }}>
   <VegetableDisplay/>
  
    </View>
  );
}
function Grocery() {
  const {colors}=useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:colors.backgroundColor }}>
   <GroceryDisplay/>
    
    
    </View>
  );
}

function homeEquipment() {
  const {colors}=useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:colors.backgroundColor }}>
    <HomeEquipment/>
    </View>
  );
}


const Tab = createMaterialTopTabNavigator();

 const TopNavBar=(props)=> {
  
    return (
    
      <Tab.Navigator
      tabBarOptions={{
        
        indicatorStyle: {
          backgroundColor: iconColor, // Color of the tab indicator (the line beneath the active tab)
        },
      
      }}
        >
        <Tab.Screen name="Vegetables & Fruits" component={Vegetables} />
        <Tab.Screen name="Grocery" component={Grocery} />
        <Tab.Screen name="Home Equipment" component={homeEquipment} />
      
      </Tab.Navigator>
   
  );
  }
export default TopNavBar;