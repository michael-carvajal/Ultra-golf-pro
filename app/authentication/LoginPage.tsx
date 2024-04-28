import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Button,
    Dimensions,
    TextInput
} from 'react-native';
import GoogleSignUpButton from "./components/GoogleSignUpButton";
import AppleSignUpButton from "./components/AppleSignUpButton";
import {screenHeight, screenWidth} from "../utils/constants";
import { saveData, getData } from '../utils/localStorageController';


const ugpLogo = require('../assets/images/ugp_logo.png');
const backgroundImage = require('../assets/images/background.png');
export default function LoginPage({navigation}: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log('handle login')
        console.log(email, password);
    
        const response = await fetch('http://dev.ultragolfpro.com/account/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
        const data = await response.json();
    
        console.log(data);
    
        if (data.token) {
          await saveData('token', data.token);
    
          const token = await getData('token');
          const response = await fetch('http://dev.ultragolfpro.com/account/me', {
            headers: {
              'Authorization': token!
            }
          })
          const userData = await response.json();
          await saveData('user', JSON.stringify(userData));
    
          const localUser = await getData('user')
          console.log('user datya from local stoarege =====>', localUser);
          navigation.navigate('Home', { screen: 'Profile' });
        } else {
          console.log('error there is no token');
    
        }
    
    
      }
    

    const handleNavToSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}/>
            <Image source={ugpLogo} style={styles.logo}/>
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.loginText}>Need an Account?{' '}
                        <TouchableOpacity onPress={handleNavToSignUp}>
                            <Text style={styles.loginText}>Sign Up!</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        margin: 10,
        backgroundColor: '#FFFFFF',
        width: screenWidth * 0.6,
        borderRadius: 10,
        height: 50,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: screenWidth * 0.75,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

