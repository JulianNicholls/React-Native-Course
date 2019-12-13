import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavButton = withNavigation(({ text, destination, navigation }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate(destination)}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
));

const HomeScreen = () => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.title}>Home</Text>

      <NavButton text="List" destination="Lists" />
      <NavButton text="Images" destination="Image" />
      <NavButton text="Counter" destination="Counter" />
      <NavButton text="Colours" destination="Colour" />
      <NavButton text="Square" destination="Square" />
      <NavButton text="Input" destination="Input" />
      <NavButton text="Boxes" destination="Box" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
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
  },
  buttonText: {
    color: 'blue',
    fontSize: 20,
  },
});

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  navigation: PropTypes.object,
};

export default HomeScreen;
