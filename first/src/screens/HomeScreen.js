import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <Button title="List" onPress={() => navigation.navigate('Lists')} />
      <Button title="Images" onPress={() => navigation.navigate('Image')} />
      <Button title="Counter" onPress={() => navigation.navigate('Counter')} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
