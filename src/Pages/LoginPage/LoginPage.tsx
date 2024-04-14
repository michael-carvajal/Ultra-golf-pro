import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Button, Dimensions} from 'react-native';
import {screenHeight, screenWidth} from "../../utils/consants";
import GoogleSignUpButton from "./Components/GoogleSignUpButton";
import AppleSignUpButton from "./Components/AppleSignUpButton";

const ugpLogo = require('../../assets/images/ugp_logo.png');
const backgroundImage = require('../../assets/images/background.png');

const LoginPage = ({navigation}: any) => {
    const handleLoginForm = () => {
        //TODO: add actual sign in logic
        navigation.navigate('LoginFormScreen');
    };

    const handleGoogleSignUp = async () => {
        //TODO: add actual sign up logic
        navigation.navigate('HomeScreen');
    };

    const handleSignUpForm = () => {
        navigation.navigate('SignUpFormScreen');
    };

    return (
        <>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}/>
            <View style={styles.container}>
                <GoogleSignUpButton/>
                <AppleSignUpButton/>

                <Text style={styles.loginText}>Already have an Account?{' '}
                    <TouchableOpacity>
                        <Text style={styles.loginText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </Text>

                <Text style={styles.termsText}>
                    By signing up, you agree to UltraGolfPros{' '}
                    <Text style={styles.underline}>Terms of Service</Text> and{' '}
                    <Text style={styles.underline}>Privacy Policy</Text>
                </Text>
            </View>
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
    signUpButton: {
        backgroundColor: "#000000",
        width: screenWidth * 0.75,
        height: 50,
        borderRadius: 10,
    },
    loginText: {
        verticalAlign: "bottom",
        fontSize: 18,
        color: '#000000',
    },
    termsText: {
        textAlign: "center",
        fontSize: 15,
        color: '#000000',
        width: '75%',
    },
    underline: {
        textDecorationLine: 'underline',
    },
});

export default LoginPage;
