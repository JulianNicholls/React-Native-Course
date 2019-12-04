import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.counter}>{counter}</Text>
      <Button title="Increase" onPress={() => setCounter(counter + 1)}></Button>
      <Button title="Decrease" onPress={() => setCounter(counter - 1)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
  counter: {
    fontSize: 70,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#f44336',
    marginBottom: 40,
  },
});
export default CounterScreen;
