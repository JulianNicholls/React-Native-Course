import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.titleStyle}>Images</Text>
      <ImageDetail
        title="Mountain"
        source={require('../../assets/mountain.jpg')}
        score={9}
      />
      <ImageDetail
        title="Beach"
        source={require('../../assets/beach.jpg')}
        score={5}
      />
      <ImageDetail
        title="Forest"
        source={require('../../assets/forest.jpg')}
        score={7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default ImageScreen;
