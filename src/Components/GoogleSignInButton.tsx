import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

const CustomGoogleSigninButton = ({ onPress } : any) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
      />
      <Text style={styles.buttonText}>Sign in with Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
    width: 'auto',
    height: 50,
    marginTop: 20,
    marginHorizontal: '9%',
  },
  googleButton: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    lineHeight: 50, // This should match the height of the button
    fontSize: 24, // Adjust the font size as desired
    color: '#fff', // Make sure the text color is suitable for visibility
  },
});

export default CustomGoogleSigninButton;
