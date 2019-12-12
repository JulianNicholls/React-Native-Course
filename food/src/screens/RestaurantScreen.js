import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, Image, StyleSheet } from 'react-native';

import yelp from '../api/yelp';

const RestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [restaurant, setRestaurant] = useState(null);

  const getRestaurant = async id => {
    const response = await yelp.get(`/${id}`);

    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  const renderPhoto = ({ item }) => (
    <Image style={styles.image} source={{ uri: item }} resizeMode="center" />
  );

  if (!restaurant) return <Text style={styles.name}>Loading...</Text>;

  return (
    <>
      <Text style={styles.name}>{restaurant.name}</Text>
      {restaurant.photos.length > 0 ? (
        <FlatList
          data={restaurant.photos}
          keyExtractor={item => item}
          renderItem={renderPhoto}
        />
      ) : (
        <Text style={styles.name}>(No Photos)</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    height: 300,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
});

RestaurantScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RestaurantScreen;
