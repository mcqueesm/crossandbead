import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function SmallGap() {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});