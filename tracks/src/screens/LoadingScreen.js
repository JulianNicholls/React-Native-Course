import React, { useEffect } from 'react';

import { useAuth } from '../context/Auth';

const LoadingScreen = () => {
  const { authTryLocalLogin } = useAuth();

  useEffect(() => {
    authTryLocalLogin();
  }, []);

  return null;
};

export default LoadingScreen;
