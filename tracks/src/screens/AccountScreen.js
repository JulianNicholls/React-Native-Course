import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import { useAuth } from '../context/Auth';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { authLogout } = useAuth();

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Your account</Text>
      <Spacer>
        <Button title="Log out" onPress={authLogout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});

export default AccountScreen;
