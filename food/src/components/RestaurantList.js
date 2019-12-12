import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Restaurant from './Restaurant';

const RestaurantList = ({ title, restaurants }) => {
  // Bail out if there's no restaurants to show
  if (restaurants.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Restaurant restaurant={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

RestaurantList.propTypes = {
  title: PropTypes.string.isRequired,
  restaurants: PropTypes.array.isRequired,
};

export default RestaurantList;
