import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Button } from 'react-native';

const backgroundImage = require('../assets/images/background.png');

const EmailLogin = ({ navigation }: any) => {
  const handleLogin = async () => {
    console.log('handle login')
  }

  return (
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background} >
      <View style={styles.container} >
        {/* Use the imported images */}
        <View>
          <Text>Log in</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder='Enter Email'
        />
        <TextInput
          style={styles.input}
          placeholder='Enter Password'
        />
        <Button title="Submit" onPress={handleLogin}>

        </Button>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    width: '50%',
    marginBottom: 20
  },
  background: {
    width: '100%',
    height: '100%'
  },

});

export default EmailLogin;
