import { useContext } from 'react';
import { AsyncStorage } from 'react-native';

import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationRef';

const AUTH_LOGIN = 'AUTH/LOGIN';
const AUTH_LOGOUT = 'AUTH/LOGOUT';
const AUTH_ERROR = 'AUTH/ERROR';

const authSignup = dispatch => async (email, password) => {
  try {
    const response = await trackerAPI.post('/signup', { email, password });
    const { token } = response.data;

    await AsyncStorage.setItem('token', token);

    dispatch({ type: AUTH_LOGIN, token });
    navigate('TrackList');
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: AUTH_ERROR,
      message: 'Cannot sign up with that email address',
    });
  }
};

const authLogin = dispatch => async (email, password) => {
  try {
    const response = await trackerAPI.post('/login', { email, password });
    const { token } = response.data;

    await AsyncStorage.setItem('token', token);

    dispatch({ type: AUTH_LOGIN, token });
    navigate('TrackList');
  } catch (err) {
    console.log(err.response.data);
    dispatch({ type: AUTH_ERROR, message: 'Unrecognised email or password' });
  }
};

const authLogout = dispatch => () => {
  dispatch({ type: AUTH_LOGOUT });
};

const authReducer = (auth, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { token: action.token, errorMessage: '' };

    case AUTH_LOGOUT:
      return { token: null, errorMessage: '' };

    case AUTH_ERROR:
      return { ...auth, errorMessage: action.message };

    default:
      return auth;
  }
};

const { Context: AuthContext, Provider: AuthProvider } = createDataContext(
  authReducer,
  { authSignup, authLogin, authLogout },
  { token: null, errorMessage: '' }
);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error('useAuth must be used inside an AuthProvider');

  return context;
};

export { AuthProvider, useAuth };
