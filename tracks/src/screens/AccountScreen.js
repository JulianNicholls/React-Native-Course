import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import { useAuth } from '../context/Auth';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { authLogout } = useAuth();

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.title}>AccountScreen</Text>
      <Spacer>
        <Button title="Log out" onPress={authLogout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});

export default AccountScreen;
