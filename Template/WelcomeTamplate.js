import React from 'react';
import {View, Image, StyleSheet,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MuiButton from '../Atoms/CustomButton';
import ComposedText from '../Atoms/CustomText';
import Logo from '../Atoms/CustomLogo';
import { useTheme } from 'react-native-paper';
const Welcome = () => {
  const navigation = useNavigation();
  const {colors}=useTheme();
  const lets_Start=()=>{
    navigation.navigate('Login')
  }
  return (
    <View style={{...styles.container,backgroundColor:colors.backgroundColor}}>
        <Image
        source={require('../res/imgs/shop.jpg')} 
        style={{ height:Platform.OS==="ios"?300:400,width:400,alignSelf:'center',resizeMode:'cover'
      }}
      /> 
      <View style={{marginVertical:30,flexDirection:'row',alignSelf:'center'}}>
       
      <Logo/>
        </View>
        <View  style={styles.line}></View>
      <ComposedText title="Each online store has its own Store and Bags,"/>
      <ComposedText  title="But if you want to go shopping in multiple"/>
      <ComposedText  title="places at once,so you have only one bag"/>
      <View style={{position:'absolute',bottom:0,alignSelf:'center'}}>
      <MuiButton title="Let's Start" method={lets_Start}/>
      </View>
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#FFFFFF',
  },
  line:{

    borderWidth: 1,
    borderColor:'green',
    margin:5,
    width:60,
    alignSelf:'center'
    

},
heading:{
color:'gray',
fontSize:24,
marginVertical:2,
alignSelf:'center',
marginHorizontal:10

},
heading1:{
  color:'green',
  fontSize:24,
  fontWeight:'bold',
  marginVertical:2,
  alignSelf:'center',
  fontStyle:'italic'

}
});

export default Welcome;