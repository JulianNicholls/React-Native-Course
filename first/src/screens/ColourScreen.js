import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const ColourScreen = () => {
  const [colours, setColours] = useState([]);

  const addBlock = () => {
    setColours([...colours, randomRGB()]);
  };

  const drawBlock = ({ item }) => (
    <View style={{ width: 100, height: 100, backgroundColor: item }} />
  );

  const keyExtractor = item => item;

  return (
    <View>
      <Text style={styles.title}>Colours</Text>
      <Button title="Add a colour" onPress={addBlock} />
      <FlatList
        data={colours}
        renderItem={drawBlock}
        keyExtractor={keyExtractor}
      />
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
