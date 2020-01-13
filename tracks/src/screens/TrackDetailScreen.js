import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { useTracks } from '../context/Tracks';

const TrackDetailScreen = ({ navigation }) => {
  const {
    state: { tracks },
  } = useTracks();
  const trackId = navigation.getParam('_id');
  const track = tracks.find(({ _id }) => _id === trackId);

  return <Text h3>{track.name}</Text>;
};

const styles = StyleSheet.create({});

TrackDetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TrackDetailScreen;
