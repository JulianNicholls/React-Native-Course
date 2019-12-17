import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

import { useBlog } from '../context';
import PostForm from '../components/PostForm';

const CreateScreen = ({ navigation }) => {
  const { addPost } = useBlog();

  return (
    <View style={styles.view}>
      <Text style={styles.title}>New Post</Text>

      <PostForm
        buttonText="Add post"
        onSubmit={(title, content) => {
          addPost(title, content, () => navigation.goBack());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
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
