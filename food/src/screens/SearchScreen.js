import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  const startSearch = () => {
    console.log('Search for', term);
  };

  return (
    <View>
      <SearchBar term={term} setTerm={setTerm} startSearch={startSearch} />
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;
