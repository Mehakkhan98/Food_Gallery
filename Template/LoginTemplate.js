import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {View, Image, StyleSheet,Text,StatusBar,TouchableOpacity} from 'react-native';
import Form from '../Molecules/CustomLoginForm';
import Logo from '../Atoms/CustomLogo';
import TouchableText from '../Atoms/CustomTouchable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import { useTheme } from 'react-native-paper';


 
 
function login_as_user() {
  const navigation = useNavigation();
  const {colors}=useTheme();
    return (
      <View style={{...styles.container,backgroundColor:colors.backgroundColor}}>
          <Logo/>
          <Form title="LOGIN" />
        
            <TouchableOpacity
            onPress={()=>(navigation.navigate("Home"))}
                 style={{color:'gray',marginVertical:5,flexDirection:'row'}}>
                 <Text style={{fontSize:15,color:colors.textColor}}>Forget Password </Text>
                 <Icon name="surprise" size={18} color={colors.iconColor}/>
               </TouchableOpacity>
               
                 
                  <TouchableOpacity  onPress={()=>(navigation.navigate("Registration"))} style={{position:'absolute',bottom:15,flexDirection:'row',color:'gray'}}>
                    <Text style={{fontSize:18,color:colors.textColor}}>Don't have an account yet </Text>
                    <Icon name="surprise" size={24} color={colors.iconColor} />
                  </TouchableOpacity>
            </View> 
          
      
    );
  }
  
  
   
export default login_as_user;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:'#ffff',
      fontSize:24,
      fontWeight:'bold'
    }
  });
  