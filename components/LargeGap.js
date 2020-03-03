import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function LargeGap(props) {
  return (
    <View style={[styles.container, {backgroundColor: props.theme.rosaryColor}]}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});