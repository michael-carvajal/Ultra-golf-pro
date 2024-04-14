import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

const ugpLogo = require('../assets/images/ugp_logo.png');
const backgroundImage = require('../assets/images/background.png');
const whiteGolfBall = require('../assets/images/white_golf_ball.svg');

const LoginPage = ({navigation}: any) => {
  const handleLoginForm = () => {
    navigation.navigate('EmailLogin');
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
      <View>
      
      <TouchableOpacity onPress={handleLoginForm} style={styles.button}>
        <Image source={whiteGolfBall} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Returning</Text>
        <Text style={styles.buttonText}>Members</Text>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      </View>
      {/* Sign Up buttons */}
      <TouchableOpacity style={[styles.button, styles.appleButton]}>
        <Text style={styles.buttonText}>Sign Up with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleGoogleSignUp}
        style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Sign Up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSignUpForm}
        style={[styles.button, styles.signUpButton]}>
        <Text style={styles.buttonText}>Sign Up with Email</Text>
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
    marginHorizontal: '10%'

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
    color: 'white',
    padding: 4,
    paddingBottom:6,
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: '#00FF00',
    marginTop: 20,
  },
  googleButton: {
    backgroundColor: 'lightblue',
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
    alignSelf:'center'
  },
});

export default LoginPage;
