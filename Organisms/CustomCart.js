// CartScreen.js
import React,{useState,useEffect} from 'react';
import { View, Text, FlatList, StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native';
import { iconColor } from "../res/styles/color";
import { useSelector, useDispatch } from 'react-redux';
import CustomModal from '../Atoms/CustomModal';
import { useTheme } from 'react-native-paper';
import { addItemQuantity } from '../store/reducers/cartReducer';
const CartScreen = ({ route }) => {
    const [bill, setBill] = useState(0);
    const {colors}=useTheme();
    const cart = useSelector((state) => state.cart.userCart)
    const dispatch = useDispatch();
   
    useEffect(() => {
    calculateTotalBill();
    }); 

  
   
      const calculateTotalBill = () => {
        let total = 0;
        cart.forEach((item, index) => {
          const amount = item.price * item.itemQuantity;
          total += amount;
        });
        setBill(total);
       
      };
    
        const renderItem = ({ item, index }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri:item.img.toString()}} style={styles.img} />
            <View style={{ marginLeft: 8, padding: 5 }}>
              <Text style={{...styles.textStyle,color:colors.textColor}}>{item.name}</Text>
              <Text style={{...styles.textStyle,color:colors.textColor}}>Price: $ {item.itemQuantity ?item.price*item.itemQuantity:item.price}</Text>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{...styles.textStyle,color:colors.textColor}}>Quantity:</Text>
                <TouchableOpacity style={styles.counter} onPress={() => dispatch(addItemQuantity(item={index:index, quantity:item.itemQuantity + 1}))}>
                  <Text style={styles.counterText}>+</Text>
                </TouchableOpacity>
                <Text style={{ ...styles.counterText, margin: 5 ,color:colors.textColor}}>{item.itemQuantity}</Text>
                <TouchableOpacity style={styles.counter} onPress={() => dispatch(addItemQuantity(item={index:index,quantity: Math.max(1, item.itemQuantity - 1)}))}>
                  <Text style={styles.counterText}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
  
  return (
    <View style={styles.container}>
      <Text style={{...styles.header,color:colors.textColor}}>Shopping Cart</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
    {cart.length?
    <>
    <FlatList
    data={cart}
    renderItem={renderItem}
    keyExtractor={(item) => item._id}/>
    <Text style={{...styles.totalBill,color:colors.textColor}}>Total Bill: $ {bill}</Text>
    <CustomModal
    totalBill={bill}
      /></>
    :
    <Text style={{...styles.totalBill,color:colors.textColor}}>Cart is empty</Text>}
   
      </ScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
   
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
    display:'flex',
    flexDirection:'row'
  },
  img:{
 height:100,
 width:100
  },
  counter:{
    height:30,
    width:30,
    borderRadius:15,
    backgroundColor:iconColor,
    justifyContent:"center",
    alignItems:'center',
    fontWeight:'bold'
  },
  counterText:{
    fontSize:16,
    fontWeight:'bold'
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

export default CartScreen;
