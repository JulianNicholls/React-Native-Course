import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Julian';

  return (
    <View>
      <Text style={styles.titleStyle}>React Native</Text>
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
