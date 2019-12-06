import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ColourAdjuster from '../components/ColourAdjuster';

const INCREMENT = 5;

// I have taken the object destructuring to a ridiculous extent here.
// I would not recommend this.
const reducer = (state, { type, delta }) => {
  const { max, min } = Math;
  const { red, green, blue } = state;

  delta *= INCREMENT;

  switch (type) {
    case 'CHANGE_RED':
      return { ...state, red: max(0, min(255, red + delta)) };

    case 'CHANGE_GREEN':
      return { ...state, green: max(0, min(255, green + delta)) };

    case 'CHANGE_BLUE':
      return { ...state, blue: max(0, min(255, blue + delta)) };

    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <Text style={styles.title}>RGB Block</Text>
      <ColourAdjuster
        colour="Red"
        adjust={delta => dispatch({ type: 'CHANGE_RED', delta })}
      />
      <ColourAdjuster
        colour="Green"
        adjust={delta => dispatch({ type: 'CHANGE_GREEN', delta })}
      />
      <ColourAdjuster
        colour="Blue"
        adjust={delta => dispatch({ type: 'CHANGE_BLUE', delta })}
      />

      <View
        style={[
          styles.block,
          { backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` },
        ]}
      ></View>

      <Text style={styles.legend}>
        {state.red}, {state.green}, {state.blue}
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
