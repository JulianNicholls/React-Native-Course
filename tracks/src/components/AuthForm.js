import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, buttonText, buttonAction }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
        textContentType={buttonText === 'Sign up' ? 'newPassword' : 'password'}
        label="Password"
        value={password}
        onChangeText={setPassword}
      />

      {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}

      <Spacer>
        <Button title={buttonText} onPress={() => buttonAction(email, password)} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
  },
});

AuthForm.propTypes = {
  headerText: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default AuthForm;
