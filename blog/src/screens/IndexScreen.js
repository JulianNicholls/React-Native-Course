import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useBlog } from '../context';

const IndexScreen = () => {
  const { state: posts, addPost } = useBlog();

  return (
    <>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.title}>{item.title}</Text>
            <Feather style={styles.icon} name="trash" />
          </View>
        )}
      />
      <Button
        title="Add another"
        onPress={() => addPost('Another post', 'More contentious content')}
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

export default IndexScreen;
