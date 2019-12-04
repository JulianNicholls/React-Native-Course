import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View class={styles.buttonContainer}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lists')}
      >
        <Text style={styles.buttonText}>List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Image')}
      >
        <Text style={styles.buttonText}>Images</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.buttonText}>Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Colour')}
      >
        <Text style={styles.buttonText}>Colours</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    display: 'flex',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#abd7ed',
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'blue',
    fontSize: 20,
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
