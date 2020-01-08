import { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

export default callback => {
  const [error, setError] = useState(null);

  useEffect(() => {
    startWatching();
  }, []);

  const startWatching = async () => {
    try {
      // Currently requestPermissionsAsync does not throw an error on iOS,
      // so we check the response here.
      const response = await requestPermissionsAsync();
      if (!response.granted) return setError('denied');

      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 2000,
          distanceInterval: 20,
        },
        callback
      );
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return [error];
};
