import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const post = navigation.getParam('post');

  return (
    <>
      <View style={styles.post}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content}>{post.content}</Text>
      </View>
    </>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Edit', { post: navigation.getParam('post') })
      }
    >
      <EvilIcons name="pencil" size={30} />
    </TouchableOpacity>
  ),
});

const styles = StyleSheet.create({
  post: {
    padding: 10,
    borderWidth: 1,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000070',
    marginBottom: 7,
  },
  content: {
    fontSize: 16,
  },
  icon: {
    fontSize: 30,
  },
});

ShowScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ShowScreen;
