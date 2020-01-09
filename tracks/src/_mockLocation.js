import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001; // Appromimately 10m
let prevLocation = { latitude: 50.733, longitude: -1.853 };

const getLocation = () => {
  const location = {
    timestamp: Math.floor(Date.now() / 1000),
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: prevLocation.latitude,
      longitude: prevLocation.longitude,
    },
  };

  if (Math.random() > 0.4) location.coords.latitude += tenMetersWithDegrees;
  if (Math.random() > 0.4) location.coords.longitude += tenMetersWithDegrees;

  prevLocation = location.coords;

  // console.log({ prev: prevLocation, coords: location.coords });

  return location;
};

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(),
  });
}, 2000);
