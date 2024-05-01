import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';


export default function Touchable(props) {
  
   
  return (
   <View>
      
          <TouchableOpacity onPress={()=>props.Move()}
        style={props.customStyle} >
         <Text style={props.style}>{props.title}</Text> 
          </TouchableOpacity>
     
    
   

    

    </View>
  );
}


