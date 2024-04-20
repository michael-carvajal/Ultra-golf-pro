import React from 'react';
import {StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {screenHeight, screenWidth} from "../utils/constants";

const backgroundImage = require('../assets/images/background.png');

export default function PrivacyPolicyPage() {

    return (
        <>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        opacity: 1.0,
        marginBottom: 25,
        height: Dimensions.get("screen").height * 0.3,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: screenHeight,
        width: screenWidth,
        opacity: 0.7
    },
});

