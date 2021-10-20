// Example of using components to encapsulate styling.  See lesson 74.  Alternative approach in default-styles.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BodyText = props => {
    return <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>;
};

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans',
    }

});

export default BodyText;