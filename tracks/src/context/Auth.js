import { useContext } from 'react';

import createDataContext from './createDataContext';

const AUTH_LOGIN = 'AUTH/LOGIN';
const AUTH_LOGOUT = 'AUTH/LOGOUT';

const authReducer = (auth, action) => {
  switch (action.type) {
    default:
      return auth;
  }
};

export const authSignup = dispatch => {
  return async (email, password) => {
    dispatch({ type: AUTH_LOGIN, user: { email, password } });
  };
};

export const authLogin = dispatch => {
  return async (email, password) => {
    dispatch({ type: AUTH_LOGIN, user: { email, password } });
  };
};

export const authLogout = dispatch => {
  return () => {
    dispatch({ type: AUTH_LOGOUT });
  };
};

const { Context: AuthContext, Provider: AuthProvider } = createDataContext(
  authReducer,
  {},
  { isLoggedIn: false }
);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error('useAuth must be used inside an AuthProvider');

  return context;
};

export { AuthProvider, useAuth };
