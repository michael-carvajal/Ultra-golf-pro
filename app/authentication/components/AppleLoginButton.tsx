import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppleLogo from "./AppleLogo";

export default function AppleSignUpButton({navigation}: any) {

    const handleGoogleSignUp = async () => {
        //TODO: add actual sign up logic
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContents}>
                <AppleLogo style={styles.googleLogo}/>
                <Text style={styles.loginText}>
                    Sign Up With Apple
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '75%',
        borderRadius: 15,
        height: 50,
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContents: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    loginText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    googleLogo: {
        width: 30,
        height: 30,
        marginRight: 10,
    }
});

