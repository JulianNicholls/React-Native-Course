import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.title}>Input</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoFocus={true}
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Text style={styles.name}>Name: {name}</Text>
      <Text style={styles.name}>
        Password:{' '}
        {password.length < 6 ? (
          <Text style={styles.bad}>Too short</Text>
        ) : (
          <Text style={styles.good}>OK</Text>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#000080',
    borderWidth: 1,
    padding: 3,
  },
  label: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    margin: 15,
  },
  bad: { color: 'red' },
  good: { color: 'green' },
});

export default InputScreen;
