import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { useAuth } from '../context/Auth';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';

const LoginScreen = () => {
  const { state: auth, authClearError, authLogin } = useAuth();

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={authClearError} />
      <AuthForm
        headerText="Log in to your account"
        errorMessage={auth.errorMessage}
        buttonText="Log in"
        buttonAction={authLogin}
      />
      <Spacer>
        <NavLink to="Signup" text="Don't have an account? Sign up instead." />
      </Spacer>
    </View>
  );
};

LoginScreen.navigationOptions = () => ({
  header: null,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
