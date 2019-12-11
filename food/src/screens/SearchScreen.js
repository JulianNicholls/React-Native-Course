import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useYelp from '../hooks/useYelp';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [search, results, error] = useYelp();

  const restaurantsByPrice = price => {
    const priceLen = price.length;

    // In the UK, the £ (GBP) character is used instead of the $ (USD),
    // hence I'm matching by length.
    if (priceLen === 0) return results.filter(r => !r.price);
    else return results.filter(r => r.price && r.price.length === priceLen);
  };

  return (
    <View>
      <SearchBar term={term} setTerm={setTerm} startSearch={() => search(term)} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {results.length > 0 ? (
        <View>
          <Text>Businesses: {results.length}</Text>
          <RestaurantList title="Unpriced" restaurants={restaurantsByPrice('')} />
          <RestaurantList
            title="Cost effective"
            restaurants={restaurantsByPrice('$')}
          />
          <RestaurantList
            title="Middle range"
            restaurants={restaurantsByPrice('$$')}
          />
          <RestaurantList
            title="High end dining"
            restaurants={[
              ...restaurantsByPrice('$$$'),
              ...restaurantsByPrice('$$$$'),
            ]}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default SearchScreen;
