import React from 'react';
import { Text, Button, FlatList, StyleSheet } from 'react-native';

import { usePosts } from '../context';

const IndexScreen = () => {
  const { posts, addPost } = usePosts();

  return (
    <>
      <Text style={styles.title}>Posts ({posts.length})</Text>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
          </>
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default IndexScreen;
