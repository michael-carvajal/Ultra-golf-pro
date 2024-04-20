import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function NavToLoginComponent({navigation}: any) {
    const navigateToLogin = () => {
    };

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an Account?{' '}
            </Text>
            <TouchableOpacity onPress={navigateToLogin}>
                <Text style={styles.loginText}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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

