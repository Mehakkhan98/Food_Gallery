import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Badge = ({ count }) => {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    height:30,
    width:30,
    backgroundColor: 'red', // Background color of the badge
    borderRadius: 15, // Adjust the border radius as needed
    paddingHorizontal: 3, // Adjust the padding as needed
    paddingVertical: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white', // Text color of the badge
    fontSize: 9, // Adjust the font size as needed
    fontWeight: 'bold',
  },
});

export default Badge;
