import { useContext } from 'react';
import createDataContext from './createDataContext';

const LOC_ADD_LOCATION = 'LOC_ADD_LOCATION';
const LOC_START = 'LOC_START';
const LOC_STOP = 'LOC_STOP';

const locStartRecording = dispatch => () => {};

const locStopRecording = dispatch => () => {};

const locAddLocation = dispatch => location => {
  dispatch({ type: LOC_ADD_LOCATION, location });
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case LOC_ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.location],
        currentLocation: action.location,
      };

    default:
      return state;
  }
};

const { Context: LocationContext, Provider: LocationProvider } = createDataContext(
  locationReducer,
  { locStartRecording, locStopRecording, locAddLocation },
  { recording: false, locations: [], currentLocation: null }
);

const useLocation = () => {
  const context = useContext(LocationContext);

  if (context === undefined)
    throw new Error('useLocation must be used inside an LocationProvider');

  return context;
};

export { LocationProvider, useLocation };
