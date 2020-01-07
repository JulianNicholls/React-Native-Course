import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { useAuth } from '../context/Auth';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const { state: auth, authClearError, authSignup } = useAuth();

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={authClearError} />
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={auth.errorMessage}
        buttonText="Sign up"
        buttonAction={authSignup}
      />
      <Spacer>
        <NavLink to="Login" text="Already have an account? Log in instead." />
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
});

SignupScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignupScreen;
