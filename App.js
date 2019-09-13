import React from 'react';
import { StyleSheet, Text, View, ScrollView, Picker, Vibration } from 'react-native';
import Bead from './components/Bead.js';
import SmallGap from './components/SmallGap.js';
import LargeGap from './components/LargeGap.js';
import Cross from './components/Cross.js';
import Decade from './components/Decade.js';
import Rosary from './components/Rosary.js';
import prayers from './text/prayers.js';
import titles from './text/titles.js';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeBead: -1,
      text: 'Choose mysteries and click on cross to begin.',
      title: '',
      mystery: 'glorious'
    }
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(id){
    Vibration.vibrate(50);
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
        text: prayers.ourFather + '\n\n' + prayers.hailMary,
        title: titles[this.state.mystery][0]
      });
    }
    else if(id>=7&&id<16){
      this.setState({
        text: prayers.hailMary,
        title: titles[this.state.mystery][0]
      });
    }
    else if(id===16) {
      this.setState({
        text: prayers.gloryBe + '\n\n\n' + prayers.fatima,
        title: titles[this.state.mystery][0]
      });
    }
    else if(id===17) {
      this.setState({
        text: prayers.ourFather + '\n\n' + prayers.hailMary,
        title: titles[this.state.mystery][1]
      });
    }
    else if(id>=18&&id<27){
      this.setState({
        text: prayers.hailMary,
        title: titles[this.state.mystery][1]
      });
    }
    else if(id===27) {
      this.setState({
        text: prayers.gloryBe + '\n\n\n' + prayers.fatima,
        title: titles[this.state.mystery][1]
      });
    }
    else if(id===28) {
      this.setState({
        text: prayers.ourFather + '\n\n' + prayers.hailMary,
        title: titles[this.state.mystery][2]
      });
    }
    else if(id>=29&&id<38){
      this.setState({
        text: prayers.hailMary,
        title: titles[this.state.mystery][2]
      });
    }
    else if(id===38) {
      this.setState({
        text: prayers.gloryBe + '\n\n\n' + prayers.fatima,
        title: titles[this.state.mystery][2]
      });
    }
    else if(id===39) {
      this.setState({
        text: prayers.ourFather + '\n\n' + prayers.hailMary,
        title: titles[this.state.mystery][3]
      });
    }
    else if(id>=40&&id<49){
      this.setState({
        text: prayers.hailMary,
        title: titles[this.state.mystery][3]
      });
    }
    else if(id===49) {
      this.setState({
        text: prayers.gloryBe + '\n\n\n' + prayers.fatima,
        title: titles[this.state.mystery][3]
      });
    }
    else if(id===50) {
      this.setState({
        text: prayers.ourFather + '\n\n' + prayers.hailMary,
        title: titles[this.state.mystery][4]
      });
    }
    else if(id>=51&&id<60){
      this.setState({
        text: prayers.hailMary,
        title: titles[this.state.mystery][4]
      });
    }
    else if(id===60) {
      this.setState({
        text: prayers.gloryBe + '\n\n\n' + prayers.fatima,
        title: titles[this.state.mystery][4]
      });
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.title}</Text>
        <View style={styles.row1}>
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
          
        </View>
        <Picker
            selectedValue={this.state.mystery}
            style={styles.picker}
            onValueChange={(val, ind)=>{
              this.setState({mystery: val},()=>this.handlePress(this.state.activeBead))
            }}>
            <Picker.Item label=' Glorious Mysteries' value='glorious'/>
            <Picker.Item label='Luminous Mysteries' value='luminous'/>
            <Picker.Item label='Sorrowful Mysteries' value='sorrowful'/>
            <Picker.Item label='   Joyful Mysteries' value='joyful'/>
        </Picker>
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'

  },
  row1: {
    flex: 9,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
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
    paddingTop: 20,
    textAlign: 'justify'
  },
  picker: {
    fontSize: 40,
    height: 50,
    width: 175,
    backgroundColor: 'black',
    color: 'white'
  },
  title: {
    flex: 1,
    width: '100%',
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 30
  }
});
