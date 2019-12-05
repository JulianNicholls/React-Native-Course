import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ColourAdjuster from '../components/ColourAdjuster';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <Text style={styles.title}>RGB Block</Text>
      <ColourAdjuster
        colour="Red"
        adjust={delta => setRed(Math.max(0, Math.min(255, red + delta)))}
      />
      <ColourAdjuster
        colour="Green"
        adjust={delta => setGreen(Math.max(0, Math.min(255, green + delta)))}
      />
      <ColourAdjuster
        colour="Blue"
        adjust={delta => setBlue(Math.max(0, Math.min(255, blue + delta)))}
      />

      <View
        style={[
          styles.block,
          { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
        ]}
      ></View>

      <Text style={styles.legend}>
        {red}, {green}, {blue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
  block: {
    width: 250,
    height: 250,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  legend: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SquareScreen;
