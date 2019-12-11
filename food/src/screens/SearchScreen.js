import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const search = async () => {
    console.log('Search for', term);

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
      console.error(err);
    }
  };

  return (
    <View>
      <SearchBar term={term} setTerm={setTerm} startSearch={search} />
      <Text>Businesses: {results.length}</Text>
    </View>
  );
};

export default SearchScreen;
