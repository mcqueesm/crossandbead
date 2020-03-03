import React from 'react';
import { View, Image } from 'react-native';

export default function MysteryImage(props) {
    
      return (
        <View>
             <Image source={require(props.image)}/>
         </View>
      );
    
  }