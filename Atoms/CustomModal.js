import React, { useState, useRef, useEffect } from "react";
import { Modal, View, Text,StyleSheet } from "react-native";
import CustomButton from './CustomModelButton';
import Button from './CustomButton';
import CustomInput from './CustomModalInput';
import client from '../api/client';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from "../store/reducers/cartReducer";
import { useTheme } from "react-native-paper";
const CustomModal = (props) => {
  const dispatch = useDispatch();
  const {colors}=useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const User = useSelector((state) => state.cart.user);
  const cart = useSelector((state) => state.cart.userCart)
  const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');

  const data=User[0].data;
 
  const checkOut= async()=>{
    try {
    
      let productArray = [];
     
      productArray = productArray.concat(cart.map((data, index) => {
    return {
        "product": data._id,
        "quantity": data.itemQuantity,
        "price": data.price,
    }
     }));
    
       response= await client.post('/order/createOrder', {
          customer:User[0].data._id,
          products: productArray,
          status:"Pending"
        });
        if(response.data){
        
    //    response= await client.post('/mail/send-mailgun',
    //   {"toEmail":data?data.email:null,
    // "fromEmail":"codes.orbit@gmail.com"})
    //   if(response.data){
        dispatch(removeCart());
        setModalVisible(false)
      // }
      //  else{
      //   setModalVisible(false)
      //  }
        }
    }
    catch(error){
      console.log("Error sending data:",error)
    }
      
    
    
  }
  return (
  
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.mainContainer}>
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, width: 300 ,backgroundColor:colors.modalColor}}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Shipping Address</Text>
            <View>
    <CustomInput 
     data={data?data.username:"User Name"}
     name="user"
     error={error}
     onChangeText={(e)=>{setUser(e),setError("")}}
     />
     <CustomInput 
     data={data?data.contact:"Contact"}
     name="phone" 
     error={error}
     onChangeText={(e)=>{setPhone(e),setError("")}}
     />
     <CustomInput  
     data={data?data.address:"Address"}
     name="home" 
     error={error}
     onChangeText={(e)=>{setAddress(e),setError("")}}
     />
     </View>
     <Text style={{...styles.totalBill,color:colors.textColor}}>Total Bill: ${props.totalBill}</Text>
     <Text style={{color:colors.textColor}}>Here is your shipping information please Confirm it. </Text>

     <CustomButton 
        title="Confirm"
         method={checkOut} /> 

          </View>
        </View>
      </Modal>
      
       { cart.length?
       <Button 
        title="CheckOut"
         method={() => setModalVisible(true)} />:null }
     
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1, 
    justifyContent: "center",
     alignItems: "center",
     backgroundColor: 'rgba(255, 255, 255, 0.8)', /* Fallback color for browsers that do not support backdrop-filter */
     backdropFilter: 'blur(10px)'
  },
  textStyle:{
    fontSize:14,
    padding:5,
    fontWeight:'bold'
  },
  totalBill:{
    fontSize:16,
    padding:5,
    fontWeight:'bold'
  }
});


export default CustomModal;
