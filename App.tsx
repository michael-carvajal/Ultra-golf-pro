import React from 'react';
import LoginPage from './src/Pages/LoginPage.tsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import EmailLogin from './src/Pages/EmailLogin.tsx';
import ProfilePage from './src/Pages/ProfilePage.tsx';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

function App(): React.ReactNode {
  GoogleSignin.configure({
    webClientId: '135385101669-bqfaohiuej7m80m2fvr95ppdd9gndm98.apps.googleusercontent.com', // client ID from Google Developer Console
    offlineAccess: true,
  });
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginPage}></Stack.Screen>
        <Stack.Screen name='EmailLogin' component={EmailLogin}></Stack.Screen>
        <Stack.Screen name='Profile' component={ProfilePage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
