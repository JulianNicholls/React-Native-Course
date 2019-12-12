import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import Restaurant from './Restaurant';

const RestaurantList = ({ title, restaurants, navigation }) => {
  // Bail out if there's no restaurants to show
  if (restaurants.length === 0) return null;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('RestaurantShow', { id: item.id })}
    >
      <Restaurant restaurant={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={item => item.id}
        renderItem={renderItem}
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
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(RestaurantList);
