import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text, Button, ListItem } from 'react-native-elements';

import { useTracks } from '../context/Tracks';

const TrackListScreen = ({ navigation }) => {
  const {
    state: { tracks },
    tracksLoad,
  } = useTracks();

  console.log(tracks);

  return (
    <>
      <NavigationEvents onWillFocus={tracksLoad} />
      <Text h3>Track List Screen</Text>
      <FlatList
        data={tracks}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({});

TrackListScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TrackListScreen;
