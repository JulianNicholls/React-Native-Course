import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useYelp from '../hooks/useYelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [search, results, error] = useYelp();

  return (
    <View>
      <SearchBar term={term} setTerm={setTerm} startSearch={() => search(term)} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {results.length > 0 ? <Text>Businesses: {results.length}</Text> : null}
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
