import React from 'react';
import { Input, Button } from 'react-native-elements';

import Spacer from './Spacer';
import { useGeo } from '../context/Geo';

const TrackForm = () => {
  const {
    state: { trackName, recording },
    geoStartRecording,
    geoStopRecording,
    geoSetTrackName,
  } = useGeo();

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          value={trackName}
          onChangeText={geoSetTrackName}
        />
      </Spacer>
      {recording ? (
        <Button title="Stop" onPress={geoStopRecording} />
      ) : (
        <Button title="Start Recording" onPress={geoStartRecording} />
      )}
    </>
  );
};
export default TrackForm;
