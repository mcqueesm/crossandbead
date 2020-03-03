import React from 'react';
import {  Animated, View, Text, Image, Dimensions, FlatList, StyleSheet, ScrollView, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { Icon, Button } from 'native-base';
import passages from '../text/passages.js';
import determineIcon from '../functions/determineIcon.js';
const { width, height } = Dimensions.get('window');


export default class ModalScreen extends React.Component {
    static navigationOptions = {
        header: null
      }
    scrollX = new Animated.Value(0)
    

    render() {
        const { navigation } = this.props;
        const { params} = this.props.navigation.state;
        let name = navigation.getParam('mystery', '');
        let title = navigation.getParam('title', '');
        let filename = determineIcon(name);
        
       
        
        let bibleList = passages[name].map((x, i)=><ScrollView key={i} style={{backgroundColor: params.theme.textBoxColor}}><View  style={styles.viewpage}><Text style={[styles.verses, {fontSize: params.theme.smallFont, color: params.theme.fontColor}]}>{x[0]}</Text><Text style={[styles.passages, {fontSize: params.theme.smallFont, color: params.theme.fontColor}]}>{x[1]}</Text></View></ScrollView>);
        let position = Animated.divide(this.scrollX, width);
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: params.theme.background}}>
            <View style={[styles.header, {backgroundColor: params.theme.headerColor}]}>
                <Text style={{width: width - 100, fontSize: 26, paddingTop: 4, paddingBottom: 6, color: params.theme.fontColor}}>{title}</Text>
                <Button
                style={{backgroundColor: params.theme.textBoxColor, marginLeft: 10, elevation: 0}}
                onPress={() => this.props.navigation.goBack()}
                
            >
                <Icon style={{color: params.theme.fontColor}}name='arrow-back' />
                </Button>
            </View>
            <View style={styles.row1}>
            <Image source={filename} 
                style={{height: width}}
                resizeMode="contain"/>
            <ScrollView
                style={{flex: 1, width: width}}
                horizontal={true}
                pagingEnabled={true}
                snapToInterval={width}
                decelerationRate={0.83}
                snapToAlignment={"start"}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event( // Animated.event returns a function that takes an array where the first element...
                    [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
                )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
                scrollEventThrottle={16}>
                {bibleList}
            </ScrollView>
            {passages[name].length > 1 ? (<View style={{width, flexDirection: 'row', backgroundColor: params.theme.textBoxColor, justifyContent: 'center'}}>
            {passages[name].map((_, i) => {
                let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
                outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
                extrapolate: 'clamp' // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
                });
                return (
                <Animated.View
                    key={i}
                    style={{ opacity, height: 10, width: 10, backgroundColor: 'white', margin: 8, borderRadius: 5 }}
                />
                );
            })}
            </View>) : null}
            
            </View>
            </SafeAreaView>
      );
    }
  }

const styles = StyleSheet.create({

header: {
    paddingTop: 4,
    paddingBottom: 6,
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
    
},
row1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
    
},
verses: {
  color: 'white',
  fontWeight: 'bold',

},
passages:{
    color: 'white',
    textAlign: 'left'
},
viewpage:{
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
}

});
