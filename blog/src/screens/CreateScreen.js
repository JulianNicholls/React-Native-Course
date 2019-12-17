import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useBlog } from '../context';

const CreateScreen = ({ navigation }) => {
  const { addPost } = useBlog();

  return (
    <>
      <Text style={styles.title}>New Post</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});

CreateScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CreateScreen;
