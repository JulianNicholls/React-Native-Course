import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text, ListItem } from 'react-native-elements';

import { useTracks } from '../context/Tracks';

const TrackListScreen = ({ navigation }) => {
  const {
    state: { tracks },
    tracksLoad,
  } = useTracks();

  return (
    <>
      <NavigationEvents onWillFocus={tracksLoad} />
      <Text h3>Track List Screen</Text>
      <FlatList
        data={tracks}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
          >
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

TrackListScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TrackListScreen;
