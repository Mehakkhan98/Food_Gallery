import { createSlice } from '@reduxjs/toolkit'
import { darkTheme, lightTheme } from '../../res/styles/Theme';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    userCart: [],
    user:[],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const itemExists = state.userCart.some(item => item._id === newItem._id);
    if(!itemExists){
      state.userCart = [...state.userCart, newItem];
    }
    },

    addItemQuantity: (state, action) => {
      const newItem = action.payload;
      console.log("ttttttttt",newItem.index,newItem.quantity)
      const updatedUserCart = state.userCart.map((item, index) => {
        if (index === newItem.index) {
          return {
            ...item,
            itemQuantity: newItem.quantity 
          };
        }
        return item;
      });
    
      return {
        ...state,
        userCart: updatedUserCart
      };
    },
    
    removeItemFromCart:(state,action)=>{
      const newItem = action.payload;
      console.log("gggggggggg",cart)
      state.userCart = state.userCart.filter(item => item._id !== newItem._id);
    },
    addUserData: (state, action) => {
      const newItem = action.payload;
      state.user = [newItem];
    },
    removeCart:(state,action)=>{
      state.userCart = [];
    },
  
  },
});
   
  
export const { addItemToCart,addUserData,removeCart,addItemQuantity } = cartSlice.actions

export default cartSlice.reducer