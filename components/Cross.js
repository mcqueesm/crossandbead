import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';


export default function Cross(props) {
  return (
    <TouchableWithoutFeedback onPress={() => props.handlePress(props.id)}>
    <View style={[styles.container]}>
        <View style={props.id<=props.active ? [styles.active, {borderBottomColor: props.theme.beadActiveColor, backgroundColor: props.theme.beadActiveColor}] : [styles.top, {borderColor: props.theme.rosaryColor}]}></View>
        <View style={props.id<=props.active ? [styles.middleActive, {backgroundColor: props.theme.beadActiveColor}] : styles.middle}>
            <View style={props.id<=props.active ? [styles.active, {borderRightColor: props.theme.beadActiveColor, backgroundColor: props.theme.beadActiveColor}] : [styles.middleLeft, {borderColor: props.theme.rosaryColor}]}></View>
            <View style={props.id<=props.active ? [styles.active, {borderColor: props.theme.beadActiveColor, backgroundColor: props.theme.beadActiveColor}] : [styles.middleCenter, {}]}></View>
            <View style={props.id<=props.active ? [styles.active, {borderLeftColor: props.theme.beadActiveColor, backgroundColor: props.theme.beadActiveColor}] : [styles.middleRight, {borderColor: props.theme.rosaryColor}]}></View>
        </View>
        <View style={props.id<=props.active ? [styles.activeBottom, {borderColor: props.theme.rosaryColor, borderTopColor: props.theme.beadActiveColor, backgroundColor: props.theme.beadActiveColor}] : [styles.bottom, {borderColor: props.theme.rosaryColor}]}></View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex:1,
    width: '33.3%',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2

  },
  
  middle: {
    width: '100%',
    flex: 1,
    flexDirection: 'row'
  },
  middleActive: {
    width: '100%',
    flex: 1,
    flexDirection: 'row'
  },
  bottom: {
    flex: 2,
    width: '33.3%',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2

  },
  middleLeft: {
    width: '33.3%',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  middleCenter: {
    flex:1,
    width: '33.3%',
  },
  middleRight: {
    width: '33.3%',
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  active: {
    flex: 1,
    width: '33.3%'
  },
  activeBottom: {
    flex:2,
    width: '33.3%', 
    borderWidth: 2
  }
});