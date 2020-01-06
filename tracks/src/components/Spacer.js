import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

Spacer.propTypes = {
  children: PropTypes.element,
};

export default Spacer;
