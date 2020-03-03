import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Right, Button } from 'native-base';

export default class ThemeSegment extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        darkTheme: this.props.darkTheme
    }

    setTheme(dark){
        this.setState({darkTheme: dark});
        this.props.setTheme(dark);
    }

    render(){
        return (
            <View style={[styles.settingsItem, {backgroundColor: this.props.theme.textBoxColor}]}>
                <Text style={{fontSize: this.props.theme.smallFont, color: this.props.theme.fontColor, textAlignVertical: 'center', alignSelf: 'center'}}>Theme</Text>
                <Right>
                <View style={{backgroundColor: this.props.theme.textBoxColor, flexDirection: 'row'}}>
                    <Button first active={!this.state.darkTheme}
                        onPress={()=>this.setTheme(false)}
                        style={[styles.button, this.state.darkTheme ? {backgroundColor: this.props.theme.textBoxColor} : {backgroundColor: 'white'}] }>
                        <Text style={[this.state.darkTheme ? {color: this.props.theme.fontColor} : {color: 'black'}]}
                        >Light</Text>
                    </Button>
                    <Button active={this.state.darkTheme}
                        onPress={()=>this.setTheme(true)}
                        style={[styles.button, !this.state.darkTheme ? {backgroundColor: this.props.theme.textBoxColor} : {backgroundColor: this.props.theme.fontColor}]}>
                        <Text style={!this.state.darkTheme ? {color: this.props.theme.fontColor} : {color: 'black'}}
                        >Dark</Text>
                    </Button>
                    
                </View>
                </Right>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    settingsItem:{
        flex: 0,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignContent: 'center', 
        marginTop: 2, 
        paddingTop: 4,
        paddingBottom: 4, 
        paddingLeft: 25
    },
    button:{
        borderRadius: 50,
        marginRight: 5,
        width: 50,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }

})