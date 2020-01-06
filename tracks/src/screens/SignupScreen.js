import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        secureTextEntry
        autoCorrect={false}
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="newPassword"
        label="Password"
        value={password}
        onChangeText={setPassword}
      />

      <Spacer>
        <Button title="Sign up" />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => ({
  header: null,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  title: {
    fontSize: 32,
  },
});

SignupScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignupScreen;
