import React from 'react';
import { StyleSheet, Text, View, ScrollView, Vibration, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import {Container, Header, Body, Title} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Rosary from './components/Rosary.js';
import prayers2 from './text/prayers2.js';
import titles from './text/titles.js';
import MysteryFab from './components/MysteryFab';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isReady: false,
      activeBead: -1,
      text: 'Choose mysteries and click on cross to begin.',
      title: '',
      mystery: 'glorious',
      fabActive: false
    }
    this.handlePress = this.handlePress.bind(this);
    this.setMystery = this.setMystery.bind(this);
  }

  async componentDidMount() {
    StatusBar.setHidden(true);
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  handlePress(id){
    Vibration.vibrate(50);
    this.setState({activeBead: id});
    if(id===0) {
      this.setState({
        text: prayers2.apostlesCreed,
        title: ''
      });
    }
    else if(id===1) {
      this.setState({
        text: prayers2.ourFather,
        title: ''
      });
    }
    else if(id>=2 && id<5) {
      this.setState({
        text: prayers2.hailMary,
        title: ''
      });
    }
    else if(id===5) {
      this.setState({
        text: prayers2.gloryBe,
        title: ''
      })
    }
    else if(id===6) {
      this.setState({
        text: prayers2.ourFather + '\n\n' + prayers2.hailMary,
        title: titles[this.state.mystery][0]
      });
    }
    else if(id>=7&&id<16){
      this.setState({
        text: prayers2.hailMary,
        title: titles[this.state.mystery][0]
      });
    }
    else if(id===16) {
      this.setState({
        text: prayers2.gloryBe + '\n\n\n' + prayers2.fatima,
        title: titles[this.state.mystery][0]
      });
    }
    else if(id===17) {
      this.setState({
        text: prayers2.ourFather + '\n\n' + prayers2.hailMary,
        title: titles[this.state.mystery][1]
      });
    }
    else if(id>=18&&id<27){
      this.setState({
        text: prayers2.hailMary,
        title: titles[this.state.mystery][1]
      });
    }
    else if(id===27) {
      this.setState({
        text: prayers2.gloryBe + '\n\n\n' + prayers2.fatima,
        title: titles[this.state.mystery][1]
      });
    }
    else if(id===28) {
      this.setState({
        text: prayers2.ourFather + '\n\n' + prayers2.hailMary,
        title: titles[this.state.mystery][2]
      });
    }
    else if(id>=29&&id<38){
      this.setState({
        text: prayers2.hailMary,
        title: titles[this.state.mystery][2]
      });
    }
    else if(id===38) {
      this.setState({
        text: prayers2.gloryBe + '\n\n\n' + prayers2.fatima,
        title: titles[this.state.mystery][2]
      });
    }
    else if(id===39) {
      this.setState({
        text: prayers2.ourFather + '\n\n' + prayers2.hailMary,
        title: titles[this.state.mystery][3]
      });
    }
    else if(id>=40&&id<49){
      this.setState({
        text: prayers2.hailMary,
        title: titles[this.state.mystery][3]
      });
    }
    else if(id===49) {
      this.setState({
        text: prayers2.gloryBe + '\n\n\n' + prayers2.fatima,
        title: titles[this.state.mystery][3]
      });
    }
    else if(id===50) {
      this.setState({
        text: prayers2.ourFather + '\n\n' + prayers2.hailMary,
        title: titles[this.state.mystery][4]
      });
    }
    else if(id>=51&&id<60){
      this.setState({
        text: prayers2.hailMary,
        title: titles[this.state.mystery][4]
      });
    }
    else if(id===60) {
      this.setState({
        text: prayers2.gloryBe + '\n\n\n' + prayers2.fatima,
        title: titles[this.state.mystery][4]
      });
    }
    
  }

  setMystery(mystery){
    this.setState({mystery}, ()=>{
      this.handlePress(this.state.activeBead);
    });
  }

  render() {

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container >
        
        <View style={styles.header}>
          
            <Text style={{color:'white', fontSize:25, textAlign: 'center'}}>{this.state.title}</Text>
          
        </View>
        
        <View  style={styles.row1}>
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
        
        <MysteryFab setMystery={this.setMystery}/>
        
          {/*<Picker
              selectedValue={this.state.mystery}
              style={styles.picker}
              onValueChange={(val, ind)=>{
                this.setState({mystery: val},()=>this.handlePress(this.state.activeBead))
              }}>
              <Picker.Item label=' Glorious Mysteries' value='glorious'/>
              <Picker.Item label='Luminous Mysteries' value='luminous'/>
              <Picker.Item label='Sorrowful Mysteries' value='sorrowful'/>
              <Picker.Item label='   Joyful Mysteries' value='joyful'/>
            </Picker>*/}
          
          
       
      </Container>
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
    width:175,
    backgroundColor: 'black',
    color: 'white'
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    paddingTop: 15
   
  },
  footer: {
    flex:1,
    alignItems:'center',
    alignItems:'center',
    backgroundColor: 'black',
    color: 'white',
    height: 50
    
  }
  
  
});
