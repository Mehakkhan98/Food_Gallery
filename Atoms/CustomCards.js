import  React,{useState} from 'react';
import {Card,  Paragraph } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { StyleSheet, View, Text ,TouchableOpacity,Image} from 'react-native';
import Badge from './CustomBadge';
import { addItemToCart } from '../store/reducers/cartReducer';
import {useDispatch } from 'react-redux';
import Toast from './CustomToast';
import { useTheme } from 'react-native-paper';
// import Logo from '../Atoms/CustomLogo';

const LeftContent = props => <Image
source={require('../res/imgs/logo3.jpg')} 
style={{  height:50,
  width:50,
  borderRadius:25,}}
 />


const CustomCard = (props) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const {colors}=useTheme();
 return( <Card elevation={2} theme={{ mode: 'outlined' }} style={{backgroundColor:colors.cardColor}}>
    {props.discount?<View style={{right:0,position:'absolute'}}><Badge count={props.discount+"% off"} /></View>:null}
    <Card.Title 
     title={props.title} 
     subtitle={props.subtitle}
      left={LeftContent}
      subtitleStyle={{color:colors.textColor}}
      titleStyle={{...props.titlestyle,color:colors.textColor}} />
   
    <Card.Content>

<Paragraph style={{...props.paragraph,color:colors.textColor}}>{props.content} </Paragraph>

    </Card.Content>
    
    <Card.Cover source={{ uri: props.src.toString()}} alt="img" style={props.cardCoverStyle}/>

   
   
    <Card.Actions>
      <Text style={{left:1,position:'absolute',color:colors.textColor}}>$ {props.price}</Text>
    <TouchableOpacity style={{marginHorizontal:10}} onPress={()=>{dispatch(addItemToCart(props.data)),setShow(true)}}>  
            <Entypo name="shopping-cart" size={26}  color={colors.iconColor}  /> 
        </TouchableOpacity>
      
    </Card.Actions>
    {show?<Toast/>:null}
  </Card>
);
 }

export default CustomCard;
const styles = StyleSheet.create({
  card: {
    elevation: 0,
  },
});