
import React ,{useState}from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView ,KeyboardAvoidingView} from 'react-native';
import Input from '../Atoms/CustomInput';
import Button from '../Atoms/CustomButton';
import Logo from '../Atoms/CustomLogo';
import { useNavigation } from '@react-navigation/native';
import client from '../api/client';
import { useTheme } from 'react-native-paper';
export default function Registration() {
    const navigation = useNavigation();
    const {colors}=useTheme();
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
  
  const register =async()=>{
        try {
          if(email&&user&&phone&&address&&password){
          
            setLoading(true)
            const response = await client.post('/signup', {
            email: email,
            password: password,
            username:user,
            contact:phone,
            address:address
          });
          if (response) {
            navigation.navigate('Login');
            setLoading(false);
          } else {
            setLoading(false);
          }
        }
        else{
          setError("Please fill form properly")
        }
        } catch (error) {
          error.message==="Request failed with status code 400"?setError("User already exist!"):
          setError(`request failed:${error.message}`);
          setLoading(false);
          setLoading(false);
        } 
   
  }
 
   
  return (
    <View style={{...styles.container,backgroundColor:colors.backgroundColor}}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{...styles.container,marginTop:10}}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={{position:'relative',left:15,marginLeft:5}}>
      <Logo/>
      </View>
     <Input 
     data="User Name" 
     name="user"
     error={error}
     onChangeText={(e)=>{setUser(e),setError("")}}
     />
     <Input  
     data="Phone #"
     name="phone" 
     error={error}
     onChangeText={(e)=>{setPhone(e),setError("")}}
     />
     <Input  
     data="Address"
     name="home" 
     error={error}
     onChangeText={(e)=>{setAddress(e),setError("")}}
     />
     <Input 
      data="Email"
      onChangeText={(e)=>{setEmail(e),setError("")}}
      error={error}
      name="mail"/>
     <Input
        data="Password"
        name="lock"
        isPassword={true}
        onChangeText={(e)=>{setPassword(e),setError("")}}
        error={error}
      />
       <Input
        data="Confirm Password"
        name="lock"
        isPassword={true}
        onChangeText={(e)=>{setPassword(e),setError("")}}
        error={error}
      />
       {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
     <Button title="REGISTER"  method={register} isload={loading}/>
     
    
     
    </ScrollView>
    </KeyboardAvoidingView>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginHorizontal: 3,
    fontWeight: '500',
  },

  text:{
    color:'#ffff',
    fontSize:24,
    fontWeight:'bold'
  }
});
