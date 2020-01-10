import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text h3>Track List Screen</Text>
      <Button
        title="go to detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

TrackListScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TrackListScreen;
