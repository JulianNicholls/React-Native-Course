import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ColourAdjuster from '../components/ColourAdjuster';

const INCREMENT = 5;

const reducer = (state, action) => {
  switch (action.type) {
    case 'red':
      return {
        ...state,
        red: Math.max(0, Math.min(255, state.red + action.delta * INCREMENT)),
      };

    case 'green':
      return {
        ...state,
        green: Math.max(0, Math.min(255, state.green + action.delta * INCREMENT)),
      };

    case 'blue':
      return {
        ...state,
        blue: Math.max(0, Math.min(255, state.blue + action.delta * INCREMENT)),
      };

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
        adjust={delta => dispatch({ type: 'red', delta })}
      />
      <ColourAdjuster
        colour="Green"
        adjust={delta => dispatch({ type: 'green', delta })}
      />
      <ColourAdjuster
        colour="Blue"
        adjust={delta => dispatch({ type: 'blue', delta })}
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
