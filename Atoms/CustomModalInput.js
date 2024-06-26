import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
// import { Entypo } from 'react-native-vector-icons'; 
import { StyleSheet, Text, View,TextInput ,Platform} from 'react-native';
// import { Feather } from 'react-native-vector-icons'; 
import Icon from 'react-native-vector-icons/Entypo';
import { useTheme } from 'react-native-paper';

const ComposedInput=(props)=> {
  const {colors}=useTheme();
  const [eye, seteye] = useState(false);
  const checkeye=()=>{
if(eye===false)
{
  seteye(true)
}
else{
  seteye(false)
}
  }
  return (
   <View>
      <View style={{...styles.inputContainer, borderBottomColor:props.error==""?colors.inputColor:"red",}}>
       
         <Icon name={props.name} size={32}  color={colors.iconColor}/> 
           
      
        <TextInput
        placeholder={props.data} 
        onChangeText={props.onChangeText}
        secureTextEntry={props.isPassword}
        multiline
      placeholderTextColor={colors.inputColor}
        style={{...styles.input,color:colors.inputColor}} />
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    height:70,
    width:Platform.OS==='ios'?300:300,
    alignSelf:'center',
    marginVertical:10,
     borderBottomWidth:1,
     borderRadius:5,
     flexDirection:'row',
     padding:10
    },
    input:{
      marginLeft:10,
      fontSize:14,
      width:Platform.OS==='ios'?230:230
    }
  
});
export default ComposedInput;

