import { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    let subscriber = null;

    const startWatching = async () => {
      // console.log('startWatching called');
      try {
        // Currently requestPermissionsAsync does not throw an error on iOS,
        // so we check the response here.
        const response = await requestPermissionsAsync();

        if (!response.granted) return setError('denied');

        subscriber = await watchPositionAsync(
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

    if (shouldTrack) startWatching();
    else {
      // console.log('else', subscriber);
      if (subscriber) subscriber.remove();
      subscriber = null;
    }

    return () => {
      // console.log('cleanup', subscriber);
      if (subscriber) subscriber.remove();
      subscriber = null;
    };
  }, [shouldTrack]);

  return [error];
};
