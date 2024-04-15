import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { saveData } from '../util/localStorageController';

const ugpLogo = require('../assets/images/ugp_logo.png');
const backgroundImage = require('../assets/images/background.png');
const whiteGolfBall = require('../assets/images/white_golf_ball.svg');

const LoginPage = ({ navigation }: any) => {

  const handleLoginForm = () => {
    navigation.navigate('EmailLogin');
  };

  const handleGoogleSignUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      const user = userInfo.user;
      const token = userInfo.idToken;
      const userObj = {
        "avatarUri": user.photo, "email": user.email,
        "firstname": user.givenName, "lastname": user.familyName, "phone": null
      }
      await saveData('user', JSON.stringify(userObj));
      await saveData('token', token);

      navigation.navigate('Profile')
      // Handle the user information
    } catch (error) {
      console.log(error);

      console.error(error);
      // Handle error
    }

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
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleGoogleSignUp}
        />

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
    width: 200,
    height: 200,
    // marginHorizontal:'auto'
    marginLeft: 'auto',
    marginRight: 'auto'
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
    paddingBottom: 6,
    textAlign: 'center',
  },

  appleButton: {
    backgroundColor: '#000000',
    marginTop: 20,
  },
  googleButton: {
    marginTop: 20,
    width: 'auto',
    height: 50,
    marginHorizontal: '9%',
    fontSize: 30
  },
  signUpButton: {
    backgroundColor: '#00FF00',
    marginTop: 20,
  },
  termsText: {
    fontFamily: 'Arial',
    fontSize: 18,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    marginTop: 200,
    alignSelf: 'center',

  },
});

export default LoginPage;
