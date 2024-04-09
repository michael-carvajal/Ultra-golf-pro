import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

const ugpLogo = require('../assets/images/ugp_logo.png');
const backgroundImage = require('../assets/images/background.png');
const whiteGolfBall = require('../assets/images/white_golf_ball.svg');

const LoginPage = ({navigation}: any) => {
  const handleLoginForm = () => {
    navigation.navigate('LoginFormScreen');
  };

  const handleGoogleSignUp = async () => {
    // Implement Google sign up logic here
    // This function will navigate to HomeScreen after successful sign up
    navigation.navigate('HomeScreen');
  };

  const handleSignUpForm = () => {
    navigation.navigate('SignUpFormScreen');
  };

  return (
    <View style={styles.container} >
      {/* Use the imported images */}
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background} >
      <Image source={ugpLogo} style={styles.logo} />
      <TouchableOpacity onPress={handleLoginForm} style={styles.button}>
        <Image source={whiteGolfBall} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Returning</Text>
        <Text style={styles.buttonText}>Members</Text>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      {/* Sign Up buttons */}
      <TouchableOpacity
        onPress={handleSignUpForm}
        style={[styles.button, styles.signUpButton]}>
        <Text style={styles.buttonText}>Sign Up with Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleGoogleSignUp}
        style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Sign Up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.appleButton]}>
        <Text style={styles.buttonText}>Sign Up with Apple</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>Terms and Conditions</Text>
</ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
   objectFit: 'contain',
   width:200,
    height: 200,
    // marginHorizontal:'auto'
    marginLeft:'auto',
    marginRight:'auto'
  },
background: {
  width: '100%',
  height: '100%'
},
  button: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 220,
    height: 220,
    position: 'absolute',
  },
  buttonText: {
    fontFamily: 'Arial',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00FF00',
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: '#00FF00',
    marginTop: 40,
  },
  googleButton: {
    backgroundColor: '#0000FF',
    marginTop: 20,
  },
  appleButton: {
    backgroundColor: '#000000',
    marginTop: 20,
  },
  termsText: {
    fontFamily: 'Arial',
    fontSize: 18,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default LoginPage;
