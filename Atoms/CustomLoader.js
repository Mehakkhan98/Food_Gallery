import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { useTheme } from 'react-native-paper';
const Loader = () => {
  const {colors}=useTheme();
  return(<View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={colors.loadingColor} />
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default Loader;