import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

import Card from '../components/Card';
import BodyText from '../components/BodyText';
import TitleText from '../components/BodyText';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game Is Over</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    // source={require('../assets/success.png')}
                    // Network image test - note this does not display in the android x86 emulator
                    source={{uri:'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}}
                    style={styles.image}
                    resizeMode="cover"  // Note cover is the default
                />
            </View>
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150, // half of width and height to force a circle
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    }

});

export default GameOverScreen;
