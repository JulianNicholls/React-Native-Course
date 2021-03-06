import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useBlog } from '../context';

const IndexScreen = ({ navigation }) => {
  const { state: posts, loadPosts, deletePost } = useBlog();

  useEffect(() => {
    loadPosts();
  }, []);

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
    </>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Feather name="plus" size={30} />
    </TouchableOpacity>
  ),
});

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
