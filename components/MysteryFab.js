import React from 'react';
import { StyleSheet, Text} from 'react-native';
import {Fab, Icon, Button} from 'native-base';
export default class MysteryFab extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fabActive: false
        }
        this.setMystery = this.setMystery.bind(this);
    }
    setMystery(mystery){
        this.props.setMystery(mystery);
        this.setState({fabActive: false});
    }
    render(){
    return (
        <Fab 
            containerStyle={{width: 140, justifyContent: 'flex-end', alignItems: this.props.rightHanded ? 'flex-start' : 'flex-end'}}
            active={this.state.fabActive}
            direction="up"
            style={{ backgroundColor: this.props.theme.textBoxColor, color: 'white', borderWidth:2, borderColor:'white' }}
            position={this.props.rightHanded ? "bottomLeft" : "bottomRight"}
            onPress={() => this.setState({ fabActive: !this.state.fabActive })}>
            <Icon style={{color: this.props.theme.fontColor}} name="rose" />
                
                <Button onPress={()=>this.setMystery('sorrowful')}
                    style={this.state.fabActive ? [styles.fabActive, {backgroundColor: this.props.theme.textBoxColor}] : styles.fabInactive}>
                    <Icon name='cloudy-night'/><Text style={[styles.buttonText, {color: this.props.theme.fontColor}]}>Sorrowful</Text>
                </Button>
              
                <Button onPress={()=>this.setMystery('glorious')}
                    style={this.state.fabActive ? [styles.fabActive, {backgroundColor: this.props.theme.textBoxColor}] : styles.fabInactive}>
                    <Icon name='sunny'/><Text style={[styles.buttonText, {color: this.props.theme.fontColor}]}>Glorious</Text>
                </Button>
                <Button onPress={()=>this.setMystery('joyful')}
                    style={this.state.fabActive ? [styles.fabActive, {backgroundColor: this.props.theme.textBoxColor}] : styles.fabInactive}>
                    <Icon name='heart-empty'/><Text style={[styles.buttonText, {color: this.props.theme.fontColor}]}>Joyful</Text>
                </Button>
                <Button onPress={()=>this.setMystery('luminous')}   
                    style={this.state.fabActive ? [styles.fabActive, {backgroundColor: this.props.theme.textBoxColor}] : styles.fabInactive}>
                    <Icon name='flame'/><Text style={[styles.buttonText, {color: this.props.theme.fontColor}]}>Luminous</Text>
              </Button>
              
          </Fab>
        );
    }
}

const styles = StyleSheet.create({
    fabActive:{
        width: 125,
        backgroundColor: 'black',
        color: 'white',
        borderWidth: 1,
        borderColor: 'white'
      },
      fabInactive:{
        height: 0,
        width: 0
      },
      buttonText: {
        color: 'white',
        marginLeft: 10
      }
      

});