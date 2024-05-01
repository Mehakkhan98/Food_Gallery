import React from 'react';
import {Image,View,Text,StyleSheet,TouchableOpacity} from 'react-native' ;
import { headingColor } from "../res/styles/color";
export default function Logo(props) {
  return (
    
   <View style={styles.container}>
     <View style={{flexDirection:'row'}}>
     <Image
        source={require('../res/imgs/logo3.jpg')} 
        style={styles.logo}
      /> 
      <Text style={{fontSize:28,color:headingColor,marginTop:25,fontWeight:'bold',fontStyle:'italic'}}>  Food Gallery</Text> 
     </View>


   </View>
  );
}
const styles = StyleSheet.create({
    
  container:{
     right:10
  },
  logo:{
   height:80,
   width:80,
   borderRadius:40,
   borderColor:headingColor,
   borderWidth:1
  

  },

});



