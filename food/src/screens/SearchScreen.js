import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useYelp from '../hooks/useYelp';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [search, results, error] = useYelp();

  const restaurantsByPrice = price => {
    const priceLen = price.length;

    // In the UK, the £ (GBP) character is used instead of the $ (USD),
    // hence I'm matching by length and so many have no price valuation,
    // that I have created an unrated list.
    if (priceLen === 0) return results.filter(r => !r.price);
    else return results.filter(r => r.price && r.price.length === priceLen);
  };

  return (
    <>
      <SearchBar term={term} setTerm={setTerm} startSearch={() => search(term)} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {results.length > 0 ? (
        <ScrollView>
          <RestaurantList
            title="Unpriced"
            restaurants={restaurantsByPrice('')}
            navigation={navigation}
          />
          <RestaurantList
            title="Everyday bargains"
            restaurants={restaurantsByPrice('$')}
            navigation={navigation}
          />
          <RestaurantList
            title="Middle range"
            restaurants={restaurantsByPrice('$$')}
            navigation={navigation}
          />
          <RestaurantList
            title="High end dining"
            restaurants={[
              ...restaurantsByPrice('$$$'),
              ...restaurantsByPrice('$$$$'),
            ]}
            navigation={navigation}
          />
        </ScrollView>
      ) : (
        <Text style={styles.info}>No results found</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    alignItems: 'center',
    fontSize: 18,
    color: 'red',
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SearchScreen;
