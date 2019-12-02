import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListsScreen = () => {
  const friends1 = [
    { name: 'Friend 1', key: '1' },
    { name: 'Friend 2', key: '2' },
    { name: 'Friend 3', key: '3' },
    { name: 'Friend 4', key: '4' },
    { name: 'Friend 5', key: '5' },
    { name: 'Friend 6', key: '6' },
    { name: 'Friend 7', key: '7' },
    { name: 'Friend 8', key: '8' },
    { name: 'Friend 9', key: '9' },
  ];

  const friends2 = [
    { name: 'Friend 11' },
    { name: 'Friend 12' },
    { name: 'Friend 13' },
    { name: 'Friend 14' },
    { name: 'Friend 15' },
    { name: 'Friend 16' },
    { name: 'Friend 17' },
    { name: 'Friend 18' },
    { name: 'Friend 19' },
  ];

  const renderItem = ({ item }) => (
    <Text style={styles.itemStyle}>{item.name}</Text>
  );

  const keyExtractor = friend => friend.name.slice(-1);

  return (
    <View>
      <Text style={styles.titleStyle}>List Screen</Text>
      <FlatList
        style={{ marginBottom: 10 }}
        data={friends1}
        renderItem={renderItem}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={friends2}
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
