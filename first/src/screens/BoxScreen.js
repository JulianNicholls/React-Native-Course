import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Boxes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: 'black',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

export default BoxScreen;
