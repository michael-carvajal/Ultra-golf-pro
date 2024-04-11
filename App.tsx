import React from 'react';
import LoginPage from './src/Pages/LoginPage.tsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import EmailLogin from './src/Pages/EmailLogin.tsx';
function App(): React.ReactNode {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name='Login' component={LoginPage}></Stack.Screen>
  <Stack.Screen name='EmailLogin' component={EmailLogin}></Stack.Screen>
</Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
