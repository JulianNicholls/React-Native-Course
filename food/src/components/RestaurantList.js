import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Restaurant from './Restaurant';

const RestaurantList = ({ title, restaurants }) => {
  // Bail out if there's no restaurants to show
  if (restaurants.length === 0) return null;

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={restaurants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Restaurant restaurant={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

RestaurantList.propTypes = {
  title: PropTypes.string.isRequired,
  restaurants: PropTypes.array.isRequired,
};

export default RestaurantList;
