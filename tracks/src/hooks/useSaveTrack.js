import { useGeo } from '../context/Geo';
import { useTracks } from '../context/Tracks';

export default () => {
  const {
    state: { trackName, locations },
  } = useGeo();
  const { tracksCreate } = useTracks();

  const saveTrack = () => {
    tracksCreate(trackName, locations);
  };

  return [saveTrack];
};
