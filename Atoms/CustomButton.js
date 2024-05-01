import React from 'react';
import {View, TouchableOpacity,Text, StyleSheet} from 'react-native';
import Loader from './CustomLoader';
import { useTheme } from 'react-native-paper';
const ComposedButton = (props) => {
  const { colors } = useTheme();
  return (
    <View>
     <View>
       <TouchableOpacity onPress={()=>{props.method()}}
       style={{...styles.button,backgroundColor:colors.buttonColor}}>
        {props.isload?<Loader/>:<Text style={{
           color:'#FFFFFF',
          fontSize:20,marginTop:15,fontWeight:'bold'}}>{props.title}</Text> } 
          </TouchableOpacity>
      
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    height:60,
    width:Platform.OS==="ios"?350:350,
    alignSelf:'center',
     fontSize:20,
     alignItems:'center',
   marginVertical:5,
    borderRadius:5
  },
  

});

export default ComposedButton;