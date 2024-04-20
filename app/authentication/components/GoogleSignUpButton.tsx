import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import GoogleLogo from "./GoogleLogo";

export default function GoogleSignUpButton({navigation}: any) {

    async function handleGoogleSignUp(): Promise<void> {
        //TODO: add actual sign up logic
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContents}>
                <GoogleLogo style={styles.googleLogo}/>
                <Text style={styles.loginText}>
                    Sign Up With Google
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
        backgroundColor: '#FFFFFF',
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
        color: '#000000',
    },
    googleLogo: {
        width: 30,
        height: 30,
        marginRight: 10,
    }
});

