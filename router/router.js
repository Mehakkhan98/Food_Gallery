import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../Pages/Welcome';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Registration from '../Molecules/CustomRegistrationForm';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;