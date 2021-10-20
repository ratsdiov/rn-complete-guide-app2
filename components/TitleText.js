// Example of using components to encapsulate styling.  See lesson 74.  Alternative approach in default-styles.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleText = props => {
    return <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
    }

});

export default TitleText;