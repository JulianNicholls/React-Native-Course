import { useContext } from 'react';

import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const AUTH_LOGIN = 'AUTH/LOGIN';
const AUTH_LOGOUT = 'AUTH/LOGOUT';
const AUTH_ERROR = 'AUTH/ERROR';

export const authSignup = dispatch => {
  return async (email, password) => {
    try {
      const response = await trackerAPI.post('/signup', { email, password });

      console.log(response.data);

      const { token } = response.data;
      dispatch({ type: AUTH_LOGIN, token });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: AUTH_ERROR,
        message: 'Cannot sign up with that email address',
      });
    }
  };
};

export const authLogin = dispatch => {
  return async (email, password) => {
    try {
      const response = await trackerAPI.post('/login', { email, password });

      console.log(response.data);
      const { token } = response.data;
      dispatch({ type: AUTH_LOGIN, token });
    } catch (err) {
      console.log(err.response.data);
      dispatch({ type: AUTH_ERROR, message: 'Unrecognised email or password' });
    }
  };
};

export const authLogout = dispatch => {
  return () => {
    dispatch({ type: AUTH_LOGOUT });
  };
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
