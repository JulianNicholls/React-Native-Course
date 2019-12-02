import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Components Button"
        onPress={() => navigation.navigate('Components')}
      />
      <Button title="List Button" onPress={() => navigation.navigate('Lists')} />

      <TouchableOpacity onPress={() => navigation.navigate('Components')}>
        <Text>Components</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Lists')}>
        <Text>List</Text>
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
});

export default HomeScreen;
