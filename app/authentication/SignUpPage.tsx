import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Button, Dimensions} from 'react-native';
import GoogleSignUpButton from "./components/GoogleSignUpButton";
import AppleSignUpButton from "./components/AppleSignUpButton";
import {screenHeight, screenWidth} from "../utils/constants";


const ugpLogo = require('../assets/images/ugp_logo.png');
const backgroundImage = require('../assets/images/background.png');

export default function SignUpPage({navigation}: any) {
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

    function navToPrivacyPolicyPage(){

    }

    return (
        <>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}/>
            <Image source={ugpLogo} style={styles.logo}/>
            <View style={styles.container}>
                <GoogleSignUpButton/>
                <AppleSignUpButton/>

                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an Account?{' '}

                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.termsText}>
                    By signing up, you agree to UltraGolfPros{' '}
                    <TouchableOpacity onPress={() => navigation.navigate('TermsAndConditions')}>
                        <Text style={styles.underline}>
                            Terms of Service
                        </Text>
                    </TouchableOpacity>
                    {' '}
                    and {' '}
                    <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
                        <Text style={styles.underline}>
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>
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
        alignSelf: "center",
        fontSize: 20,
        color: '#000000',
        textAlign: "center",
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
    logo: {
        objectFit: 'contain',
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    loginContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        paddingTop: 5,
        margin: 0,
    }
});

