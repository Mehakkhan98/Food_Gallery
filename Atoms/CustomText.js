import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { textColor } from "../res/styles/color";
import { useTheme } from 'react-native-paper';
const ComposedText = (props) => {
  const {colors}=useTheme();
  return (
    <View>
    <Text style={{...styles.text,color:colors.textColor}}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    
      text:{
        fontSize:15,
        marginVertical:2,
        alignSelf:'center'
  
      },

});

export default ComposedText;