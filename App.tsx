import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpPage from "./app/authentication/SignUpPage";
import TermsAndConditionsPage from "./app/legal/TermsAndConditionsPage";
import PrivacyPolicyPage from "./app/legal/PrivacyPolicyPage";
import LoginPage from "./app/authentication/LoginPage";
import { getData } from './app/utils/localStorageController';
import Home from './app/home/Home';

interface User {
  avatarUri: string | null;
  email: string;
  firstname: string;
  lastname: string;
  phone: string | null;
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await getData('user');
      if (user) {
        setUser(JSON.parse(user));
      }
    };
    getUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpPage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsPage} options={{ headerShown: true }} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyPage} options={{ headerShown: true }} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
