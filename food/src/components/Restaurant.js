import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, StyleSheet } from 'react-native';

const Restaurant = ({ restaurant }) => {
  return (
    <View style={styles.view}>
      {restaurant.image_url ? (
        <Image
          style={styles.image}
          source={{ uri: restaurant.image_url }}
          resizeMode="center"
        />
      ) : (
        <Image
          style={styles.image}
          source={require('../../assets/placeholder.png')}
          resizeMode="contain"
        />
      )}
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} stars, {restaurant.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 10,
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  title: {
    // textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

Restaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default Restaurant;
