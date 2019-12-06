import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// This is the most pointless use of reducers ever
const reducer = (counter, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return counter + 1;

    case 'DECREMENT':
      return counter - 1;

    default:
      return counter;
  }
};

const CounterScreen = () => {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <View>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.counter}>{counter}</Text>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'INCREMENT' })}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'DECREMENT' })}
      ></Button>
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
    backgroundColor: '#dddddd',
    borderWidth: 1,
    borderColor: '#333333',
    fontSize: 100,
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ff4328',
    marginBottom: 40,
  },
});

export default CounterScreen;
