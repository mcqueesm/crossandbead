import React from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import Bead from './Bead.js';
import SmallGap from './SmallGap.js';
import LargeGap from './LargeGap.js';
import Cross from './Cross.js';
import Decade from './Decade.js';

export default function Rosary(props) {
  return (
    
    <View style={styles.container}>
      <Decade id={50} active={props.active} handlePress={props.handlePress}/>
      <Decade id={39} active={props.active} handlePress={props.handlePress}/>
      <Decade id={28} active={props.active} handlePress={props.handlePress}/>
      <Decade id={17} active={props.active} handlePress={props.handlePress}/>
      <Decade id={6} active={props.active} handlePress={props.handlePress}/>
      <Bead id={5} active={props.active} handlePress={props.handlePress}/>
      <LargeGap />
      <Bead id={4} active={props.active} handlePress={props.handlePress}/>
      <SmallGap />
      <Bead id={3} active={props.active} handlePress={props.handlePress}/>
      <SmallGap />
      <Bead id={2} active={props.active} handlePress={props.handlePress}/>
      <LargeGap />
      <Bead id={1} active={props.active} handlePress={props.handlePress}/>
      <LargeGap />
      <Cross id={0} active={props.active} handlePress={props.handlePress}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 300
  }
});
