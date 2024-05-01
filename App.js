import React,{useEffect,useState} from 'react';
import Router from './router/router'
import { Provider as PaperProvider } from 'react-native-paper';
import { lightTheme, darkTheme } from './res/styles/Theme';
import store from './store/ConfigureStore';
import { Provider } from 'react-redux'
import { theme } from 'native-base';
import { EventRegister } from 'react-native-event-listeners';
const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const listener = EventRegister.addEventListener('theme', (data) => {
      data? setTheme(darkTheme) : setTheme(lightTheme)
      
    })
    return()=>{
      EventRegister.removeEventListener(listener)
    }
  

  });
  
  return (
    <Provider store={store}>
    <PaperProvider theme={theme}>
        <Router />
    </PaperProvider>
  </Provider>
  );
};
export default App;