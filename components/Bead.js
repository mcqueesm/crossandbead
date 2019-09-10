import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default function Bead(props) {
  return (
    <TouchableHighlight onPress={() => props.handlePress(props.id)}>
        <View style={props.id<=props.active ? styles.active : styles.inactive}></View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactive: {
    height: 50,
    width: 50,
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "white",
    elevation: 1,
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97
    },
  active: {
    height: 50,
    width: 50,
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "white",
    elevation: 1,
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97
    
  }
});