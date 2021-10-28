import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Card = props => {
    let style;
    if (Array.isArray(props.style)) {
        style = [styles.card, ...props.style];
    } else {
        style = { ...styles.card, ...props.style };
    }
    return <View style={style}>{props.children}</View>;
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',  // shadow only works on ios
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.26,
        elevation: 5,  // android only
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
});

Card.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

export default Card;