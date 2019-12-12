import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const RestaurantScreen = () => {
  return (
    <>
      <Text style={styles.info}>Restaurant show</Text>
    </>
  );
};

const styles = StyleSheet.create({
  info: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default RestaurantScreen;
