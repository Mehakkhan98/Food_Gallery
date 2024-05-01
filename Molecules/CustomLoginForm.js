import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from 'react-native-vector-icons';
import ComposedInput from '../Atoms/CustomInput';
import ComposedButton from '../Atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { addUserData} from '../store/reducers/cartReducer';
import {useDispatch } from 'react-redux';
import client from '../api/client';


export default function Form(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const getEmail = (e) => {
    setEmail(e);
    setError('');
  };

  const getPassword = (e) => {
    setPassword(e);
    setError('');
  };


  const handleLogin = async () => {
    try {
      if(email&&password){
      setLoading(true)
      const response = await client.post('/login', {
        email: email,
        password: password,
      });
      if (response.data.success) {
        dispatch(addUserData(response.data));
        navigation.navigate('Home');
        setLoading(false);
      } else {
        setLoading(false);
      }
    }else{
      setError("Please fill form properly")
    }
    } catch (error) {
      error.message==="Request failed with status code 401"?setError("Invalid email or password!"):
      setError(`request failed:${error.message}`);
      setLoading(false);
    } 
  };

  return (
    <View style={styles.container}>
      <ComposedInput
        data="Email"
        name="mail"
        isPassword={false}
        onChangeText={getEmail}
        error={error}
      />
      <ComposedInput
        data="Password"
        name="lock"
        isPassword={true}
        onChangeText={getPassword}
        error={error}
      />
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
      <ComposedButton title={props.title} method={handleLogin} isload={loading}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginHorizontal: 3,
    fontWeight: '500',
  },
});
