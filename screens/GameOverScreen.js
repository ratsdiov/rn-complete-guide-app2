import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

import Card from '../components/Card';
import BodyText from '../components/BodyText'
import TitleText from '../components/BodyText'


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game Is Over</TitleText>
            <Image source={require('../assets/success.png')} />
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

});

export default GameOverScreen;
