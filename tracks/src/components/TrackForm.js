import React from 'react';
import { Input, Button } from 'react-native-elements';

import Spacer from './Spacer';
import { useGeo } from '../context/Geo';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { trackName, recording, locations },
    geoStartRecording,
    geoStopRecording,
    geoSetTrackName,
  } = useGeo();
  const [saveTrack] = useSaveTrack();

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

      {!recording && locations.length > 0 && trackName && (
        <Button style={{ marginTop: 15 }} title="Save Track" onPress={saveTrack} />
      )}
    </>
  );
};
export default TrackForm;
