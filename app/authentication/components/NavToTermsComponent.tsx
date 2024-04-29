import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function NavToTermsComponent({navigation}: any) {
    const navigateToTerms = () => {
        console.log("Nav now")
    };


    return (
        <>
            <Text style={styles.termsText}>
                By signing up, you agree to UltraGolfPros{' '}
            </Text>

            <TouchableOpacity onPress={navigateToTerms}>
                <Text style={styles.underline}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}> and{' '}</Text>
            <TouchableOpacity onPress={navigateToTerms}>
                <Text style={styles.underline}>Privacy Policy</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    termsText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#000000',
        width: '75%',
    },
    underline: {
        textDecorationLine: 'underline',
    },
});

