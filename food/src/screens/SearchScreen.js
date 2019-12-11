import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const search = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: 'Bournemouth',
        },
      });

      setResults(response.data.businesses);
    } catch (err) {
      setError('Could not load restaurants. Please try again later.');
    }
  };

  return (
    <View>
      <SearchBar term={term} setTerm={setTerm} startSearch={search} />
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <Text>Businesses: {results.length}</Text>
      )}
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
