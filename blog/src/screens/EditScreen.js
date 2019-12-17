import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

import { useBlog } from '../context';
import PostForm from '../components/PostForm';

const EditScreen = ({ navigation }) => {
  const post = navigation.getParam('post');

  const { updatePost } = useBlog();

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Edit Post</Text>

      <PostForm
        initialTitle={post.title}
        initialContent={post.content}
        buttonText="Update"
        onSubmit={(title, content) =>
          updatePost(post.id, title, content, () => navigation.navigate('Index'))
        }
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

EditScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default EditScreen;
