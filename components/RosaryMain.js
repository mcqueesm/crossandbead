import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, ScrollView, Vibration, StatusBar, Dimensions, TouchableWithoutFeedback, ImageBackground, SafeAreaView} from 'react-native';
import { AppLoading } from 'expo';
import {Container, Header, Body, Title, Icon, Button} from 'native-base';
import { FlingGestureHandler, Directions, State } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Rosary from './Rosary.js';
import prayers2 from '../text/prayers2.js';
import titles from '../text/titles.js';
import MysteryFab from './MysteryFab';
import themes from '../themes/themes.js';
import determineIcon from '../functions/determineIcon.js';
import scrollToBead from '../functions/scrollToBead.js';
const { width, height } = Dimensions.get('window');



export default class RosaryMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isReady: false,
      activeBead: -1,
      text: [],
      title: this.todaysMystery()[1],
      mystery: this.todaysMystery()[0],
      submystery: null,
      fabActive: false,
      rightHanded: true,
      imageOn: true,
      meditationOn: true,
      darkTheme: true,
      vibrationOn: true,
      theme: {
        smallFont: 18,
        largeFont: 26,
        background: '#121212', 
        titleColor: 'white',
        subTitleFontColor: '#58b8fc',
        fontColor: '#f2f2f2',
        rosaryColor: 'white',
        textBoxColor: '#3e403f',
        headerColor: '#3e403f',
        imageOpacity: 0,
        beadActiveColor: 'white',
        shadowColor: 'white'
      }
      
    }
    

    
    this.handlePress = this.handlePress.bind(this);
    this.setMystery = this.setMystery.bind(this);
    this.todaysMystery = this.todaysMystery.bind(this);
    this.increaseFont = this.increaseFont.bind(this);
    this.decreaseFont = this.decreaseFont.bind(this);
    this.setLeftRight = this.setLeftRight.bind(this);
    this.setImageOnOff = this.setImageOnOff.bind(this);
    this.setMeditationOnOff = this.setMeditationOnOff.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.handleRightSwipe = this.handleRightSwipe.bind(this);
    this.handleLeftSwipe = this.handleLeftSwipe.bind(this);
    this.vibrationOnOff = this.vibrationOnOff.bind(this);
  }

  

  static navigationOptions = {
    header: null
  }
  async componentDidMount() {


    StatusBar.setHidden(true);
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });

    this._retrieveData();

    
  }

  todaysMystery(){
    let date = new Date();
    let weekday = date.getDay();
    if (weekday == 1 || weekday == 6) {
      return ["joyful", "Joyful"];
    }
    if (weekday == 2|| weekday == 5) {
      return ["sorrowful", "Sorrowful"];
    }
    if (weekday == 3 || weekday == 0) {
      return ["glorious", "Glorious"];
    }
    if (weekday == 4) {
      return ["luminous", "Luminous"];
    }
  }
  handlePress(id){

      if(this.state.vibrationOn && (id===1 || id===5 || id===16 || id===27 || id===38 || id===49 || id===60)){
        Haptics.notificationAsync("warning");
      }
      else if(this.state.vibrationOn){
        Haptics.selectionAsync();
      }
    
    this.setState({activeBead: id});
    if(id===-1){
      this.setState({
        title: this.state.mystery[0].toUpperCase() + this.state.mystery.slice(1, this.state.mystery.length),
        submystery: null
      });
    }
    if(id===0) {
      this.setState({
        text: [prayers2["Apostle's Creed"]],
        title: this.state.mystery[0].toUpperCase() + this.state.mystery.slice(1, this.state.mystery.length),
        submystery: null
      });
    }
    else if(id===1) {
      this.setState({
        text: [prayers2["Our Father"]],
        title: this.state.mystery[0].toUpperCase() + this.state.mystery.slice(1, this.state.mystery.length),
        submystery: null
      });
      
    }
    else if(id>=2 && id<5) {
      this.setState({
        text: [prayers2["Hail Mary"]],
        title: this.state.mystery[0].toUpperCase() + this.state.mystery.slice(1, this.state.mystery.length),
        submystery: null
      });
    }
    else if(id===5) {
      this.setState({
        text: [prayers2["Glory Be"]],
        title: this.state.mystery[0].toUpperCase() + this.state.mystery.slice(1, this.state.mystery.length),
        submystery: null
      })
    }
    else if(id===6) {
      this.setState({
        text: [prayers2["Our Father"], prayers2["Hail Mary"]],
        title: titles[this.state.mystery][0],
        submystery: this.state.mystery + '1'
      });
      if(this.state.meditationOn){
        this.props.navigation.navigate('ModalScreen', {mystery: this.state.mystery + '1', title: titles[this.state.mystery][0], theme: this.state.theme});
      }
    }
    else if(id>=7&&id<16){
      this.setState({
        text: [prayers2["Hail Mary"]],
        title: titles[this.state.mystery][0],
        submystery: this.state.mystery + '1'
      });
    }
    else if(id===16) {
      this.setState({
        text: [prayers2["Glory Be"], prayers2["Fatima Prayer"]],
        title: titles[this.state.mystery][0],
        submystery: this.state.mystery + '1'
      });
    }
    else if(id===17) {
      this.setState({
        text: [prayers2["Our Father"], prayers2["Hail Mary"]],
        title: titles[this.state.mystery][1],
        submystery: this.state.mystery + '2'
      });
      if(this.state.meditationOn){
      this.props.navigation.navigate('ModalScreen', {mystery: this.state.mystery + '2', title: titles[this.state.mystery][1],theme: this.state.theme});
      }
    }
    else if(id>=18&&id<27){
      this.setState({
        text: [prayers2["Hail Mary"]],
        title: titles[this.state.mystery][1],
        submystery: this.state.mystery + '2',
        
      });
    }
    else if(id===27) {
      this.setState({
        text: [prayers2["Glory Be"], prayers2["Fatima Prayer"]],
        title: titles[this.state.mystery][1],
        submystery: this.state.mystery + '2'
      });
    }
    else if(id===28) {
      this.setState({
        text: [prayers2["Our Father"], prayers2["Hail Mary"]],
        title: titles[this.state.mystery][2],
        submystery: this.state.mystery + '3'
      });
      if(this.state.meditationOn){
        this.props.navigation.navigate('ModalScreen', {mystery: this.state.mystery + '3', title: titles[this.state.mystery][2], theme: this.state.theme});
      }
    }
    else if(id>=29&&id<38){
      this.setState({
        text: [prayers2["Hail Mary"]],
        title: titles[this.state.mystery][2],
        submystery: this.state.mystery + '3'
      });
    }
    else if(id===38) {
      this.setState({
        text: [prayers2["Glory Be"], prayers2["Fatima Prayer"]],
        title: titles[this.state.mystery][2],
        submystery: this.state.mystery + '3'
      });
    }
    else if(id===39) {
      this.setState({
        text: [prayers2["Our Father"], prayers2["Hail Mary"]],
        title: titles[this.state.mystery][3],
        submystery: this.state.mystery + '4'
      });
      if(this.state.meditationOn){
      this.props.navigation.navigate('ModalScreen', {mystery: this.state.mystery + '4', title: titles[this.state.mystery][3], theme: this.state.theme});
      }
    }
    else if(id>=40&&id<49){
      this.setState({
        text: [prayers2["Hail Mary"]],
        title: titles[this.state.mystery][3],
        submystery: this.state.mystery + '4'
      });
    }
    else if(id===49) {
      this.setState({
        text: [prayers2["Glory Be"], prayers2["Fatima Prayer"]],
        title: titles[this.state.mystery][3],
        submystery: this.state.mystery + '4'
      });
    }
    else if(id===50) {
      this.setState({
        text: [prayers2["Our Father"], prayers2["Hail Mary"]],
        title: titles[this.state.mystery][4],
        submystery: this.state.mystery + '5'
      });
      if(this.state.meditationOn){
      this.props.navigation.navigate('ModalScreen', {mystery: this.state.mystery + '5', title: titles[this.state.mystery][4], theme: this.state.theme});
      }
    }
    else if(id>=51&&id<60){
      this.setState({
        text: [prayers2["Hail Mary"]],
        title: titles[this.state.mystery][4],
        submystery: this.state.mystery + '5'
      });
    }
    else if(id===60) {
      this.setState({
        text: [prayers2["Glory Be"], prayers2["Fatima Prayer"], prayers2["Salve Regina"], prayers2["Closing Prayer"]],
        title: titles[this.state.mystery][4],
        submystery: this.state.mystery + '5'
      });
    }
    
  }
  _storeData = async (obj) => {
    try {
      AsyncStorage.setItem('rosarySave', JSON.stringify(obj));
    } catch (error) {
      // Error saving data
    }
  };

  _retrieveData = async () => {
   
    try {
      let value = await AsyncStorage.getItem('rosarySave');
      if (value !== null) {
        // We have data!!
        value = JSON.parse(value);
        console.log("we're in retrieve, returning: ", value);
        this.setState({
          rightHanded: value.rightHanded,
          meditationOn: value.meditationOn,
          imageOn: value.imageOn,
          darkTheme: value.darkTheme,
          theme: value.theme,

        });
      }
     
    } catch (error) {
      // Error retrieving data
    }
  };

  vibrationOnOff(on){
    this.setState({vibrationOn: on})
    let saveObj = {
      vibrationOn: on,
      rightHanded: this.state.rightHanded, 
      imageOn: this.state.imageOn, 
      meditationOn: this.state.meditationOn, 
      darkTheme: this.state.darkTheme, 
      theme: this.state.theme};
    this._storeData(saveObj);
  }
  setTheme(dark){
    let num = dark ? 1 : 2;
    this.setState(prevState => ({darkTheme: dark, theme: {...themes[num], smallFont: prevState.theme.smallFont, largeFont: prevState.theme.largeFont, imageOpacity: prevState.theme.imageOpacity }}),
      ()=>{
        let saveObj = {
          vibrationOn: this.state.vibrationOn,
          rightHanded: this.state.rightHanded, 
          imageOn: this.state.imageOn, 
          meditationOn: this.state.meditationOn, 
          darkTheme: this.state.darkTheme, 
          theme: this.state.theme
        };
        this._storeData(saveObj);
        }
     
    );
    
    
  }

  setLeftRight(side){
    this.setState({rightHanded: side})
    let saveObj = {
      vibrationOn: this.state.vibrationOn,
      rightHanded: side, 
      imageOn: this.state.imageOn, 
      meditationOn: this.state.meditationOn, 
      darkTheme: this.state.darkTheme, 
      theme: this.state.theme};
    this._storeData(saveObj);
    
  }

  setImageOnOff(on){
    this.setState({imageOn: on});
    let saveObj = {
      vibrationOn: this.state.vibrationOn,
      rightHanded: this.state.rightHanded, 
      imageOn: on, 
      meditationOn: this.state.meditationOn, 
      darkTheme: this.state.darkTheme, 
      theme: this.state.theme};
    this._storeData(saveObj);
  }

  setMeditationOnOff(on){
    this.setState({meditationOn: on});
    let saveObj = {
      vibrationOn: this.state.vibrationOn,
      rightHanded: this.state.rightHanded, 
      imageOn: this.state.imageOn, 
      meditationOn: on, 
      darkTheme: this.state.darkTheme, 
      theme: this.state.theme};
    this._storeData(saveObj);
  }
  setMystery(mystery){
    this.setState({mystery}, ()=>{
      this.handlePress(this.state.activeBead);
    });
  }

  increaseFont(){
    if(this.state.theme.smallFont<26){
      this.setState(prevState => ({theme: {...prevState.theme, smallFont: prevState.theme.smallFont + 2}}),
        ()=>{
          let saveObj = {
            vibrationOn: this.state.vibrationOn,
            rightHanded: this.state.rightHanded, 
            imageOn: this.state.imageOn, 
            meditationOn: this.state.meditationOn, 
            darkTheme: this.state.darkTheme, 
            theme: this.state.theme};
          this._storeData(saveObj);
        });
    
    }
  }

  decreaseFont(){
    if(this.state.theme.smallFont>10){
      this.setState(prevState => ({theme: {...prevState.theme, smallFont: prevState.theme.smallFont - 2}}),
        ()=>{
          let saveObj = {
            vibrationOn: this.state.vibrationOn,
            rightHanded: this.state.rightHanded, 
            imageOn: this.state.imageOn, 
            meditationOn: this.state.meditationOn, 
            darkTheme: this.state.darkTheme, 
            theme: this.state.theme};
          this._storeData(saveObj);
        }
      );
    }
  }

  handleRightSwipe(event){
    if(this.state.activeBead > 0 && event.state===State.ACTIVE){
      this.handlePress(this.state.activeBead - 1);
      let position = scrollToBead(this.state.activeBead - 1);
      this.scrollView.scrollTo({y: position, animated: true});
    }
  }

  handleLeftSwipe(event){
    if(this.state.activeBead < 60  && event.state===State.ACTIVE){
      this.handlePress(this.state.activeBead + 1);
      let position = scrollToBead(this.state.activeBead + 1);
      console.log(position);
      this.scrollView.scrollTo({y: position, animated: true});
    }
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    let imageFile;
    let imageOpacity;
    if(this.state.submystery && this.state.imageOn){
      imageFile = determineIcon(this.state.submystery);
      imageOpacity = this.state.darkTheme ? 0.7 : 0.7;
    }
    else {
      imageFile = require('../pictures/sorrowful1.jpg');
      imageOpacity = 0
    }
    const prayerText = this.state.text ? this.state.text.map((p, i)=>{
      let title = Object.keys(prayers2).find(k=>prayers2[k]===p)
      return(
        <View key={i} style={[styles.textBox, {backgroundColor: this.state.theme.textBoxColor}]}>
          <Text style={[styles.textStyle, {fontSize: this.state.theme.smallFont, fontWeight: 'bold', color: this.state.theme.subTitleFontColor}]}>{title}</Text>
          <Text style={[styles.textStyle, {fontSize: this.state.theme.smallFont, color: this.state.theme.fontColor}]}>{p}</Text>
        </View>
      )
    }) : null;
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: this.state.theme.background}]}>
        
        <ImageBackground source={imageFile} style={{width: '100%', height: '100%'}} imageStyle={{marginTop: 30, opacity: imageOpacity, height: height}}>
        
        <View style={[styles.header, {color: this.state.theme.titleColor, backgroundColor: this.state.theme.headerColor} ]}>
          
            <Text style={{fontSize:this.state.theme.largeFont, color: this.state.theme.titleColor, textAlign: 'left'}}>{this.state.title}</Text>
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("SettingsScreen", {theme:this.state.theme, increaseFont: this.increaseFont, decreaseFont: this.decreaseFont, rightHanded: this.state.rightHanded, setLeftRight: this.setLeftRight, imageOn: this.state.imageOn, setImageOnOff: this.setImageOnOff, meditationOn: this.state.meditationOn, setMeditationOnOff: this.setMeditationOnOff, setTheme: this.setTheme, darkTheme: this.state.darkTheme, vibrationOn: this.state.vibrationOn, vibrationOnOff: this.vibrationOnOff})} 
              >
                <View style={{backgroundColor: this.state.theme.headerColor, position: 'absolute', height: 30, width: 30, right: 10, top: 7}}><Icon name="more" style={{color: this.state.theme.titleColor}}/></View>
            </TouchableWithoutFeedback>
        </View>
        
          
        <FlingGestureHandler
          direction={Directions.RIGHT}
          onHandlerStateChange={({ nativeEvent }) => this.handleRightSwipe(nativeEvent)}
          >
        <FlingGestureHandler
          direction={Directions.LEFT}
          onHandlerStateChange={({ nativeEvent }) => this.handleLeftSwipe(nativeEvent)}
          >
        
        <View  style={styles.row1}>
          {this.state.rightHanded ? (<View style={styles.textContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {this.state.text.length!==0 ? (prayerText) : (<View style={[styles.textBox, {backgroundColor: this.state.theme.textBoxColor }]}>
                <Text style={{fontSize: this.state.theme.smallFont, color: this.state.theme.fontColor}}>Choose mysteries and touch cross to begin. You can also swipe left and right to change beads.</Text>
                </View>)}
            </ScrollView>
          </View>) : null}
          <ScrollView
            scrollToOverflowEnabled={true}
            showsVerticalScrollIndicator={false}
            ref={ref => this.scrollView = ref}
            onContentSizeChange={(w, h) => {        
              this.scrollView.scrollToEnd();
          }}>
            <Rosary active={this.state.activeBead} handlePress={this.handlePress} theme={this.state.theme}/>
          </ScrollView>
          {!this.state.rightHanded ? (<View style={styles.textContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {this.state.text.length!==0 ? (prayerText) : (<View style={[styles.textBox, {backgroundColor: this.state.theme.textBoxColor }]}><Text style={{fontSize: this.state.theme.smallFont, color: this.state.theme.fontColor}}>Choose mysteries and touch cross to begin.</Text></View>)}
            </ScrollView>
          </View>) : null}
          
        </View>
        </FlingGestureHandler>
        </FlingGestureHandler>
        {/*<View style={styles.footer}></View>*/}
        <MysteryFab setMystery={this.setMystery} theme={this.state.theme} rightHanded={this.state.rightHanded}/>
          
          
        </ImageBackground>
        
      </SafeAreaView>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  row1: {
    flex: 7,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 100,
    borderRadius: 5,
    paddingTop:30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 70
  },
  textBox: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    opacity: 0.8

  },
  textStyle: {
    lineHeight: 30,
    textAlign: 'left'
  },
  header: {
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 4,
    paddingBottom: 6,
    paddingLeft: 25,
    paddingRight: 70
   
  },
  footer: {
    flex:1,
    alignItems:'center',
    color: 'white',
    height: 70
    
  }
  
  
});
