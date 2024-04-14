import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const GoogleSignUpButton = ({navigation}: any) => {

    const handleGoogleSignUp = async () => {
        //TODO: add actual sign up logic
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.loginText}>
                    Sign Up With Google
                </Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        width: "75%",
        borderRadius: 15,
        height: 50,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    loginText: {
        fontSize: 18,
        color: '#000000',
    },

});

export default GoogleSignUpButton;


