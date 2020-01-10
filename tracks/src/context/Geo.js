import { useContext } from 'react';
import createDataContext from './createDataContext';

const GEO_ADD_LOCATION = 'GEO_ADD_LOCATION';
const GEO_START = 'GEO_START';
const GEO_STOP = 'GEO_STOP';
const GEO_TRACK_NAME = 'GEO_TRACK_NAME';
const GEO_RESET = 'GEO_RESET';

const geoStartRecording = dispatch => () => {
  dispatch({ type: GEO_START });
};

const geoStopRecording = dispatch => () => {
  dispatch({ type: GEO_STOP });
};

const geoAddLocation = dispatch => location => {
  dispatch({ type: GEO_ADD_LOCATION, location });
};

const geoSetTrackName = dispatch => name => {
  dispatch({ type: GEO_TRACK_NAME, name });
};

const geoReset = dispatch => () => {
  dispatch({ type: GEO_RESET });
};

const geoReducer = (geo, action) => {
  switch (action.type) {
    case GEO_ADD_LOCATION:
      if (geo.recording)
        return {
          ...geo,
          locations: [...geo.locations, action.location],
          currentLocation: action.location,
        };

      return { ...geo, currentLocation: action.location };

    case GEO_START:
      return { ...geo, recording: true };

    case GEO_STOP:
      return { ...geo, recording: false };

    case GEO_TRACK_NAME:
      return { ...geo, trackName: action.name };

    case GEO_RESET:
      return { ...geo, trackName: '', locations: [] };

    default:
      return geo;
  }
};

const { Context: GeoContext, Provider: GeoProvider } = createDataContext(
  geoReducer,
  {
    geoStartRecording,
    geoStopRecording,
    geoAddLocation,
    geoSetTrackName,
    geoReset,
  },
  { recording: false, trackName: '', locations: [], currentLocation: null }
);

const useGeo = () => {
  const context = useContext(GeoContext);

  if (context === undefined)
    throw new Error('useGeo must be used inside a GeoProvider');

  return context;
};

export { GeoProvider, useGeo };
