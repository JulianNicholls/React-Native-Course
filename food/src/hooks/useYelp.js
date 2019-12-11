import { useState, useEffect } from 'react';

import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const search = async term => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: 'Bournemouth',
          radius: 10000, // 10km
        },
      });

      setResults(response.data.businesses);
    } catch (err) {
      setError('Could not load restaurants. Please try again later.');
    }
  };

  useEffect(() => {
    search('indian');
  }, []);

  return [search, results, error];
};
