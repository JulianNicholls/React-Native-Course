import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, StyleSheet } from 'react-native';

const Restaurant = ({ restaurant }) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} stars, {restaurant.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 20,
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

Restaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default Restaurant;
