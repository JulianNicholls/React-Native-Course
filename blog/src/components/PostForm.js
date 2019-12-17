import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PostForm = ({
  initialTitle = '',
  initialContent = '',
  buttonText,
  onSubmit,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  return (
    <View style={styles.view}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button title={buttonText} onPress={() => onSubmit(title, content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
});

PostForm.propTypes = {
  initialTitle: PropTypes.string,
  initialContent: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default PostForm;
