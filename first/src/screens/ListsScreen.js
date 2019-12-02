import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListsScreen = () => {
  const friends = [
    { name: 'Friend 1', age: 23 },
    { name: 'Friend 2', age: 27 },
    { name: 'Friend 3', age: 34 },
    { name: 'Friend 4', age: 19 },
    { name: 'Friend 5', age: 47 },
    { name: 'Friend 6', age: 53 },
    { name: 'Friend 7', age: 45 },
    { name: 'Friend 8', age: 25 },
    { name: 'Friend 9', age: 56 },
  ];

  const renderItem = ({ item }) => (
    <Text style={styles.itemStyle}>
      {item.name} - Age {item.age}
    </Text>
  );

  const keyExtractor = friend => friend.name.slice(-1);

  return (
    <View>
      <Text style={styles.titleStyle}>List Screen</Text>
      <FlatList
        data={friends}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    marginBottom: 10,
  },
  itemStyle: {
    fontSize: 20,
    marginVertical: 5,
  },
});

export default ListsScreen;
