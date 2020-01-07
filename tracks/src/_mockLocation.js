import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001; // Appromimately 10m

const getLocation = increment => {
  return {
    timestamp: 100000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -1.83 + increment * tenMetersWithDegrees,
      latitude: 50.733 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(++counter),
  });
}, 1000);
