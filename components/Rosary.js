import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Bead from './Bead.js';
import SmallGap from './SmallGap.js';
import LargeGap from './LargeGap.js';
import Cross from './Cross.js';
import Decade from './Decade.js';

export default function Rosary(props) {
  return (
    
    <View style={[styles.container]}>
      
      <Decade id={50} active={props.active} handlePress={props.handlePress} theme={props.theme}/>
      <Decade id={39} active={props.active} handlePress={props.handlePress} theme={props.theme}/>
      <Decade id={28} active={props.active} handlePress={props.handlePress} theme={props.theme}/>
      <Decade id={17} active={props.active} handlePress={props.handlePress} theme={props.theme}/>
      <Decade id={6} active={props.active} handlePress={props.handlePress} theme={props.theme}/>
      <Bead id={5} active={props.active} handlePress={props.handlePress} theme={props.theme}/>
      <LargeGap theme={props.theme}/>
      <Bead id={4} active={props.active} handlePress={props.handlePress} theme={props.theme}/>
      <SmallGap theme={props.theme}/>
      <Bead id={3} active={props.active} handlePress={props.handlePress} theme={props.theme}/>
      <SmallGap theme={props.theme}/>
      <Bead id={2} active={props.active} handlePress={props.handlePress} theme={props.theme}/>
      <LargeGap theme={props.theme}/>
      <Bead id={1} active={props.active} handlePress={props.handlePress} theme={props.theme}/>
      <LargeGap theme={props.theme}/>
      <Cross id={0} active={props.active} handlePress={props.handlePress} theme={props.theme}/>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 300
  }
});
