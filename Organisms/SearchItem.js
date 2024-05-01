import React, { useState,useEffect } from 'react';
import { View, TextInput, Text,  StyleSheet ,ScrollView,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { iconColor } from "../res/styles/color";
import client from '../api/client';
import Card from '../Atoms/CustomCards';
import Loader from '../Atoms/CustomLoader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
const SearchScreen = ({ onSearch }) => {
  const {colors}=useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('vegetable');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [item, setItem] = useState(null);

 
  const handleSearch = async() => {
      if(selectedOption==="vegetable")
      {
        
        try {
            setLoading(true);
            const response = await client.get(`/product/search/${searchQuery}`);
            console.log("response :",response.data)
            setItem(response.data);
            setLoading(false);
            setError(""); 
          } catch (error) {
            console.log("error",error.message)
            {error.message==="Request failed with status code 404"?setError("Item not available"):setError(error)};
            setLoading(false);
          } 
     
      }
     
  };

  return (
   <>
      <View style={{...styles.container}}>
      <TextInput
        style={{...styles.input,color:colors.inputColor}}
        placeholder="Select category and search item:"
        placeholderTextColor={colors.inputColor}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <TouchableOpacity onPress={handleSearch}>
         <AntDesign name="search1" size={32}  color={iconColor} />
     </TouchableOpacity>
       
      
     </View>
    {item&& !error?
    <ScrollView showsVerticalScrollIndicator={false}>
    {item.map((data,index)=>(
   
    <View style={{width:330,alignSelf:"center",marginTop:10,marginBottom:10}}>
     <Card title={data.type} content={data.name +"  "+data.quan} subtitle="Fresh" 
      titlestyle={{fontSize:12,fontWeight:'bold'}} 
      paragraph={{fontSize:14,color:'gray'}}
      cardCoverStyle={{ width: '100%', aspectRatio: 13 / 8, alignSelf:'center'}}
      price={data.price} 
      src={data.img}
      data={data}
      discount={data.discount?data.discount:null}
      />
      </View>
      ))}
      </ScrollView>
      :error?<Text style={styles.errorText}>{error}</Text>:null}
      {loading?<Loader/>:null}
      
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    borderBottomColor: 'gray',
    borderBottomWidth:1,
    paddingTop:10,
    marginBottom:10

  },
  input: {
    height: 40,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 8,
    width: '85%',
    marginLeft:8
    
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
   
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginHorizontal: 3,
    fontWeight: '500',
  },
});

export default SearchScreen;
