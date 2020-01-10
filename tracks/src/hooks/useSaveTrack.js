import { useGeo } from '../context/Geo';
import { useTracks } from '../context/Tracks';
import { navigate } from '../navigationRef';

export default () => {
  const {
    state: { trackName, locations },
    geoReset,
  } = useGeo();
  const { tracksCreate } = useTracks();

  const saveTrack = async () => {
    await tracksCreate(trackName, locations);
    geoReset();
    navigate('TrackList');
  };

  return [saveTrack];
};
