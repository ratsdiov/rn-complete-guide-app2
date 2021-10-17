import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number!'> </Header>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: 0,
    // borderWidth: 5,
    // borderColor: 'blue'
    //backgroundColor: 'blue'
  }
});
