import { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  useEffect(() => {
    if (shouldTrack) startWatching();
    else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  const startWatching = async () => {
    try {
      // Currently requestPermissionsAsync does not throw an error on iOS,
      // so we check the response here.
      const response = await requestPermissionsAsync();
      if (!response.granted) return setError('denied');

      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 2000,
          distanceInterval: 20,
        },
        callback
      );

      setSubscriber(sub);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return [error];
};
