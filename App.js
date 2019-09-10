import React from 'react';
import { StyleSheet, Text, View, ScrollView, Picker  } from 'react-native';
import Bead from './components/Bead.js';
import SmallGap from './components/SmallGap.js';
import LargeGap from './components/LargeGap.js';
import Cross from './components/Cross.js';
import Decade from './components/Decade.js';
import Rosary from './components/Rosary.js';
import prayers from './text/prayers.js'


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeBead: -1,
      text: 'Click on cross to begin',
      title: ''
    }
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(id){
    this.setState({activeBead: id});
    if(id===0) {
      this.setState({
        text: prayers.apostlesCreed,
        title: ''
      });
    }
    else if(id===1) {
      this.setState({
        text: prayers.ourFather,
        title: ''
      });
    }
    else if(id>=2 && id<5) {
      this.setState({
        text: prayers.hailMary,
        title: ''
      });
    }
    else if(id===5) {
      this.setState({
        text: prayers.gloryBe,
        title: ''
      })
    }
    else if(id===6) {
      this.setState({
        text: prayers.gloryBe,
        title: ''
      });
    }
    
  }
  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <ScrollView>
          <Text style={styles.textStyle}>{this.state.text}</Text>
          </ScrollView>
        </View>
        <ScrollView 
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(w, h) => {        
            this.scrollView.scrollToEnd();
        }}>
          <Rosary active={this.state.activeBead} handlePress={this.handlePress}/>
        </ScrollView>
        <Picker
          selectedValue='Glorious'
          style={styles.picker}>
          <Picker.Item label='Glorious'/>
          <Picker.Item label='Luminous'/>
        </Picker>
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 100
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    lineHeight: 30,
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 100
  },
  picker: {
    height: 50,
    width: 100,
    backgroundColor: 'white'
    

  }
});
