import React from 'react';
import { StyleSheet, View} from 'react-native';
import Bead from './Bead.js';
import SmallGap from './SmallGap.js';
import LargeGap from './LargeGap.js';


export default function Decade(props) {
    let i = props.id;
    const nine = [];
    for (let x=i+9; x>=i+1; x--){
        nine.push(x);
    }
    const nineBeads = nine.map(id => {
        return (
        <View style={styles.container} key={id}>
            <Bead id={id} active={props.active} handlePress={props.handlePress}/>
            <SmallGap />
        </View>
        )
    });
  return (
    <View style={styles.container}>
        <Bead id={i+10} active={props.active} handlePress={props.handlePress}/>
        <LargeGap />
        {nineBeads}
        <Bead id={i} active={props.active} handlePress={props.handlePress}/>
        <LargeGap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});