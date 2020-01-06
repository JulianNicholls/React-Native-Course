import React from 'react';
import PropTypes from 'prop-types';

import { Text, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.title}>SignupScreen</Text>
      <Button
        title="Log in instead"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});

SignupScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignupScreen;
