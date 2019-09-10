import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default function Cross(props) {
  return (
    <TouchableHighlight onPress={() => props.handlePress(props.id)}>
    <View style={styles.container}>
        <View style={props.id<=props.active ? styles.active : styles.top}></View>
        <View style={props.id<=props.active ? styles.middleActive : styles.middle}>
            <View style={props.id<=props.active ? styles.active : styles.middleLeft}></View>
            <View style={props.id<=props.active ? styles.active : styles.middleCenter}></View>
            <View style={props.id<=props.active ? styles.active : styles.middleRight}></View>
        </View>
        <View style={props.id<=props.active ? styles.activeBottom : styles.bottom}></View>
    </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 75,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex:1,
    width: '33.3%',
    borderColor: 'white',
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
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  bottom: {
    flex: 2,
    width: '33.3%',
    borderColor: 'white',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2

  },
  middleLeft: {
    width: '33.3%',
    borderColor: 'white',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  middleCenter: {
    flex:1,
    width: '33.3%',
    backgroundColor: 'black'
  },
  middleRight: {
    width: '33.3%',
    borderColor: 'white',
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  active: {
    flex: 1,
    width: '33.3%',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2
  },
  activeBottom: {
    flex:2,
    width: '33.3%',
    backgroundColor: 'white'
  }
});