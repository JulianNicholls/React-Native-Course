import { useContext } from 'react';
import createDataContext from './createDataContext';

const GEO_ADD_LOCATION = 'GEO_ADD_LOCATION';
const GEO_START = 'GEO_START';
const GEO_STOP = 'GEO_STOP';

const geoStartRecording = dispatch => () => {};

const geoStopRecording = dispatch => () => {};

const geoAddLocation = dispatch => location => {
  dispatch({ type: GEO_ADD_LOCATION, location });
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case GEO_ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.location],
        currentLocation: action.location,
      };

    default:
      return state;
  }
};

const { Context: GeoContext, Provider: GeoProvider } = createDataContext(
  locationReducer,
  { geoStartRecording, geoStopRecording, geoAddLocation },
  { recording: false, locations: [], currentLocation: null }
);

const useGeo = () => {
  const context = useContext(GeoContext);

  if (context === undefined)
    throw new Error('useGeo must be used inside a GeoProvider');

  return context;
};

export { GeoProvider, useGeo };
