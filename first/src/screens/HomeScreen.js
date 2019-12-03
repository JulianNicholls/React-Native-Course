import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Components"
        onPress={() => props.navigation.navigate('Components')}
      />
      <Button title="Lists" onPress={() => props.navigation.navigate('Lists')} />
      <Button title="Images" onPress={() => props.navigation.navigate('Image')} />
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
