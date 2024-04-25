import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const LogoutButton = ({handleLogout} :any) => {


  return (
    <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
      <Text style={styles.buttonText}>Log Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LogoutButton;