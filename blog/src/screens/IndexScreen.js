import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IndexScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Posts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default IndexScreen;
