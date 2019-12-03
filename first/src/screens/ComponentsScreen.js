import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Julian';

  return (
    <View>
      <Text style={styles.titleStyle}>Components</Text>
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45,
    textAlign: 'center',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 24,
  },
});

export default ComponentsScreen;
