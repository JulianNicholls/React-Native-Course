import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <Text style={styles.title}>RGB Block</Text>
      <Button title="Increase" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default SquareScreen;
