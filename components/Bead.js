import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';


export default function Bead(props) {
  return (
    <TouchableHighlight onPress={() => props.handlePress(props.id)} style={props.id<=props.active ? [styles.active, {borderColor: props.theme.rosaryColor, backgroundColor: props.theme.beadActiveColor, shadowColor: props.theme.shadowColor}]: [styles.inactive, {borderColor: props.theme.rosaryColor, shadowColor: props.theme.shadowColor}]}>
        <View></View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  inactive: {
    height: 50,
    width: 50,
    borderStyle: 'solid',
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 10,
    
    },
  active: {
    height: 50,
    width: 50,
    borderStyle: 'solid',
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 10, 
    
    
  }
});