import React,{useState,useEffect} from 'react';
import { TouchableOpacity ,ScrollView,Image, Alert} from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import Card from '../Atoms/CustomCards';
import client from '../api/client';
import Loader from '../Atoms/CustomLoader';


export default function SuperGridExample() {
  const [items, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
   
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await client.get('/product/get/fruitandvegetables');
        setItem(response.data);
      } catch (error) {
        setError(error);
        console.log("Error",error)
      } 
    };
    
    fetchData();
    
  }, []);
 

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {items?<FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (
        <View>
           
           <Card title={item.type} content={item.name +"  "+item.quan} subtitle="Fresh" 
           titlestyle={{fontSize:12,fontWeight:'bold'}} 
           cardCoverStyle={{ width: '100%', aspectRatio: 6.5 / 8, alignSelf:'center'}}
           paragraph={{fontSize:14}}
           price={item.price} 
           src={item.img}
           discount={item.discount?item.discount:null}
           data={item}
           />
    
          </View>
          
         
      )}
    />:loading?<Loader/>:null}
    </ScrollView>)
 
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    borderColor:'gray',
    borderWidth:0.5,
    shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.8,
     shadowRadius: 2
  },
  itemName: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '600',
  }, line:{

    borderWidth: 1,
    borderColor:'gray',
    margin:5,
   
    

},
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: 'gray',
  },
});
