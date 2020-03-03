import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, SafeAreaView } from 'react-native';
import { Button, Icon } from 'native-base';
import RightLeftSegment from './RightLeftSegment.js';
import ImageOnOffSegment from './ImageOnOffSegment.js';
import MeditationOnOffSegment from './MeditationOnOffSegment.js';
import ThemeSegment from './ThemeSegment.js';
import VibrationSegment from './VibrationSegment.js';

export default class SettingsScreen extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            theme: this.props.navigation.state.params.theme
        }
        this.setTheme = this.setTheme.bind(this);
    }
   
    static navigationOptions = {
        header: null
      }
    
    setTheme(dark){
        let num = dark ? 1 : 2;
        this.setState(prevState => ({darkTheme: dark, theme: {...themes[num], smallFont: prevState.theme.smallFont, largeFont: prevState.theme.largeFont, imageOpacity: prevState.theme.imageOpacity }}));
        this.props.navigation.state.params.setTheme(dark);
    }
    
    render(){
        const { params} = this.props.navigation.state;
        
        return (
            <SafeAreaView style={[styles.container, {backgroundColor: this.state.theme.background}]}>
            <View style={[styles.header, {backgroundColor: this.state.theme.textBoxColor}]}> 
                <Text style={[styles.textStyle, {color: this.state.theme.fontColor}]}>Settings</Text>
                <Button
                style={{backgroundColor: this.state.theme.textBoxColor, elevation: 0}}
                onPress={() => this.props.navigation.goBack()}
                
            >
                <Icon style={{color: this.state.theme.fontColor}} name='arrow-back' />
            </Button>
            </View>
            <View style={[styles.settingsItem, {backgroundColor: this.state.theme.textBoxColor}]}>
                <Text style={{fontSize: this.state.theme.smallFont, color: this.state.theme.fontColor, textAlignVertical: 'center', alignSelf: 'center'}}>Font Size</Text>
                    <View style={{flexDirection: 'row'}}>
                    <Button style = {[styles.button, {backgroundColor: this.state.theme.textBoxColor}]}
                        onPress={()=>{
                        if(this.state.theme.smallFont>10){
                            this.setState(prevState => ({theme:{...prevState.theme, smallFont: prevState.theme.smallFont - 2, largeFont:26}}));
                        }
                        params.decreaseFont()}}>
                            <Text style={[styles.iconText, {color: this.state.theme.fontColor}]}>-</Text>
                    </Button>
                    <Button style={[styles.button, {backgroundColor: this.state.theme.textBoxColor}]}
                        onPress={()=>{
                        if(this.state.theme.smallFont<26){
                            this.setState(prevState => ({theme:{...prevState.theme, smallFont: prevState.theme.smallFont + 2, largeFont:26}}));
                        }
                        params.increaseFont()}}>
                            <Text style={[styles.iconText, {color: this.state.theme.fontColor}]}>+</Text>
                    </Button>
                    </View>
            </View>

            <RightLeftSegment rightHanded = {params.rightHanded}
                theme={this.state.theme}
                setLeftRight = {params.setLeftRight}
            />
            
            <ImageOnOffSegment 
                theme={this.state.theme}
                imageOn={params.imageOn}
                setImageOnOff={params.setImageOnOff}
                />

            <MeditationOnOffSegment 
                theme={this.state.theme}
                meditationOn={params.meditationOn}
                setMeditationOnOff={params.setMeditationOnOff}
                />

            <ThemeSegment 
                theme={this.state.theme}
                darkTheme={params.darkTheme}
                setTheme={this.setTheme}
                />

            <VibrationSegment 
                theme={this.state.theme}
                vibrationOn={params.vibrationOn}
                vibrationOnOff={params.vibrationOnOff}
                />

            <View style={{backgroundColor: this.state.theme.textBoxColor, flex: 1, marginTop: 2}}></View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        color: 'white', 
    },
    header:{
        paddingTop: 4,
        paddingBottom: 6,
        paddingLeft: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    settingsItem:{
        flex: 0,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignContent: 'center', 
        marginTop: 2, 
        paddingTop: 4,
        paddingBottom: 4, 
        paddingLeft: 25, 

    },
    textStyle: {
        color: 'white', 
        fontSize: 26
    },
    iconStyle:{
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 2, 
        color: 'white',
        width: 50,
        marginRight: 5, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconText: {
        textAlign: 'center',
        textAlignVertical: 'center', 
        fontSize: 20
    },
    button:{
        borderRadius: 50,
        marginRight: 5,
        width: 50,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'

    },
    backButton:{

    }

});
