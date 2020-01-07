import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, to }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(to)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

NavLink.propTypes = {
  navigation: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default withNavigation(NavLink);
