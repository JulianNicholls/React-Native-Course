import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, setTerm, startSearch }) => {
  return (
    <View style={styles.bar}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
        placeholder="Search"
        value={term}
        onChangeText={setTerm}
        onEndEditing={startSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  input: {
    flex: 1, // Doesn't seem necessary for me
    fontSize: 20,
    // padding: 5,
  },
});
export default SearchBar;
