import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColourScreen = () => {
  const [colour, setColours] = useState(0);

  return (
    <View>
      <Text style={styles.title}>Colours</Text>
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

export default ColourScreen;
