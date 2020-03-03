import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Segment, Right, Button } from 'native-base';

export default class RightLeftSegment extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        imageOn: this.props.imageOn
    }

    setImageOnOff(on){
        this.setState({imageOn: on});
        this.props.setImageOnOff(on);
    }

    render(){
        return (
            <View style={[styles.settingsItem, {backgroundColor: this.props.theme.textBoxColor}]}>
                <Text style={{fontSize: this.props.theme.smallFont, color: this.props.theme.fontColor, textAlignVertical: 'center', alignSelf: 'center'}}>Background Image</Text>
                <Right>
                <View style={{backgroundColor: this.props.theme.textBoxColor, flexDirection: 'row'}}>
                    <Button first active={!this.state.imageOn}
                        onPress={()=>this.setImageOnOff(false)}
                        style={[styles.button, this.state.imageOn ? {backgroundColor: this.props.theme.textBoxColor} : {backgroundColor: 'white'}] }>
                        <Text style={[this.state.imageOn ? {color: this.props.theme.fontColor} : {color: 'black'}]}
                        >Off</Text>
                    </Button>
                    <Button active={this.state.imageOn}
                        onPress={()=>this.setImageOnOff(true)}
                        style={[styles.button, !this.state.imageOn ? {backgroundColor: this.props.theme.textBoxColor} : {backgroundColor: 'white'}]}>
                        <Text style={!this.state.imageOn ? {color: this.props.theme.fontColor} : {color: 'black'}}
                        >On</Text>
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