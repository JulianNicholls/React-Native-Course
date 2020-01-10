import { useContext } from 'react';
import createDataContext from './createDataContext';

import trackApi from '../api/tracker';

const TRACKS_LOAD = 'TRACKS_LOAD';
const TRACKS_CREATE = 'TRACKS_CREATE';

const tracksLoad = dispatch => () => {
  dispatch({ type: TRACKS_LOAD /* tracks */ });
};

const tracksCreate = dispatch => async (name, locations) => {
  const response = await trackApi.post('/tracks', { name, locations });

  dispatch({ type: TRACKS_CREATE, track: response.data });
};

const tracksReducer = (state, action) => {
  switch (action.type) {
    case TRACKS_LOAD:
      return { tracks: action.tracks };

    case TRACKS_CREATE:
      return { tracks: [state.tracks, action.track] };

    default:
      return state;
  }
};

const { Context: TracksContext, Provider: TracksProvider } = createDataContext(
  tracksReducer,
  { tracksLoad, tracksCreate },
  { tracks: [] }
);

const useTracks = () => {
  const context = useContext(TracksContext);

  if (context === undefined)
    throw new Error('useTracks must be used inside a TracksProvider');

  return context;
};

export { TracksProvider, useTracks };
