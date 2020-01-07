import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { useAuth } from '../context/Auth';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { authLogout } = useAuth();

  return (
    <>
      <Text style={styles.title}>AccountScreen</Text>
      <Spacer>
        <Button title="Log out" onPress={authLogout} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});

export default AccountScreen;
