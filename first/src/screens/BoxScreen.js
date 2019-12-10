import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.title}>Boxes</Text>
      </View>

      <View style={[styles.view, styles.second]}>
        <Text style={styles.text}>Text one</Text>
        <Text style={styles.text}>Text second</Text>
        <Text style={styles.text}>Text 3</Text>
      </View>

      <View style={[styles.view, styles.third]}>
        <Text style={styles.text}>Text one</Text>
        <Text style={styles.text}>Text second</Text>
        <Text style={styles.text}>Text 3</Text>
      </View>

      <View style={[styles.view, styles.fourth]}>
        <View style={[styles.box, { backgroundColor: '#ff0000' }]}></View>
        <View style={[styles.box, styles.middle]}></View>
        <View style={[styles.box, { backgroundColor: '#0000ff' }]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  view: {
    width: '90%',
    borderWidth: 3,
    borderColor: 'black',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'red',
    margin: 20,
  },
  second: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  third: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    backgroundColor: '#a0ffa0',
    borderWidth: 1,
    borderColor: 'red',
    padding: 3,
  },
  fourth: {
    flexDirection: 'row',
    width: 306,
    height: 206,
    alignItems: 'flex-start',
  },
  box: {
    width: 100,
    height: 100,
  },
  middle: {
    // marginTop: 100,    // Other way
    alignSelf: 'flex-end',
    backgroundColor: '#00ff00',
  },
});

export default BoxScreen;
