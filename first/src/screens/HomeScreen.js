import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavButton = ({ text, destination, load }) => (
  <TouchableOpacity style={styles.button} onPress={() => load(destination)}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const load = destination => {
    navigation.navigate(destination);
  };

  return (
    <View class={styles.buttonContainer}>
      <Text style={styles.title}>Home</Text>

      <NavButton text="List" destination="Lists" load={load} />
      <NavButton text="Images" destination="Image" load={load} />
      <NavButton text="Counter" destination="Counter" load={load} />
      <NavButton text="Colours" destination="Colour" load={load} />
      <NavButton text="Square" destination="Square" load={load} />
      <NavButton text="Input" destination="Input" load={load} />
      <NavButton text="Boxes" destination="Box" load={load} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    display: 'flex',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#abd7ed',
    borderColor: '#247ca8',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    width: '80%',
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    color: 'blue',
    fontSize: 20,
  },
});

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  load: PropTypes.func.isRequired,
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
