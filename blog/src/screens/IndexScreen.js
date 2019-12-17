import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useBlog } from '../context';

const IndexScreen = ({ navigation }) => {
  const { state: posts, addPost, deletePost } = useBlog();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Show', { post: item })}>
      <View style={styles.post}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity onPress={() => deletePost(item.id)}>
          <Feather style={styles.icon} name="trash" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  renderItem.propTypes = {
    item: PropTypes.object.isRequired,
  };

  return (
    <>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Button
        title="Add another"
        onPress={() =>
          addPost(`Post No. ${posts.length + 1}`, 'More contentious content')
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
    color: '#000070',
  },
  icon: {
    fontSize: 20,
  },
});

IndexScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default IndexScreen;
