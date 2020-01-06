import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, StyleSheet } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.title}>TrackListScreen</Text>
      <Button
        title="go to detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});

TrackListScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TrackListScreen;
