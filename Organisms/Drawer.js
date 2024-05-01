import * as React from 'react';
import { Button, View,Text,StyleSheet,Alert,StatusBar } from 'react-native';
import {  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavBar';
import { useSelector } from 'react-redux';
import client from '../api/client';
import Chat from './Chat';
import Settings from './Settings';
import { useTheme } from 'react-native-paper';
const customer_Screen=({ navigation })=> {
  return (
    <React.Fragment>
          <BottomNavBar/> 
    </React.Fragment>
  );
}

const ChatScreen=({ navigation })=> {
  return (
    <React.Fragment>
    <Chat/>
    </React.Fragment>
  );
}

const account_Setting=({ navigation })=> {
  return (
    <React.Fragment>
    <Settings/>
    </React.Fragment>
  );
}
const logout=(navigate)=>{
  navigate("Login")
}
const removeAccount=async (navigate,userId)=>{
  try {
    if(userId){
    const response = await client.delete(`/removeUser/${userId}`);
    if (response.data) {
      navigate("Login")
    } 
  }
  } catch (error) {
    setError(`request failed:${error.message}`);
  } 
 
}

function CustomDrawerContent_Customer(props) {
  const { user,navigate,colors } = props;
 const userName=user?user.username:null;
 const userId=user?user._id:null;
  return (
    <React.Fragment>
   <Text style={{...styles.Text,color:colors.textColor}}>{userName?userName:"Mehak Fatima"}</Text>
   <View  style={styles.line}></View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
   icon={ ({focused, size}) => (
  <MaterialCommunityIcons name="delete" color={colors.iconColor} size={26} />
)}
label="Remove Account"
labelStyle={{color:colors.textColor}}
onPress= {()=>Alert.alert(
              
  'Delete Account',
 
  'Do You Want to Delete Account' ,            
  [
    {text: 'Yes', onPress: ()=> removeAccount(navigate,userId)},
    {text: 'NO', onPress: () =>  console.log(),style: 'cancel'},
   
  ],
{ cancelable: false })}
/>
    </DrawerContentScrollView>
    
    <DrawerItem 
 icon={ ({focused, size}) => (
  <MaterialCommunityIcons name="logout" color={colors.iconColor} size={26} />
)}
label="Sign Out"
labelStyle={{color:colors.textColor}}
onPress= {()=>Alert.alert(
              
  'Logout Account',
 
  'Do You Want to Logout' ,            
  [
    {text: 'Yes', onPress: ()=> logout(navigate)},
    {text: 'NO', onPress: () =>  console.log(),style: 'cancel'},
   
  ],
{ cancelable: false })}
/>

    </React.Fragment>
  );
}

const Drawer = createDrawerNavigator();
const CustomDrawer=(props)=> {
  const navigation=useNavigation();
  const navigate=navigation.navigate;
  const {colors}=useTheme();
  const User = useSelector((state) => state.cart.user);
  let user = User && User.length > 0 ? User[0].data : null;
  return (
    <NavigationContainer independent={true} >
    <Drawer.Navigator 
     screenOptions={{
      drawerStyle: {
        backgroundColor: colors.cardColor,
        width: 250,
      },
      drawerLabelStyle:{
        color:colors.textColor,
      }
    }}
    
    drawerContent={(props) => CustomDrawerContent_Customer({...props,user,navigate,colors})}
    initialRouteName="Shop">
      
      <Drawer.Screen
       name="Shop" component={customer_Screen}
       options={{ drawerLabel: 'Shop' ,
       drawerIcon: ({focused, size,color}) => (
        <MaterialCommunityIcons name="home" color={colors.iconColor} size={26} />
      ),}}
      />
        <Drawer.Screen  name='Setting'
       component={account_Setting}
       options={{ drawerLabel: 'Setting' ,
       drawerIcon: ({focused, size,color}) => (
        <Ionicons  name="settings" color={colors.iconColor} size={26} />
      ),}} />

      <Drawer.Screen name="Live Chat"
       component={ChatScreen}
       options={{ drawerLabel: 'Live Chat' ,
       drawerIcon: ({focused, size,color}) => (
        <MaterialCommunityIcons name="chat" color={colors.iconColor} size={26} />
      ),}} />      
    </Drawer.Navigator>  
    </NavigationContainer>
  );
}
export default  CustomDrawer;
const styles = StyleSheet.create({
  Text:{
    marginTop:32,
    marginLeft:10,
     fontSize:18,
     fontWeight:'bold',
  },
  line:{

    borderWidth: 1,
    borderColor:'gray',
    margin:5,
    width:'100%',
    alignSelf:'center'
    

},
line1:{

  borderWidth: 1,
  borderColor:'gray',
  margin:5,
  width:'100%',
  alignSelf:'center'
  

},

});
