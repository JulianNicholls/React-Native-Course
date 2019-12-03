import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetail = ({ title, source, score }) => {
  return (
    <View>
      <Image source={source} />
      <Text>{title}</Text>
      {score && <Text>Score: {score}/10</Text>}
    </View>
  );
};

ImageDetail.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.number.isRequired,
  score: PropTypes.number,
};

export default ImageDetail;
