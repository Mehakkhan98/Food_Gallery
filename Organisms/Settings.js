import React,{useEffect}from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventRegister } from 'react-native-event-listeners'
const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const {colors}=useTheme();
  

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };
  
  const toggleDarkMode = async() => {
    const updatedDarkMode = !darkModeEnabled;
  setDarkModeEnabled(updatedDarkMode);
  EventRegister.emit('theme', updatedDarkMode)

  
  };

  return (
    <View style={{...styles.container,backgroundColor:colors.backgroundColor}}>
      <List.Section>
        <List.Subheader style={{color:colors.headingColor}}>General Settings</List.Subheader>

        <List.Item
          title="Notifications"
          titleStyle={{ color: colors.textColor }}
          right={() => (
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
            />
          )}
        />
       <View style={{ backgroundColor: colors.inputColor }}>
  <Divider />
</View>
        <List.Item
         titleStyle={{ color: colors.textColor }}
          title="Dark Mode"
          right={() => (
            <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
          )}
        />
        
<View style={{ backgroundColor: colors.inputColor}}>
  <Divider />
</View>
      </List.Section>

      <List.Section>
        <List.Subheader style={{color:colors.headingColor}}>Account Settings</List.Subheader>

        <List.Item 
         titleStyle={{ color: colors.textColor }}
        title="Change Password" />
       <View style={{ backgroundColor:colors.inputColor}}>
  <Divider />
</View>

        <List.Item 
         titleStyle={{ color: colors.textColor }}
        title="Update Profile" />
       <View style={{ backgroundColor: colors.inputColor }}>
  <Divider />
</View>
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SettingsScreen;
