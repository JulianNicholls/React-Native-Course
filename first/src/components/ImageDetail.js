import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetail = ({ title, source, score }) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={source} />
      <View>
        <Text style={styles.caption}>{title}</Text>
        {score && <Text>Score: {score}/10</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    borderColor: 'black',
    borderWidth: 1,
  },
  caption: { fontSize: 20 },
});

ImageDetail.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.number.isRequired,
  score: PropTypes.number,
};

export default ImageDetail;
