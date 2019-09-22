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
            active={this.state.fabActive}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: 'black', color: 'white', borderWidth:2, borderColor:'white' }}
            position="bottomLeft"
            onPress={() => this.setState({ fabActive: !this.state.fabActive })}>
            <Icon name="rose" />
              
                <Button onPress={()=>this.setMystery('sorrowful')}
                    style={this.state.fabActive ? styles.fabActive : styles.fabInactive}>
                    <Icon name='cloudy-night'/><Text style={styles.buttonText}>Sorrowful</Text>
                </Button>
              
                <Button onPress={()=>this.setMystery('glorious')}
                    style={this.state.fabActive ? styles.fabActive : styles.fabInactive}>
                    <Icon name='sunny'/><Text style={styles.buttonText}>Glorious</Text>
                </Button>
                <Button onPress={()=>this.setMystery('joyful')}
                    style={this.state.fabActive ? styles.fabActive : styles.fabInactive}>
                    <Icon name='heart-empty'/><Text style={styles.buttonText}>Joyful</Text>
                </Button>
                <Button onPress={()=>this.setMystery('luminous')}   
                    style={this.state.fabActive ? styles.fabActive : styles.fabInactive}>
                    <Icon name='flame'/><Text style={styles.buttonText}>Luminous</Text>
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
        backgroundColor: 'black',
        color: 'white',
        marginLeft: 10
      }
      

});